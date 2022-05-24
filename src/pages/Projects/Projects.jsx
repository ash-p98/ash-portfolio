import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import github from "../../components/Images/github.svg";

import "swiper/css";
import "swiper/css/navigation";
import "./Projects.scss";

import { Navigation } from "swiper";

const Projects = () => {
  return (
    <>
      <h1 className="title">Projects</h1>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <div className="slideContent">
            <h1>Zero Million</h1>
            <p>
              This is personal project I made. A virtual game of tug of war.
              This web game has a score which can be increased or decreased
              depending on which button is pressed. I stream the game via a
              twitch channel and connect a bot to the channel allowing viewers
              to interact with the webpage using commands. This effects the
              score in realtime. View gameplay below:
            </p>
            <a className="link" href="https://www.twitch.tv/videos/1482200890">
              Twitch Demo
            </a>
            <a className="link" href="https://www.zeromillion.online/">
              Game Website
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <h1>Wordle!</h1>
            <p>
              Using javascript, I created a clone of wordle using HTML, CSS and
              javascript. The game generates a new word every time the web page
              is refreshed.
            </p>
            <a className="link" href="https://github.com/ash-p98/wordle">
              Github Repo
            </a>
            <a className="link" href="https://ash-p98.github.io/wordle/">
              Game Website
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <h1>Javascript Calculator</h1>
            <p>
              This is a calculator made with html, css and javascript. One of
              the first projects done on the _nology course.
            </p>
            <a className="link" href="https://github.com/ash-p98/calculator">
              Github Repo
            </a>
            <a className="link" href="https://ash-p98.github.io/calculator/">
              Calculator Website
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <h1>PunkBeer API</h1>
            <p>
              In this project I used a punk beer api to create a website that
              rendered beers on the page and allows the user to view the
              different beers available.
            </p>
            <a className="link" href="https://github.com/ash-p98/beer">
              Github Repo
            </a>
            <a className="link" href="https://ash-p98.github.io/beer/">
              Beer Website
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <h1>R v B</h1>
            <p>
              This was a personal project. A simple game of tug of war. The game
              is a website and the score can be increased or decreased depending
              on which button is pressed. This is a mobile application available
              on iOS and Andriod. Was built using Flutter. The realtime database
              used was firebase. It also runs google ads.
            </p>
            <a
              className="link"
              href="https://play.google.com/store/apps/details?id=co.ashpaul.red_blue&hl=en_GB&gl=US"
            >
              App Link (andriod & iOS available)
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Projects;
