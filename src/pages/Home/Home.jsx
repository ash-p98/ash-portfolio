import React from "react";
import "./Home.scss";
import me from "../../components/Images/me2.png";

const Home = () => {
  return (
    <div className="back">
      <div className="home">
        <img src={me} alt="me" />
        <div className="text">
          <h1 className="name">Ash Paul</h1>
          <h2 className="job">Fullstack Developer</h2>
          <div>
          <button className="hireMe">Hire Me.</button>
          </div>
        </div>
        <div className="text-holder">
          <h1> A bit about me!</h1>
          <p>
            Well rounded with a wide range of practical knowledge. Experience in
            creating original, professional websites/ UX designs for both
            assignments & clients. Driven. Passionate. Enjoy finding creative
            solutions to challenges and problems. Sense of pride &
            accomplishment when completing projects as part of a dedicated team
            using a range different skills & programs. Experience in different
            industries would allow me to adapt to your environment seamlessly,
            hopefully becoming a key member of your team.
          </p>
          <button>Still unsure? View my work.</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
