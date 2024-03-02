import React from 'react';
import styles from './Information.module.scss';

interface InformationProps {
  text1: string;
  text2: string[];
}

const Information: React.FC<InformationProps> = ({ text1, text2 }) => {
  return (
    <div className={styles.InformationContainer}>
      <p>{text1}</p>
      <ul>
        {text2.map((text, index) => (
          <li key={index}>
            <a href="/">{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;