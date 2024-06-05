import style from './cardGrid.module.css';
import myImage from '../../../../assets/background.png';
import Card from './components/Card';

const CardGrid = () =>{

    return(
        <section className={style.mainCardsContainer}>
            <Card image={myImage} title="Lorem Ipsum" text="Eti veniam nisi"/>
            <Card image={myImage} title="Lorem Ipsum" text="Eti veniam nisi"/>
            <Card image={myImage} title="Lorem Ipsum" text="Eti veniam nisi"/>
        </section>
    ); 
}


export default CardGrid;