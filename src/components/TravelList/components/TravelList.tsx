import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, DataSnapshot } from 'firebase/database';
import styles from './TravelList.module.scss';

interface Trip {
  City: string;
  Continent: string;
  Dates: string;
  Detailed: string;
  'Total price': string;
}

const TravelList: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [uniqueContinents, setUniqueContinents] = useState<string[]>([]);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState<{ width: string | null, left: string | null }>({ width: null, left: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const tripsRef = ref(db, '/');
        const snapshot = await get(tripsRef);
        const tripsData: Trip[] = [];
        const continents: Set<string> = new Set();
        snapshot.forEach((childSnapshot: DataSnapshot) => {
          const trip = childSnapshot.val();
          tripsData.push(trip);
          continents.add(trip.Continent);
        });
        setTrips(tripsData);
        setUniqueContinents(Array.from(continents));
  
        // Отримання елементу кнопки "All"
        const allButton = document.getElementById('all-button');
        if (allButton) {
          const { offsetWidth, offsetLeft } = allButton;
          // Встановлення стилів підкреслення
          setUnderlineStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const selectedButtonId = selectedContinent === 'All' ? 'all-button' : selectedContinent;
    if (selectedButtonId !== null) { // Перевірка, чи selectedButtonId не є null
      const selectedButton = document.getElementById(selectedButtonId);
      if (selectedButton) {
        const { offsetWidth, offsetLeft } = selectedButton;
        setUnderlineStyle({ width: `${offsetWidth}px`, left: `${offsetLeft}px` });
      }
    }
  }, [selectedContinent]);
  
  const handleContinentChange = (event: React.MouseEvent<HTMLButtonElement>, continent: string, width: string, left: string) => {
    event.preventDefault(); // Запобігти перезавантаженню сторінки
    setSelectedContinent(continent === 'All' ? null : continent);
    setUnderlineStyle({ width, left });
  };

  const continentMap: { [key: string]: Trip[] } = trips.reduce((acc: { [key: string]: Trip[] }, trip) => {
    if (!acc[trip.Continent]) {
      acc[trip.Continent] = [];
    }
    acc[trip.Continent].push(trip);
    return acc;
  }, {});

  return (
    <div className={styles.TravelListContainer}>
      <div className={styles.MenuContainer}>
        {['All', ...uniqueContinents].map((continent, index) => (
          <button
            key={index}
            id={index === 0 ? 'all-button' : continent}
            onClick={(e) => handleContinentChange(e, continent, `${e.currentTarget.offsetWidth}px`, `${e.currentTarget.offsetLeft}px`)}
            className={`${(selectedContinent === continent || (selectedContinent === null && continent === 'All')) ? styles.selected : ''}`}
          >
            {continent}
          </button>
        ))}
        {underlineStyle.width && (
          <span
            className={styles.underline}
            style={{ width: underlineStyle.width, left: underlineStyle.left ?? undefined }}
          />
        )}
      </div>
      {Object.entries(continentMap).map(([continent, cities]) => (
        <div key={continent} style={{ display: selectedContinent === continent || selectedContinent === 'All' || selectedContinent === null ? 'flex' : 'none' }} className={styles.ContinentContainer}>
          <div className={styles.RegionContainer}>
            <h2>{continent}</h2>
            <div className={styles.ViewAllContainer}>
              <a>View All</a>
            </div>
          </div>
          <div className={styles.CityContainer}>
          {cities.map((trip, index) => (
            <div key={index} className={styles.City}>
              <div className={styles.CityContent}>
                <div className={styles.TopPart}>
                    <div className={styles.CityAndDate}>
                        <p className={styles.CityName}>{trip.City}</p>
                        <div className={styles.DateContainer}>
                          <img src="./icons/Calendar.svg" alt="Calendar" />
                          <p className={styles.CityDate}>{trip.Dates}</p>
                        </div>
                    </div>
                    <div className={styles.SVGContainer}>
                        <img src="./icons/Star.svg" alt="Star" />
                    </div>
                </div>
                <div>
                    <img src="./pictures/Paris.png" alt="CityPhoto" width={297} height={180}/>
                </div>
                <div className={styles.BottomPart}>
                  <div className={styles.PriceContainer}>
                    <p className={styles.PriceText}>Total price:</p>
                    <p className={styles.Price}>{trip['Total price']}</p>
                  </div>
                  <div className={styles.ViewContainer}>
                    <div className={styles.ViewDetails}>
                      <a>View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelList;