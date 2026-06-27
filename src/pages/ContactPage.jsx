import contactData from '../data/contact.json';
import SectionHeading from '../components/SectionHeading';
import styles from './ContactPage.module.css';

function ContactPage() {
  const { address } = contactData;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <>
      <section className={styles.banner} aria-label="Contact">
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>{contactData.title}</h1>
          <p className={styles.bannerSubtitle}>{contactData.subtitle}</p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.infoPanel}>
            <SectionHeading
              eyebrow="Get In Touch"
              title="We'd Love to Hear From You"
            />

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone</span>
                <a href={contactData.phone_href} className={styles.infoValue}>
                  {contactData.phone_number}
                </a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>Sunday School</span>
                <span className={styles.infoValue}>{contactData.sunday_school_time}</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>Worship</span>
                <span className={styles.infoValue}>{contactData.worship_time}</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoLabel}>Address</span>
                <address className={styles.address}>
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </address>
              </li>
            </ul>

            <div className={styles.actions}>
              <a
                href={contactData.directions_url}
                className={styles.directionsButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
              <a href={contactData.phone_href} className={styles.callButton}>
                Call the Church
              </a>
            </div>
          </div>

          <div className={styles.mapPanel}>
            <iframe
              src={contactData.map_embed_url}
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${fullAddress}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
