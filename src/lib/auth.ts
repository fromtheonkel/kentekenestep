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

export function isIPAllowed(ip: string): boolean {
  const allowedIPs = process.env.ADMIN_ALLOWED_IPS?.split(',').map(ip => ip.trim()) || [];
  
  // Always allow localhost for development
  const localhostIPs = ['127.0.0.1', '::1', 'localhost'];
  
  return [...allowedIPs, ...localhostIPs].includes(ip);
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