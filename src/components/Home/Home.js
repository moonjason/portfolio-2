import React from 'react';

const Home = () => {
    return (
        <div class="home">
            <div class="home__header">
                Welcome to my dev site!
            </div>
            <div class="home__intro">
                I'm a dev with a background in film and media studies. I started self-learning code in the summer of 2018 and decided to pursue it as a career by the end of 2019. 
            </div>
            <div class="home__skills">
                <div class="poweredby">powered by...</div>
                <div class="home__skills--images">
                    <img src="http://via.placeholder.com/75" alt="logo-place-holder"/>
                </div>
            </div>
        </div>
    )
}

export default Home;