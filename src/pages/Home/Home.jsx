import style from './home.module.css';
import Navbar from '../commonComponents/navBar/Navbar';
import Search from './components/search/Search';
import Cards from './components/cards/Cards';

const Home = () =>{

    return(
        <>
            <Navbar/>
            <Search/>
            <Cards/>
        </>
    ); 
}


export default Home;