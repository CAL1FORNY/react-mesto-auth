import headerLogo from "../images/logo.svg";
import { Link, Route, Routes } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img src={ headerLogo } className="header__logo" alt="Логотип Mesto" />
      <div className="header__member-area">
        { props.isLoggedIn ? (
          <>
            <p className="header__menu-item">{ props.email }</p>
            <Link to='/sign-in' className="header__menu-item" onClick={ props.isLogout }>Выйти</Link>
          </>
        ) : (
          <>
          <Routes>
            <Route path='/sign-up'>
              <Link to='/sign-in' className="header__menu-item">Вход</Link>
            </Route>
            < Route path='/sign-in' >
              <Link to='/sign-up' className="header__menu-item">Регистрация</Link>
            </Route>
          </Routes>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
