import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | EeziCodez Tech',
  description: 'Privacy Policy and Data Protection guidelines for EeziCodez Tech.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#05070a] min-h-screen sub-page">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden !py-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(64,92,163,0.15),transparent_70%)]"></div>
        <div className="section-container relative z-10 text-center flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title fade-up mb-8 leading-tight">
              Upholding Privacy <br /> <span className="text-gradient">Protecting Your Data</span>
            </h1>
            <p className="hero-subtext fade-up max-w-2xl mx-auto text-white/60 text-xl font-medium leading-relaxed">
              Effective Date: December 07, 2024 <br />
              Last Updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="bg-white !py-12 rounded-t-[40px] md:rounded-t-[80px] -mt-12 relative z-20">
        <div className="!p-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row !ml-16 !gap-32">

            {/* Sidebar Navigation */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32">
                <h3 className="text-xl font-bold text-[var(--ink-40)] uppercase tracking-widest !mb-6">Contents</h3>
                <nav className="flex flex-col !gap-4 border-l border-[rgba(0,0,0,0.05)]">
                  <a href="#introduction" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">1. Introduction</a>
                  <a href="#information-collection" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">2. Information Collection</a>
                  <a href="#use-of-data" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">3. Use of Data</a>
                  <a href="#data-processing" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">4. Third-Party & Transfers</a>
                  <a href="#client-data" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">5. Client Data & IP</a>
                  <a href="#data-retention" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">6. Data Retention</a>
                  <a href="#data-security" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">7. Data Security</a>
                  <a href="#your-rights" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">8. Your Rights</a>
                  <a href="#cookies" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">9. Cookies & Children</a>
                  <a href="#policy-changes" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">10. Policy Changes</a>
                  <a href="#contact" className="text-[var(--ink-60)] hover:text-[var(--brand-blue)] font-medium text-[18px] transition-colors">11. Contact Us</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              <div className="text-[var(--ink)] leading-relaxed !space-y-16">

                {/* Section 1 */}
                <div id="introduction" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">1. Introduction</h2>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">
                    EeziCodez Tech ("we," "our," or "us") is a software engineering and technical consulting firm. We respect your privacy and are committed to protecting your personal data in accordance with global standards, including the General Data Protection Regulation (GDPR) and the Nigeria Data Protection Regulation (NDPR).
                  </p>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">
                    This Privacy Policy applies to all information collected through our website (eezicodeztech.com), communications, and service engagements. It outlines the scope of our data practices and your rights regarding your personal information.
                  </p>
                  <p className="text-[var(--ink-60)] text-lg italic">
                    This Privacy Policy shall be governed in accordance with the laws of the Federal Republic of Nigeria, without prejudice to applicable international data protection regulations where relevant.
                  </p>
                </div>

                {/* Section 2 */}
                <div id="information-collection" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">2. Information Collection</h2>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">We collect data to provide effective technical scoping and engineering services. The information we collect includes:</p>
                  <ul className="list-disc !pl-6 !space-y-3 text-[var(--ink-60)] text-lg">
                    <li><strong>Directly Provided Information:</strong> Name, email address, company name, project requirements, and technical scopes submitted via our contact forms or Scoping Modal.</li>
                    <li><strong>Automatically Collected Information:</strong> IP addresses, browser types, device information, and usage patterns collected via essential cookies or security protocols (e.g., hCaptcha) to prevent spam and abuse.</li>
                  </ul>
                  <p className="text-[var(--ink-60)] !mt-6 text-lg font-medium">
                    By submitting information through our forms, you acknowledge and consent to the processing of such information in accordance with this Privacy Policy.
                  </p>
                </div>

                {/* Section 3 */}
                <div id="use-of-data" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">3. Use of Data</h2>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">Your data is strictly utilized for core business operations. We use your information to:</p>
                  <ul className="list-disc !pl-6 !space-y-3 text-[var(--ink-60)] text-lg">
                    <li>Evaluate project scopes and provide accurate technical proposals.</li>
                    <li>Communicate regarding service inquiries, contracts, and project updates.</li>
                    <li>Maintain the security and integrity of our platform.</li>
                    <li>Comply with legal obligations and enforce our Terms of Service.</li>
                  </ul>

                  <h3 className="text-xl font-bold !mt-10 !mb-4 text-[var(--ink)]">Lawful Basis for Processing</h3>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">We process personal data under one or more lawful bases, including:</p>
                  <ul className="list-disc !pl-6 !space-y-2 text-[var(--ink-60)] text-lg">
                    <li>Consent</li>
                    <li>Legitimate business interests</li>
                    <li>Contractual necessity</li>
                    <li>Compliance with legal obligations</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div id="data-processing" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">4. Third-Party Processing & International Transfers</h2>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">
                    We do not sell, rent, or trade your personal data. We may share data with trusted third-party sub-processors solely to facilitate our services. These include:
                  </p>
                  <ul className="list-disc !pl-6 !space-y-3 text-[var(--ink-60)] text-lg">
                    <li><strong>ZeptoMail (Zoho):</strong> For routing transactional emails and lead notifications securely.</li>
                    <li><strong>hCaptcha:</strong> For bot protection and spam mitigation on our web forms.</li>
                    <li><strong>Cloud Infrastructure Providers:</strong> (e.g., AWS, GCP) used to host our platform and process form submissions securely.</li>
                  </ul>
                  <p className="text-[var(--ink-60)] !mt-4 text-lg">
                    All sub-processors are bound by strict data processing agreements and are required to maintain equivalent levels of data protection.
                  </p>

                  <h3 className="text-xl font-bold !mt-10 !mb-4 text-[var(--ink)]">International Data Transfers</h3>
                  <p className="text-[var(--ink-60)] text-lg">
                    Your information may be processed or stored in jurisdictions outside your country of residence through trusted infrastructure and service providers. Where applicable, we implement appropriate safeguards to ensure such transfers comply with relevant data protection laws.
                  </p>
                </div>

                {/* Section 5 */}
                <div id="client-data" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">5. Client Data & Intellectual Property (IP)</h2>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">
                    A distinction exists between "Visitor Data" (covered by this policy) and "Client Data" (data processed on your behalf during an active engineering project).
                  </p>
                  <p className="text-[var(--ink-60)] text-lg">
                    Once a commercial engagement begins, the processing of sensitive project data, source code, user databases, and Intellectual Property is governed by a separate, bespoke <strong>Non-Disclosure Agreement (NDA)</strong> and <strong>Data Processing Agreement (DPA)</strong>. EeziCodez Tech claims no ownership over client IP unless explicitly stated in a commercial contract.
                  </p>
                </div>

                {/* Section 6 */}
                <div id="data-retention" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">6. Data Retention</h2>
                  <p className="text-[var(--ink-60)] text-lg">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Project scoping briefs that do not result in a commercial contract are removed from active operational systems within 24 months, subject to secure backup retention policies and legal obligations.
                  </p>
                </div>

                {/* Section 7 */}
                <div id="data-security" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">7. Data Security</h2>
                  <p className="text-[var(--ink-60)] text-lg">
                    As an engineering firm, security is fundamental. We implement reasonable technical and organizational security measures consistent with industry practices to protect your data against unauthorized access, alteration, disclosure, or destruction. This includes TLS encryption in transit, secure environment variables for API credentials, and strict internal access controls. However, no internet-based transmission is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                {/* Section 8 */}
                <div id="your-rights" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">8. Your Data Protection Rights (GDPR & NDPR)</h2>
                  <p className="text-[var(--ink-60)] !mb-4 text-lg">Under applicable data protection laws, you possess the following rights:</p>
                  <ul className="list-disc !pl-6 !space-y-3 text-[var(--ink-60)] text-lg">
                    <li><strong>Right to Access:</strong> Request copies of your personal data.</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of your personal data under certain conditions.</li>
                    <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data.</li>
                    <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization.</li>
                  </ul>
                  <p className="text-[var(--ink-60)] !mt-4 text-lg">
                    To exercise any of these rights, please contact us at our provided email address. We respond to all legitimate requests within 30 days.
                  </p>
                </div>

                {/* Section 9 */}
                <div id="cookies" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">9. Cookies & Children's Privacy</h2>
                  <h3 className="text-xl font-bold !mb-4 text-[var(--ink)]">Cookies & Tracking</h3>
                  <p className="text-[var(--ink-60)] text-lg !mb-4">
                    We use essential cookies necessary for the operation and security of our platform (such as session management for anti-bot verification). Certain essential cookies are required for the proper operation and security of the platform and cannot be disabled through our systems.
                  </p>
                  <p className="text-[var(--ink-60)] text-lg !mb-8">
                    We currently do not use aggressive third-party marketing trackers. Any future implementation of non-essential analytics cookies will require your explicit opt-in consent.
                  </p>

                  <h3 className="text-xl font-bold !mb-4 text-[var(--ink)]">Children’s Privacy</h3>
                  <p className="text-[var(--ink-60)] text-lg">
                    Our services are not directed toward individuals under the age of 18, and we do not knowingly collect personal data from minors.
                  </p>
                </div>

                {/* Section 10 */}
                <div id="policy-changes" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">10. Changes to This Privacy Policy</h2>
                  <p className="text-[var(--ink-60)] text-lg">
                    We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. The updated version will be published on this page with a revised effective date.
                  </p>
                </div>

                {/* Section 11 */}
                <div id="contact" className="!scroll-mt-32">
                  <h2 className="text-2xl font-bold !mb-6 text-[var(--ink)]">11. Contact Us</h2>
                  <p className="text-[var(--ink-60)] !mb-6 text-lg">
                    If you have any questions about this Privacy Policy, our data practices, or wish to exercise your legal rights, please contact our Privacy & Compliance Team:
                  </p>
                  <div className="bg-[rgba(64,92,163,0.05)] border border-[rgba(64,92,163,0.1)] rounded-2xl !p-8">
                    <h4 className="font-bold text-[var(--ink)] text-xl !mb-2">EeziCodez Tech Legal</h4>
                    <p className="text-[var(--ink-60)] text-lg">Email: <a href="mailto:info@eezicodeztech.com" className="text-[var(--brand-blue)] font-medium hover:underline">info@eezicodeztech.com</a></p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="premium-cta" id="contact">
        <div className="cta-mesh-bg">
          <div className="mesh-blob blob-1"></div>
          <div className="mesh-blob blob-2"></div>
        </div>

        <div className="section-container">
          <div className="cta-glass-card fade-up">
            <div className="cta-highlight"></div>

            <span className="cta-pill fade-up">
              Let's Get to Work
            </span>

            <h2 className="cta-title fade-up fade-up-delay-1">
              Ready to Discuss<br className="hidden-mobile" />
              <span className="text-gradient">Your Next Project?</span>
            </h2>

            <p className="cta-desc fade-up fade-up-delay-2">
              Now that the legalities are settled, let's talk about the scalable architecture we can build for you.
            </p>

            <div className="hero-ctas-partners fade-up fade-up-delay-3">
              <Link href="/capabilities" className="btn btn-secondary glass-btn">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
