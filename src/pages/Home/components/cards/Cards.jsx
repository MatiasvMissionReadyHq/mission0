import style from './cards.module.css';
const Cards = () =>{

    return(
        <section className={style.mainCardsContainer}>
            <div className={style.cardsContainer}>
                <img className={style.imageContainer} src="src/assets/background.png"></img>
                <div className={style.textContainer}>
                    <h2 className={style.cardTittle}>Lorem Ipsum</h2>
                    <p className={style.cardText}>Eti veniam nisi</p>
                </div>
            </div>
            <div className={style.cardsContainer}>
                <img className={style.imageContainer} src="src/assets/background.png"></img>
                <div className={style.textContainer}>
                    <h2 className={style.cardTittle}>Lorem Ipsum</h2>
                    <p className={style.cardText}>Eti veniam nisi</p>
                </div>
            </div>
            <div className={style.cardsContainer}>
                <img className={style.imageContainer} src="src/assets/background.png"></img>
                <div className={style.textContainer}>
                    <h2 className={style.cardTittle}>Lorem Ipsum</h2>
                    <p className={style.cardText}>Eti veniam nisi</p>
                </div>
            </div>
        </section>
    ); 
}


export default Cards;