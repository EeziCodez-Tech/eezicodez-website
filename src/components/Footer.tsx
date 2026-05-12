import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-top-glow"></div>
      <div className="footer-ambient-glow"></div>

      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/Official%20logo.svg"
                alt="EeziCodez Tech"
                width={120}
                height={32}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-desc">
              We design and deliver production-grade software systems across web, mobile, and data infrastructure. Built for organisations that cannot afford downtime or technical debt.
            </p>
            <div className="footer-socials">
              {['LinkedIn'].map((social) => (
                <a key={social} href="https://ng.linkedin.com/company/eezicodez-tech" className="social-link-premium">
                  {social}
                </a>
              ))}
              {['Instagram'].map((social) => (
                <a key={social} href="https://www.instagram.com/eezicodeztech/" className="social-link-premium">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Capabilities</h4>
            <ul>
              <li><Link href="/capabilities#architecture">Systems Architecture</Link></li>
              <li><Link href="/capabilities#platform">Platform Engineering</Link></li>
              <li><Link href="/capabilities#data">Data & Automation</Link></li>
              <li><Link href="/capabilities#platform">Mobile Backend</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Work</h4>
            <ul>
              <li><Link href="/case-studies">Selected Cases</Link></li>
              <li><Link href="/capabilities">Our Approach</Link></li>
              <li><Link href="/#process">Engineering Process</Link></li>
              <li><Link href="/#tech">Technical Stack</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Contact</h4>
            <ul>
              <li><a href="mailto:info@eezicodeztech.com">info@eezicodeztech.com</a></li>
              <li><Link href="mailto:info@eezicodeztech.com">Schedule Strategy Call</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/">Back to Home</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} EeziCodez Tech. Built for Scale. Engineered for Excellence.
          </p>
          {/* <div className="footer-legal">
            <Link href="#">Privacy Protocol</Link>
            <Link href="#">System Terms</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
