
import React from 'react';
import styles from './ContactPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import contactData from '../data/contact.json';

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0053694159496!2d-76.96664638464816!3d36.72243227977302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0251e0534668f%3A0xbd90313cd51de4cb!2sO&#39;Berry%20A.M.E.%20Zion%20Church!5e0!3m2!1sen!2sus!4v1595306704305!5m2!1sen!2sus"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            title="O'Berry A.M.E. Zion Church Location"
          ></iframe>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
            <a href={`tel:${contactData.phone_number}`}>{contactData.phone_number}</a>
          </div>
          <div className={styles.infoItem}>
            <p>
              <span>Worship:</span>
              {contactData.worship_time}
            </p>
          </div>
          <div className={styles.infoItem}>
            <p>
              <span>Sunday School:</span>
              {contactData.sunday_school_time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
