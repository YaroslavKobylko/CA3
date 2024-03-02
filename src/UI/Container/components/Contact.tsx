import React from 'react';
import styles from './Contact.module.scss';

interface ContactProps {
  data: string[];
  image: string[];
}

const Contact: React.FC<ContactProps> = ({ data, image }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={styles.Container}>
          <div className={styles.SVGContainer}>
            <img src={image[index]} alt={`Image ${index + 1}` } width={40} height={40}/>
          </div>
          <div className={styles.ContactContainer}>
            <p>{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;