import React from 'react';
import styles from './QuestionButton.module.scss'; // Імпорт стилів з файлу QuestionButton.module.scss

const FixedButton: React.FC = () => {
  return (
    <div className={styles.fixed_button}>
      <button>
        <img src='./icons/Messag.svg' alt="Question" width={32} height={32}/>
      </button>
    </div>
  );
};

export default FixedButton;