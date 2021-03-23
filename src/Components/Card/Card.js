import React from 'react';
import styles from './Card.module.css'


const Cards = ({title, imgUrl}) => {
    return (  <div className={styles.card}><img src={imgUrl} className="img img-responsive"/>
    <div className={styles.cardBody}>
    <div className={styles.title}>{title}</div>
    </div>
</div> );
}
export default Cards;