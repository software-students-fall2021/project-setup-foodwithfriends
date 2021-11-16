import './TeamPage.css';
import React from 'react';
import Button from '../components/Button';

function TeamPage() {
  return (
    <div className="TeamPage">
        <div id="full-page">
            <div>
              <Button id="back-button" text="back" width="65px" height="30px" bg="#9d9287" backEnabled={true}/>
            </div>
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
                <div className="flex-container">
                    <div id = "photo-1"> 
                      <div id = "photo-1-title"> Person 1 </div>
                    </div>
                    <div id = "photo-2"> 
                      <div id="photo-2-title"> Person 2 </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div id = "photo-3"> 
                      <div id="photo-3-title"> Person 3 </div>
                    </div> 
                    <div id = "photo-4"> 
                      <div id="photo-4-title"> Person 4 </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div id = "photo-5"> 
                      <div id="photo-5-title"> Person 5 </div>
                    </div>
                    <div id = "photo-6"> 
                      <div id="photo-6-title"> Person 6 </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TeamPage;
