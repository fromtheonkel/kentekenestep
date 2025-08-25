import { NextRequest } from 'next/server';

export function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const clientIP = request.headers.get('x-client-ip');
  
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, get the first one
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) return realIP;
  if (clientIP) return clientIP;
  
  // Fallback to connection remote address
  return request.ip || 'unknown';
}

// Dutch IP ranges (simplified list of major ISPs)
const DUTCH_IP_RANGES = [
  // KPN
  '62.45.0.0/16', '84.241.0.0/16', '213.75.0.0/16',
  // Ziggo/VodafoneZiggo
  '83.161.0.0/16', '85.146.0.0/16', '213.46.0.0/16',
  // T-Mobile Netherlands
  '84.241.0.0/16', '217.121.0.0/16',
  // Tele2/T-Mobile
  '83.83.0.0/16', '213.84.0.0/16',
  // XS4ALL (now KPN)
  '194.109.0.0/16', '213.75.0.0/16',
  // General Netherlands ranges
  '62.163.0.0/16', '80.101.0.0/16', '84.245.0.0/16',
  '85.17.0.0/16', '145.58.0.0/16', '194.109.0.0/16',
  '213.84.0.0/16', '217.19.0.0/16'
];

function isIPInRange(ip: string, cidr: string): boolean {
  try {
    const [range, bits] = cidr.split('/');
    const mask = ~(2 ** (32 - parseInt(bits)) - 1);
    
    const ipToNumber = (ip: string) => {
      return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
    };
    
    return (ipToNumber(ip) & mask) === (ipToNumber(range) & mask);
  } catch {
    return false;
  }
}

function isDutchIP(ip: string): boolean {
  // Simple check for Dutch IP ranges
  for (const range of DUTCH_IP_RANGES) {
    if (isIPInRange(ip, range)) {
      return true;
    }
  }
  return false;
}

export function isIPAllowed(ip: string): boolean {
  // Always allow localhost for development
  const localhostIPs = ['127.0.0.1', '::1', 'localhost'];
  if (localhostIPs.includes(ip)) {
    return true;
  }
  
  // Check if IP is from Netherlands
  if (isDutchIP(ip)) {
    return true;
  }
  
  // Also check specific allowed IPs from env (as backup)
  const allowedIPs = process.env.ADMIN_ALLOWED_IPS?.split(',').map(ip => ip.trim()) || [];
  if (allowedIPs.includes(ip)) {
    return true;
  }
  
  return false;
}

export function validatePassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (!adminPassword) {
    console.error('ADMIN_PASSWORD environment variable not set!');
    return false;
  }
  
  return password === adminPassword;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

export function validateAuth(request: NextRequest, password?: string): AuthResult {
  const ip = getClientIP(request);
  
  // Check IP whitelist
  if (!isIPAllowed(ip)) {
    console.warn(`Admin access denied for IP: ${ip}`);
    return {
      success: false,
      error: 'Access denied from your IP address'
    };
  }
  
  // Check password if provided
  if (password !== undefined && !validatePassword(password)) {
    console.warn(`Invalid admin password attempt from IP: ${ip}`);
    return {
      success: false,
      error: 'Invalid password'
    };
  }
  
  return { success: true };
}