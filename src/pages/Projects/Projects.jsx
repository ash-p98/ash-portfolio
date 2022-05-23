import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import github from '../../components/Images/github.svg';

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
          <h1>Javascript Calculator</h1>
          <p>
            This is a calculator made with html, css and javascript. One of the
            first projects done on the _nology course.
          </p>
          <button>github repo</button>
          <button>live demo</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideContent">
          <h1>PunkBeer API</h1>
          <p>
            In this project I used a punk beer api to create a website that
            rendered beers on the page and allows the user to view the different
            beers available.
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideContent">
          <h1>Wordle!</h1>
          <p>
            Using javascript, created a clone of wordle. However unlike wordle
            when the user refreshes the page a new word is generated.
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slideContent">
          <h1>Zero Million</h1>
          <p>
            This was a personal project. A simple game of tug of war. The game
            is a website and the score can be increased or decreased depending
            on which button is pressed. Linked webiste with a twitch channel and
            bot allowing views to effect the score in realtime.
          </p>
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
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Projects;
