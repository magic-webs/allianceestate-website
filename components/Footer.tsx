import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <h3 className={styles.brandName}>ALLIANCE ESTATE</h3>
          <p className={styles.positioning}>Strategic real estate.<br/>Smarter investments.</p>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#approach">Our Approach</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Opportunities</h4>
          <ul>
            <li><Link href="#residential">Residential</Link></li>
            <li><Link href="#commercial">Commercial</Link></li>
            <li><Link href="#industrial">Industrial</Link></li>
            <li><Link href="#hospitality">Hospitality</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Insights</h4>
          <ul>
            <li><Link href="#updates">Market Updates</Link></li>
            <li><Link href="#insights">Investment Insights</Link></li>
            <li><Link href="#infrastructure">Infrastructure</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactInfo}>
            <li>+91 98765 43210</li>
            <li>contact@allianceestate.com</li>
            <li>Level 12, Infinity Tower,<br/>Cyber City, Gurugram</li>
          </ul>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={`container ${styles.bottomBar}`}>
        <div className={styles.legal}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Alliance Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
