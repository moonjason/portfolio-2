import React, { useState } from "react";

const Header = () => {
  const [currentLink, setCurrentLink] = useState("");

  return (
    <div class="wrapper">
      <div class="profile-card js-profile-card">
        <div id="img" class="profile-card__img">
          <img
            src="#"
            alt="profile card"
          />
        </div>

        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Jason Moon</div>
          <div class="profile-card__line"></div>
          <div class="profile-card__txt">Software Developer <span class="text-spacing"></span> Los Angeles</div>
          <div class="profile-card-loc">
            <span class="profile-card-loc__icon"></span>

            <span class="profile-card-loc__txt"></span>
          </div>
          {/* <div class="profile-card-inf">
            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">1598</div>
              <div class="profile-card-inf__txt">Followers</div>
            </div>

            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">65</div>
              <div class="profile-card-inf__txt">Following</div>
            </div>

            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">123</div>
              <div class="profile-card-inf__txt">Articles</div>
            </div>

            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">85</div>
              <div class="profile-card-inf__txt">Works</div>
            </div>
          </div> */}

          <div class="profile-card-social">
            <a href="https://www.github.com/moonjason" onMouseEnter={() => setCurrentLink("Github: moonjason")} onMouseLeave={() => setCurrentLink("")}><img class="icon" src="img/icons8-github-48.png" alt="github-link"/></a>
            <a href="https://www.linkedin.com/in/jasonmoon96" onMouseEnter={() => setCurrentLink("LinkedIn: /in/jasonmoon96")} onMouseLeave={() => setCurrentLink("")}><img class="icon" src="img/icons8-linkedin-48.png" alt="linkedin-link"/></a>
            <a href="mailto:jasonmoonjm@gmail.com" onMouseEnter={() => setCurrentLink("Email: jasonmoonjm@gmail.com")} onMouseLeave={() => setCurrentLink("")}><img class="icon" src="img/icons8-mailing-48.png" alt="email-link"/></a>
            <a href="https://docs.google.com/document/d/1JUKV8INNshnN7zcbX3-JNoPpL8UUpIV8OXVA-xIU29A/edit?usp=sharing" onMouseEnter={() => setCurrentLink("Resume")} onMouseLeave={() => setCurrentLink("")}><img class="icon" src="img/icons8-download-resume-48.png" alt="resume-link"/></a>
          </div>
        <p class="link-desc">{currentLink}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
