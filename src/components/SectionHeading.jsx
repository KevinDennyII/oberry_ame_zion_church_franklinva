import styles from './SectionHeading.module.css';

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className={styles.heading}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}

export default SectionHeading;
