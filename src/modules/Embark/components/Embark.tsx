import React from 'react';
import styles from './Embark.module.scss'; // Імпортуйте стилі з файлу HotTrips.module.scss

const Embark: React.FC = () => {
  return (
    <div className={styles.EmbarkContainer}>
      <div className={styles.Embark}>
        <h2>Embark on <span className={styles.EmbarkSpan}>unforgettable</span> journeys with our travel agency, where each adventure is crafted with <span className={styles.EmbarkSpan}>precision</span> and <span className={styles.EmbarkSpan}>passion</span>.</h2>
      </div>
    </div>
  );
};

export default Embark;