import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...formData } = body;

    if (type === 'general') {
      // General contact form
      const { name, email, subject, message } = formData;

      const data = await resend.emails.send({
        from: 'KentekenEstep Contact <noreply@kentekenestep.nl>',
        to: ['iwanvandenenk@gmail.com'],
        subject: `[Contact] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
              Nieuwe contactvraag
            </h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Onderwerp:</strong> ${subject}</p>
            </div>
            
            <div style="background: #ffffff; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e293b;">Bericht:</h3>
              <p style="line-height: 1.6; color: #334155;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Verzonden via KentekenEstep.nl contactformulier</p>
              <p>Reageer direct op ${email}</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true, data });
    } 
    
    else if (type === 'product') {
      // Product addition form
      const { 
        companyName, contactPerson, email, phone, productName, 
        rdwNumber, price, website, affiliateProgram, description, specifications 
      } = formData;

      const data = await resend.emails.send({
        from: 'KentekenEstep Product <noreply@kentekenestep.nl>',
        to: ['iwanvandenenk@gmail.com'],
        subject: `[Product Aanvraag] ${productName} - ${companyName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              Nieuwe Product Aanvraag
            </h2>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="margin-top: 0; color: #166534;">Bedrijfsinformatie</h3>
              <p><strong>Bedrijf:</strong> ${companyName}</p>
              <p><strong>Contactpersoon:</strong> ${contactPerson}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d97706;">
              <h3 style="margin-top: 0; color: #92400e;">Productinformatie</h3>
              <p><strong>Product:</strong> ${productName}</p>
              <p><strong>RDW Nummer:</strong> ${rdwNumber}</p>
              <p><strong>Prijs:</strong> €${price}</p>
              <p><strong>Website:</strong> ${website || 'Niet opgegeven'}</p>
            </div>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0369a1;">
              <h3 style="margin-top: 0; color: #1e40af;">Affiliate Programma</h3>
              <p style="line-height: 1.6;">${affiliateProgram.replace(/\n/g, '<br>')}</p>
            </div>
            
            ${description ? `
              <div style="background: #fdf4ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #9333ea;">
                <h3 style="margin-top: 0; color: #7c2d12;">Productbeschrijving</h3>
                <p style="line-height: 1.6;">${description.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}
            
            ${specifications ? `
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #475569;">
                <h3 style="margin-top: 0; color: #334155;">Specificaties</h3>
                <p style="line-height: 1.6;">${specifications.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Verzonden via KentekenEstep.nl product toevoeg formulier</p>
              <p>Reageer binnen 5 werkdagen op ${email}</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true, data });
    }

    return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}