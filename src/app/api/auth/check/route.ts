import { NextRequest, NextResponse } from 'next/server';
import { validateAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check IP whitelist first
    const authResult = validateAuth(request);
    
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, error: authResult.error },
        { status: 401 }
      );
    }

    // Check session cookie
    const sessionCookie = request.cookies.get('admin-session');
    
    if (sessionCookie?.value === 'authenticated') {
      return NextResponse.json({ 
        success: true, 
        message: 'Authenticated' 
      });
    }

    return NextResponse.json(
      { success: false, error: 'Not authenticated' },
      { status: 401 }
    );

  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication check failed' },
      { status: 500 }
    );
  }
}