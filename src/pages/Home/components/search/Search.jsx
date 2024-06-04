import style from './search.module.css';
const Search = () =>{

    return(
        <section className={style.searchContainer}>
            <div className={style.titleContainer}>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className={style.searchBarContain}>
                <input className={style.searchInput}></input>
                <button>SEARCH</button>
            </div>
        </section>
    ); 
}


export default Search;