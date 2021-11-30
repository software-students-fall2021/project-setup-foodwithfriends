import "./TeamPage.css";
import React from "react";
import Button from "../components/Button";
import thomasImage from "../img/people/thomas.png";
import yoonImage from "../img/people/yoon.jpeg";
import sriImage from "../img/people/sri.png";
import priyaImage from "../img/people/priya.png";
import jenImage from "../img/people/jen.png";
import tanyaImage from "../img/people/tanya.jpeg";
import aboutBanner from "../img/about-banner.jpg";

function TeamPage() {
  return (
    <div className="TeamPage">
      <div className="banner">
        <img
          src={aboutBanner}
          alt="Get Started Today"
          className="about-banner"
        ></img>
      </div>
      <div className="max-text-container">
        <div id="introduction-title">Introduction</div>
        <div id="introduction-text">
          <p>
            Are you going out to eat with friends anytime soon? These friendly
            gatherings usually go one of two ways: a restaurant is agreed upon
            fairly quickly or you spend 30+ minutes choosing what to eat in the
            first place (not including the actual restaurant you are going to).
          </p>
          <p>
            Food with Friends is a web application that aims to make
            decision-making for where to eat easy. Users can invite their
            entourage to a &quot;room&quot; where they can choose a cuisine they prefer
            (e.g. Italian, Chinese, etc.), vote on it, and go on to choose a
            restaurant together.
          </p>
          <p>
            Instead of wasting time deciding on what and where to eat,
            foodwithfriends allows you and your friends to share a meal
            instantly.
          </p>
        </div>
        <div id="the-team-title">The Team</div>
        <div id="photo-container">
          <div className="flex-container">
            <a
              href="https://github.com/Jen-Lopez"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div id="photo-1">
                <img
                  src={jenImage}
                  className="photo-img"
                  alt="Github Profile Pic"
                ></img>
                <div id="photo-1-title">Jennifer Lopez</div>
              </div>
            </a>
            <a
              href="https://github.com/psc358"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div id="photo-2">
                <img
                  src={priyaImage}
                  className="photo-img"
                  alt="Github Profile Pic"
                ></img>
                <div id="photo-2-title">Priya Chaganti</div>
              </div>
            </a>
          </div>
          <div className="flex-container">
            <a
              href="https://github.com/Golemwardox"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div id="photo-3">
                <img
                  src={sriImage}
                  className="photo-img"
                  alt="Github Profile Pic"
                ></img>
                <div id="photo-3-title">Sri Kaushik</div>
              </div>
            </a>
            <a
              href="https://github.com/tanyasingh7"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div id="photo-4">
                <img
                  src={tanyaImage}
                  className="photo-img"
                  alt="Github Profile Pic"
                ></img>
                <div id="photo-4-title">Tanya Singh</div>
              </div>
            </a>
          </div>
          <div className="flex-container">
            <a
              href="https://github.com/thomastai1666"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div id="photo-5">
                <img
                  src={thomasImage}
                  className="photo-img"
                  alt="Github Profile Pic"
                ></img>
                <div id="photo-5-title">Thomas Tai</div>
              </div>
            </a>
            <div id="photo-6">
              <a
                href="https://github.com/yunko1803"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={yoonImage}
                  className="photo-img"
                  alt="Github Profile Pic"
                ></img>
                <div id="photo-6-title">Yoon Koh</div>
              </a>
            </div>
          </div>
        </div>
        <Button
          id="back-button"
          text="Go Back"
          width="250px"
          height="50px"
          bg="black"
          backEnabled={true}
        />
      </div>
    </div>
  );
}

export default TeamPage;
