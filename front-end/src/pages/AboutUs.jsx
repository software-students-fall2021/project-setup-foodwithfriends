import './AboutUs.css';
import Header from '../components/Header.jsx'; 
import Footer from '../components/Footer.jsx'; 
import Logo from '../components/Logo.jsx'; 
import React from 'react';

function AboutUs(props) {
  return (
    <div className="AboutUs">
        <div id="full-page">
            <Header/>
            {/* need to add back button component  */}
            <Logo/>
            <div id="introduction-title">
                Introduction
            </div>
            <div id="introduction-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div id="the-team-title">
                The Team 
            </div>
            <div id = "photo-container">
                <div id="flex-container">
                    <div id = "photo-1"> </div>
                    <div id = "photo-2"> </div>
                </div>
                <div id="flex-container">
                    <div id = "photo-3"> </div>
                    <div id = "photo-4"> </div>
                </div>
                <div id="flex-container">
                    <div id = "photo-5"> </div>
                    <div id = "photo-6"> </div>
                </div>
            </div>
            <div id="try-now-button"></div>
            <Footer/>
        </div>
    </div>
  );
};

export default AboutUs;