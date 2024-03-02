import React from 'react';
import Contact from '../../../UI/Container';
import Information from '../../../UI/Information';
import styles from './Footer.module.scss';

const Footer = () => {
  const dataForContainer1 = ['+123 45 678 901'];
  const dataForContainer2 = ['somemail@gmail.com'];
  const dataForContainer3 = ['Avenue St. 432 , New York'];

  const imagesForContainer1 = ['./icons/PhoneIcon.svg'];
  const imagesForContainer2 = ['./icons/MessageIcon.svg'];
  const imagesForContainer3 = ['./icons/LocationIcon.svg'];

  const text1Array = ["Our Story", "Awards", "Our Team","Career"];
  const text2Array = ["Our Services", "Contact", "Clients"];
  const text3Array = ["Blog", "Newsletter", "Privacy Policy"];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.ContactContainer}> 
        <Contact data={dataForContainer1} image={imagesForContainer1} />
        <Contact data={dataForContainer2} image={imagesForContainer2} />
        <Contact data={dataForContainer3} image={imagesForContainer3} />
        </div>
        <div className={styles.LineContainer}>

        </div>
        <div className={styles.InformationContainer}>
          <Information text1="About" text2={text1Array} />
          <Information text1="Company" text2={text2Array} />
          <Information text1="Resources" text2={text3Array} />
          <div className={styles.Social}>
            <p>Social</p>
            <ul>
            <li>
              <img src="/icons/Instagram.svg" alt="Instagram" width={20} height={20}/>
              <a href="/">Instagram</a>
            </li>
            <li>
              <img src="/icons/Facebook.svg" alt="Facebook" width={20} height={20}/>
              <a href="/">Facebook</a>
            </li>
            <li>
              <img src="/icons/Twitch.svg" alt="Twitch" width={20} height={20}/>
              <a href="/">Twitch</a>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;