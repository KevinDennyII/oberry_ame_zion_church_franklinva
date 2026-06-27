import aboutData from '../data/about.json';
import committeeImage from '../assets/OBerry-church-committee-web.jpg';
import churchImage from '../assets/oberry_ame_zion_church.jpg';
import logoImage from '../assets/amezion-logo-2.png';
import SectionHeading from '../components/SectionHeading';
import styles from './AboutPage.module.css';

function TimelineItem({ year, title, description, isLast }) {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineMarker} aria-hidden="true">
        <span className={styles.timelineDot} />
        {!isLast && <span className={styles.timelineLine} />}
      </div>
      <div className={styles.timelineContent}>
        <span className={styles.timelineYear}>{year}</span>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <p className={styles.timelineDescription}>{description}</p>
      </div>
    </li>
  );
}

function AboutPage() {
  const { leadership, timeline } = aboutData;

  return (
    <>
      <section className={styles.banner} aria-label="About O'Berry Church">
        <div
          className={styles.bannerBackground}
          style={{ backgroundImage: `url(${churchImage})` }}
          aria-hidden="true"
        />
        <div className={styles.bannerOverlay} aria-hidden="true" />
        <div className={styles.bannerContent}>
          <img
            src={logoImage}
            alt=""
            className={styles.bannerLogo}
            width={72}
            height={63}
            aria-hidden="true"
          />
          <h1 className={styles.bannerTitle}>{aboutData.title}</h1>
          <p className={styles.bannerSubtitle}>{aboutData.subtitle}</p>
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.historyInner}>
          <SectionHeading
            eyebrow="Our Story"
            title="Nearly Two Centuries of Faith"
          />
          <ol className={styles.timeline}>
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                description={item.description}
                isLast={index === timeline.length - 1}
              />
            ))}
          </ol>
          <div className={styles.narrative}>
            {aboutData.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.leadership}>
        <div className={styles.leadershipInner}>
          <SectionHeading
            eyebrow="Leadership"
            title="Our Pastoral Family"
            subtitle="Serving O'Berry with dedication and love."
          />
          <div className={styles.leadershipCards}>
            <div className={styles.leadershipCard}>
              <span className={styles.leadershipRole}>Pastor</span>
              <span className={styles.leadershipName}>{leadership.pastor}</span>
            </div>
            <div className={styles.leadershipCard}>
              <span className={styles.leadershipRole}>First Lady</span>
              <span className={styles.leadershipName}>{leadership.first_lady}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.committee}>
        <div className={styles.committeeInner}>
          <SectionHeading
            eyebrow="Our People"
            title="Church Committee"
          />
          <figure className={styles.committeeFigure}>
            <img
              src={committeeImage}
              alt={aboutData.image_alt}
              className={styles.committeeImage}
              loading="lazy"
            />
            <figcaption className={styles.committeeCaption}>
              {aboutData.image_caption}
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
