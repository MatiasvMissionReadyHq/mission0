import style from './navbar.module.css';

const Navbar = () =>{
    return(
        <div id={style.boxContainer}>
            <span id={style.dotBox}></span>
            <a href="#" id={style.LogoBox}>My Company</a>
            <nav id={style.navBox}>
                <a href="#">Menu1</a>
                <a href="#">Menu2</a>
                <a href="#">Menu3</a>
                <a href="#" className={style.loginButton}>Login</a>
            </nav>
            <span className={style.menuIcon}>&#9776;</span>
            {/* <div id={style.showIconBox}>showicon</div> */}
        </div>
        

    );

}

export default Navbar;