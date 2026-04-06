
import React from 'react';
import styles from './AboutPage.module.css';
import aboutData from '../data/about.json';
import committeeImage from '../assets/OBerry-church-committee-web.jpg';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <figure>
            <img
              src={committeeImage}
              alt={aboutData.image_alt}
              className={styles.image}
            />
            <figcaption className={styles.caption}>
              {aboutData.image_caption}
            </figcaption>
          </figure>
        </div>
        <div className={styles.textContainer}>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
