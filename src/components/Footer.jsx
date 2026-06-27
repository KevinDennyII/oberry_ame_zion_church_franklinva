import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          Made by{' '}
          <a
            href="https://www.ohhdennyservices.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            OhhDenny Services, LLC
          </a>{' '}
          with ❤️
        </p>
        <p>Copyright © {year} O&apos;Berry A. M. E. Zion Church. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
