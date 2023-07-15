import React, { useContext } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Settings.css';
import { Context } from '../../context/Context';
import profImg from './pp.jpg';

export default function Settings() {
  const { user } = useContext(Context);
  const PF = profImg;

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={PF + user.profilePicture} alt="" />
          </div>
          <label>Username</label>
          <input type="text" value={user.username} disabled />
          <label>Email</label>
          <input type="email" value={user.email} disabled />
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
