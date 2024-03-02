import React from 'react';
import styles from './HotTripsPictures.module.scss';

interface HotTrip {
  title: string;
  description: string;
  imageUrl: string;
}

interface HotTripsLogoProps {
  trips: HotTrip[];
}

const HotTripsLogo: React.FC<HotTripsLogoProps> = ({ trips }) => {
  return (
    <div className={styles.hotTripsLogo}>
      {trips.map((trip, index) => (
        <div key={index} className={styles.hotTrip}>
          <img src={trip.imageUrl} alt={trip.title} width={400} height={490}/>
          <div className={styles.TripText}>
          <h3>{trip.title}</h3>
          <p>{trip.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotTripsLogo;