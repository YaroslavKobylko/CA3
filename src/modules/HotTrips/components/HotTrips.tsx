import React from 'react';
import HotTripsPictures from '../../../components/HotTripsPictures';
import styles from './HotTrips.module.scss';

const trips = [
  {
    title: "Forest Hike",
    description: "United Kindom, London",
    imageUrl: "pictures/upper_middle_fork_willamette_jenessa_dragovich.jpeg"
  },
  {
    title: "Polar Ray",
    description: "United Kindom, London",
    imageUrl: "pictures/upper_middle_fork_willamette_jenessa_dragovich.jpeg"
  },
  {
    title: "Yosemite Falls",
    description: "United States, California",
    imageUrl: "pictures/upper_middle_fork_willamette_jenessa_dragovich.jpeg"
  }
];

const HotTrips: React.FC = () => {
  return (
    <div className={styles.hotTripsContainer}>
        <div className={styles.hotTrips}>
            <h1>Explore the World with our <span className={styles.HotTripsBlue}>Hot Trips</span></h1>
            <HotTripsPictures trips={trips} />
        </div>
    </div>
  );
};

export default HotTrips;