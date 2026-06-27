import Header from './Header';
import Footer from './Footer';
import SkipLink from './SkipLink';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <SkipLink />
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
