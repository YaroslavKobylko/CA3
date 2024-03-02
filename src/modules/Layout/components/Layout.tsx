import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.content}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;