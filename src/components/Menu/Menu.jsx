import React from 'react';
import MenuItem from './MenuItem.jsx';
import MenuIcon from "../../assets/iconos/menu.svg";
import UbiIcon from "../../assets/iconos/ubi.svg";
import WhatsApp from "../../assets/iconos/whatsapp.svg";
import "./Menu.css"

const NavBar = () => {
    return(
    <div className="navbar">
        <MenuItem imagen={UbiIcon}/>
        <div className="contactMenu">
            <MenuItem imagen={WhatsApp}/>
            <MenuItem imagen={MenuIcon}/>
        </div>
    </div>
    );
}
export default NavBar;