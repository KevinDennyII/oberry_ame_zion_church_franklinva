import { Link } from 'react-router-dom';
import homeData from '../data/home.json';
import churchPhoto from '../assets/oberry_ame_zion_church.jpg';
import committeePhoto from '../assets/OBerry-church-committee-web.jpg';
import SectionHeading from '../components/SectionHeading';
import styles from './HomePage.module.css';

function ServiceCard({ label, value, href }) {
  const content = (
    <>
      <span className={styles.cardLabel}>{label}</span>
      <span className={styles.cardValue}>{value}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles.serviceCard}>
        {content}
      </a>
    );
  }

  return <div className={styles.serviceCard}>{content}</div>;
}

function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-label="Welcome">
        <div
          className={styles.heroBackground}
          style={{ backgroundImage: `url(${churchPhoto})` }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.welcomeLine}>{homeData.welcome_line1}</p>
          <h1 className={styles.churchTitle}>{homeData.welcome_line2}</h1>
          <p className={styles.tagline}>{homeData.tagline}</p>
          <div className={styles.heroActions}>
            <Link to="/contact" className={styles.primaryButton}>
              Plan Your Visit
            </Link>
            <a href="tel:+17575690006" className={styles.secondaryButton}>
              (757) 569-0006
            </a>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Service Times
        </h2>
        <div className={styles.servicesGrid}>
          {homeData.service_cards.map((card) => (
            <ServiceCard
              key={card.label}
              label={card.label}
              value={card.value}
              href={card.href}
            />
          ))}
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="intro-heading">
        <div className={styles.introInner}>
          <SectionHeading
            eyebrow="Our Church"
            title="Faith, Family & Franklin"
            subtitle={homeData.intro}
          />
          <div className={styles.introActions}>
            <Link to="/about" className={styles.textLink}>
              Read our history →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <SectionHeading
          eyebrow="Our Community"
          title="A Church Family"
          subtitle="From our historic building to the people who fill it with love every Sunday."
        />
        <div className={styles.galleryGrid}>
          <figure className={styles.galleryItem}>
            <img
              src={churchPhoto}
              alt="O'Berry A. M. E. Zion Church building in Franklin, Virginia"
              loading="lazy"
              className={styles.galleryImage}
            />
            <figcaption className={styles.galleryCaption}>Our church home</figcaption>
          </figure>
          <figure className={styles.galleryItem}>
            <img
              src={committeePhoto}
              alt="O'Berry A. M. E. Zion Church committee members"
              loading="lazy"
              className={styles.galleryImage}
            />
            <figcaption className={styles.galleryCaption}>Church committee</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default HomePage;
