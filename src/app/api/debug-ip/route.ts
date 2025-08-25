import { NextRequest, NextResponse } from 'next/server';
import { getClientIP, isIPAllowed } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const detectedIP = getClientIP(request);
  const allowedIPs = process.env.ADMIN_ALLOWED_IPS?.split(',').map(ip => ip.trim()) || [];
  const localhostIPs = ['127.0.0.1', '::1', 'localhost'];
  const allAllowedIPs = [...allowedIPs, ...localhostIPs];
  
  return NextResponse.json({
    detectedIP,
    allowedIPs,
    localhostIPs,
    allAllowedIPs,
    isAllowed: isIPAllowed(detectedIP),
    headers: {
      'x-forwarded-for': request.headers.get('x-forwarded-for'),
      'x-real-ip': request.headers.get('x-real-ip'),
      'x-client-ip': request.headers.get('x-client-ip'),
      'request-ip': request.ip
    }
  });
}