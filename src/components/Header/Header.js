import React from "react";

const Header = () => {
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
          <div class="profile-card__txt">
            Software Developer
          </div>
          <div class="profile-card-loc">
            <span class="profile-card-loc__icon"></span>

            <span class="profile-card-loc__txt">Los Angeles, California</span>
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
            <img class="icon" src="img/icons8-github-48.png"/>
            <img class="icon" src="img/icons8-linkedin-48.png"/>
            <img class="icon" src="img/icons8-mailing-48.png"/>
            <img class="icon" src="img/icons8-download-resume-48.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
