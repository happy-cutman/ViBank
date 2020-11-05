import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import InfoSection from '../components/InfoSection/InfoSection';
import {HomeObjOne, HomeObjThree, HomeObjTwo} from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <Sidebar toggleIsOpen={toggleIsOpen} isOpen={isOpen}/>
            <Navbar toggleIsOpen={toggleIsOpen}/>
            <Jumbotron/>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjTwo}/>
            <Services/>
            <InfoSection {...HomeObjThree}/>
            <Footer/>
        </div>
    );
};

export default Home;