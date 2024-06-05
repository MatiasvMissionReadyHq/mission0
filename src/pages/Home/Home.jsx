import style from './home.module.css';
import Navbar from '../commonComponents/navBar/Navbar';
import Search from './components/search/Search';
import CardGrid from './components/CardGrid/CardGrid';

const Home = () =>{

    return(
        <>
            <Navbar/>
            <Search/>
            <CardGrid/>
        </>
    ); 
}


export default Home;