export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      focus,
      stage,
      timeline,
      message,
      hcaptchaToken,
    } = body;

    // Validate required fields
    if (!name || !email || !focus || !stage || !hcaptchaToken) {
      return Response.json(
        { error: "Missing required fields or captcha verification" },
        { status: 400 },
      );
    }

    const hcaptchaSecret = process.env.HCAPTCHA_SECRET;
    if (!hcaptchaSecret) {
      console.error("Missing HCAPTCHA_SECRET environment variable");
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Verify hCaptcha
    const verifyData = new URLSearchParams();
    verifyData.append("secret", hcaptchaSecret);
    verifyData.append("response", hcaptchaToken);

    try {
      const captchaRes = await fetch("https://api.hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verifyData.toString(),
      });
      const captchaJson = await captchaRes.json();

      if (!captchaJson.success) {
        console.error("Captcha failed:", captchaJson);
        return Response.json(
          { error: "Captcha verification failed" },
          { status: 400 },
        );
      }
    } catch (e) {
      console.error("hCaptcha verification error:", e);
      return Response.json(
        { error: "Captcha verification error" },
        { status: 500 },
      );
    }

    const apiKey = process.env.ZEPTOMAIL_API_KEY;
    const fromAddress = process.env.ZEPTOMAIL_FROM;
    const toAddress = process.env.ZEPTOMAIL_TO;

    if (!apiKey || !fromAddress || !toAddress) {
      console.error("Missing ZeptoMail environment variables");
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Build the internal notification email
    const internalHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #0b0f19; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
        <div style="padding: 24px; text-align: center; background: #ffffff;">
          <img src="https://eezicodeztech.com/images/Official%20logo.svg" alt="EeziCodez Tech" style="height: 32px; width: auto; display: block; margin: 0 auto;" />
        </div>
        <div style="background: linear-gradient(135deg, #405ca3 0%, #2d4178 100%); padding: 40px 32px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">New Project Inquiry</h1>
          <p style="margin: 8px 0 0; font-size: 14px; color: rgba(255,255,255,0.7);">Received via EeziCodez Project Scoping Form</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;"><a href="mailto:${email}" style="color: #7b9cf5; text-decoration: none;">${email}</a></td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${company}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Focus Area</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${focus}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Project Stage</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${stage}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Timeline</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${timeline || "Not specified"}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 12px 0; color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px; line-height: 1.6;">${message}</td>
            </tr>`
                : ""
            }
          </table>
        </div>
        <div style="padding: 24px 32px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <p style="margin: 0; font-size: 12px; color: rgba(255,255,255,0.3);">EeziCodez Tech · Project Scoping System</p>
        </div>
      </div>
    `;

    // Send internal notification to team
    const internalRes = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        from: { address: fromAddress, name: "EeziCodez" },
        to: [{ email_address: { address: toAddress, name: "EeziCodez Tech" } }],
        subject: `New Project Inquiry: ${focus} — ${name}`,
        htmlbody: internalHtml,
      }),
    });

    if (!internalRes.ok) {
      const errText = await internalRes.text();
      console.error("ZeptoMail internal email failed:", errText);
      return Response.json(
        { error: "Failed to send notification" },
        { status: 500 },
      );
    }

    // Send confirmation email to the client
    const confirmationHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff; color: #1c2331; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="padding: 24px; text-align: center; background: #ffffff; border-bottom: 1px solid #f0f0f0;">
          <img src="https://eezicodeztech.com/images/Official%20logo.svg" alt="EeziCodez Tech" style="height: 32px; width: auto; display: block; margin: 0 auto;" />
        </div>
        <div style="background: linear-gradient(135deg, #405ca3 0%, #2d4178 100%); padding: 40px 32px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">We've Received Your Brief</h1>
          <p style="margin: 12px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">Our lead architect is reviewing your project scope.</p>
        </div>
        <div style="padding: 40px 32px;">
          <p style="font-size: 15px; line-height: 1.7; color: #4a5568; margin: 0 0 24px;">
            Hi <strong style="color: #1c2331;">${name}</strong>,
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #4a5568; margin: 0 0 24px;">
            Thank you for reaching out to EeziCodez Tech. We've received your project scoping request for <strong style="color: #405ca3;">${focus}</strong> and our engineering team will review it within 24 hours.
          </p>
          <div style="background: #f7f8fa; border-radius: 12px; padding: 24px; margin: 24px 0; border: 1px solid #e2e8f0;">
            <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #405ca3;">Your Project Summary</h3>
            <p style="margin: 4px 0; font-size: 14px; color: #4a5568;"><strong>Focus:</strong> ${focus}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #4a5568;"><strong>Stage:</strong> ${stage}</p>
            <p style="margin: 4px 0; font-size: 14px; color: #4a5568;"><strong>Timeline:</strong> ${timeline || "To be discussed"}</p>
          </div>
          <p style="font-size: 15px; line-height: 1.7; color: #4a5568; margin: 0 0 32px;">
            We'll be in touch shortly to discuss next steps. In the meantime, feel free to explore our <a href="https://eezicodeztech.com/case-studies" style="color: #405ca3; text-decoration: none; font-weight: 600;">case studies</a> to see the kind of work we deliver.
          </p>
          <p style="font-size: 14px; color: #718096; margin: 0;">
            — The EeziCodez Engineering Team
          </p>
        </div>
        <div style="padding: 24px 32px; background: #f7f8fa; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #a0aec0;">EeziCodez Tech · Engineering Excellence</p>
        </div>
      </div>
    `;

    await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({
        from: { address: fromAddress, name: "EeziCodez" },
        to: [{ email_address: { address: email, name: name } }],
        subject: `EeziCodez — We've received your project brief`,
        htmlbody: confirmationHtml,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Send lead error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
