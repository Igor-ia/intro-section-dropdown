import { useState } from "react";
import { Nav } from "./styled";


import Logo from '../../assets/logo.svg'
import arrowDown from '../../assets/icon-arrow-down.svg';
import arrowUp from '../../assets/icon-arrow-up.svg';
import ListIcon from '../../assets/icon-todo.svg';
import CalendarIcon from '../../assets/icon-calendar.svg';
import BellIcon from '../../assets/icon-reminders.svg';
import TimerIcon from '../../assets/icon-planning.svg';
import MenuIcon from '../../assets/icon-menu.svg';
import CloseIcon from '../../assets/icon-close-menu.svg';
export default function Header() {
    const [notActiveFeatures, setNotActiveFeatures] = useState(true);
    const [notActiveCompany, setNotActiveCompany] = useState(true);
    const [isClose, setIsClose] = useState(true);

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('features')) {
            setNotActiveFeatures(!notActiveFeatures);
            const dropdown = el.nextSibling;

            dropDownClick(dropdown, notActiveFeatures)

            const dropdownActive = document.querySelector('a.company').nextSibling;
            dropdownActive.classList.remove('active');
            setNotActiveCompany(true)

        } else if (el.classList.contains('company')) {
            setNotActiveCompany(!notActiveCompany);
            const dropdown = el.nextSibling;
            dropDownClick(dropdown, notActiveCompany)

            const dropdownActive = document.querySelector('a.features').nextSibling;

            dropdownActive.classList.remove('active');
            setNotActiveFeatures(true);

        } else {
            setNotActiveCompany(true);
            setNotActiveFeatures(true);

            const elements = [...document.getElementsByClassName('active')];
            elements.map(element => {
                element.classList.remove('active');
            })
        }
    })


    function dropDownClick(targetDropdown, notActive) {
        if (notActive) {
            targetDropdown.classList.add('active');
        } else {
            targetDropdown.classList.remove('active');
        }
    }


    function handleMobileToggle() {
        setIsClose(!isClose);
        const iconMenu = document.querySelector('.menu-toggle');
        const iconClose = document.querySelector('.close-toggle');
        const navbarMobile = document.querySelector('.navbar');

        if (isClose) {
            iconMenu.classList.add('hidden');
            iconClose.classList.remove('hidden');
            navbarMobile.classList.remove('hidden');
        } else {
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
            navbarMobile.classList.add('hidden');
        }

    }

    return (


        <Nav>
            <img className="logo" src={Logo} alt="Logo" />
            <button type="button" onClick={handleMobileToggle} className="mobile-toggle">
                <img src={MenuIcon} className="menu-toggle" alt="Menu" />
                <img src={CloseIcon} className="close-toggle hidden" alt="Close" />
            </button>
            <ul className="navbar hidden">
                <li className="dropdown">
                    <a className="dropdown-toggle features" >Features <img className="arrow" src={notActiveFeatures ? arrowUp : arrowDown} /></a>
                    <ul className="dropdown-menu features">
                        <li>
                            <img src={ListIcon} alt="List" /> Todo list
                        </li>
                        <li>
                            <img src={CalendarIcon} alt="Calendar" /> Calendar
                        </li>
                        <li>
                            <img src={BellIcon} alt="Bell" /> Reminders
                        </li>
                        <li>
                            <img src={TimerIcon} alt="Timer" /> Planning
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle company">Company <img className="arrow" src={notActiveCompany ? arrowUp : arrowDown} /></a>
                    <ul className="dropdown-menu company">
                        <li>
                            History
                        </li>
                        <li>
                            Our team
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">Carrers</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>

                <div className="login">
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="" className="register">Register</a>
                    </li>
                </div>
            </ul>
        </Nav >
    )
}