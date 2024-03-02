import React from 'react';
import styles from './Quote.module.scss';

const Quote: React.FC = () => (
<div className={styles.Container}>
  <div className={styles.QuoteContainer}>
    <div className={styles.ContentContainer}>
        <div className={styles.Quote}>
            <div className={styles.quotesleft}>
                <div className={styles.QuoteImageTop}>
                    <img src='./icons/QuotesTop.svg' alt="Quotes" width={32} height={32}/>
                </div>
            </div>
            <div className={styles.QuoteTextContainer}>
                <div className={styles.QuoteText}>
                    <p>Embark on <span className={styles.QuoteSpan}>extraordinary</span> journeys with us. Our <span className={styles.QuoteSpan}>travel experiences</span> are meticulously crafted, ensuring seamless <span className={styles.QuoteSpan}>adventures</span> tailored just for you. Discover <span className={styles.QuoteSpan}>unparalleled</span> service, <span className={styles.QuoteSpan}>attention</span> to detail, and a commitment to making every moment <span className={styles.QuoteSpan}>unforgettable</span>. Choose us for a travel experience beyond the <span className={styles.QuoteSpan}>ordinary</span></p>
                </div>
            </div>
            <div className={styles.quotesright}>
                <div className={styles.QuoteImageBottom}>
                    <img src='./icons/QuotesBottom.svg' alt="Quotes" width={32} height={32}/>
                </div>
            </div>
        </div>
        <div className={styles.AuthorContainer}>
            <div className={styles.Author}>
                <p>SEO: <span className={styles.JaneCooper}>Jane Cooper</span></p>
            </div>
        </div>
    </div>
  </div>
</div>
);

export default Quote;