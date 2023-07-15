import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import userImg from './user.jpg';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = userImg;

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://www.linkedin.com/in/manraj-singh-006032250/' target='_blank'><i className='topIcon fa-brands fa-linkedin'></i></a>
        <a href='mailto:manraj.saini123@gmail.com' target='_blank'><i className='topIcon fa-brands fa-google'></i></a>
        <a href='https://wa.me/7986266675' target='_blank'><i className='topIcon fa-brands fa-whatsapp'></i></a>
        <a href='https://github.com/ManrajSaini' target='_blank'><i className='topIcon fa-brands fa-github'></i></a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItems'>
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className='topListItems'>
            <Link className='link' to='/write'>WRITE</Link>
          </li>
          <li className='topListItems'>
            <Link className='link' to='/' onClick={handleLogout}>
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <Link to="/settings">
              <img className="topImg" src={PF} alt="" />
            </Link>
          ) : (
            <ul className='topList'>
              <li className='topListItems'>
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className='topListItems'>
                <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  );
}
