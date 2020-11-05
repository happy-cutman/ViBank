import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons';
import {animateScroll as scroll} from 'react-scroll'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarStyles';


const Navbar = ({toggleIsOpen}) => {

    const [scrollNav, setScrollNav] = useState(false);

    // меняет цвет нав при скролле
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    // метод из библиотеки react-scroll
    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>ViBank</NavLogo>
                    <MobileIcon onClick={toggleIsOpen}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            {/*класс active добавляется автоматически из бибилиотеки react-scroll*/}
                            <NavLinks to='about'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'  // offset -80 потому что navBar margin top -80
                                      offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-70}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact='true'
                                      offset={-70}>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;