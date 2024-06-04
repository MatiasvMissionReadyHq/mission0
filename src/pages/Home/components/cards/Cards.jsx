import style from './cards.module.css';
import myImage from '../../../../assets/background.png';

const Cards = () =>{

    return(
        <section className={style.mainCardsContainer}>
            <div className={style.cardsContainer}>
                <img className={style.imageContainer} src={myImage}></img>
                <div className={style.textContainer}>
                    <h2 className={style.cardTittle}>Lorem Ipsum</h2>
                    <p className={style.cardText}>Eti veniam nisi</p>
                </div>
            </div>
            <div className={style.cardsContainer}>
                <img className={style.imageContainer} src={myImage}></img>
                <div className={style.textContainer}>
                    <h2 className={style.cardTittle}>Lorem Ipsum</h2>
                    <p className={style.cardText}>Eti veniam nisi</p>
                </div>
            </div>
            <div className={style.cardsContainer}>
                <img className={style.imageContainer} src={myImage}></img>
                <div className={style.textContainer}>
                    <h2 className={style.cardTittle}>Lorem Ipsum</h2>
                    <p className={style.cardText}>Eti veniam nisi</p>
                </div>
            </div>
        </section>
    ); 
}


export default Cards;