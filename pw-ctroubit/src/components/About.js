import React from "react";
import "./About.css";
import img1 from "../images/img1.jpg";
import img8 from "../images/img8.jpg";

const About = ({ theme }) => {
    return (
        <div className={`about-main ${theme}-theme`}>
            <div className="part1-container">
                <div className="image-about">
                    <img
                        src={img1}
                        className={`image-about ${theme}-theme`}
                        alt="Description"
                    />
                </div>
                <div className={`text ${theme}-theme`}>
                    <p>
                        Hi there! My name is Cristian Troubitsin, and I'm a 4th year
                        software engineering student at Western University. I chose to go into
                        software after my second year because I found programming to be very fun
                        and rewarding. It wasn't my initial plan, but I'm glad I did because the possibilities
                        of what you can create are endless. I'm always thinking of how we can take software to the 
                        next level.
                    </p>

                    <p>
                        Some of my hobbies are music, playing guitar, and going to the gym. Music in
                        particular is one of my favourite passions, hence why I designed this website to mimic Spotify (My dream company)
                        and Apple Music's design palettes. You can choose which theme you like best (although Spotify
                        is the better streaming service).
                    </p>
                </div>
            </div>
            <div className={`part2 ${theme}-theme`}>
            <div className="image-bottom-right">
                <img
                    src={img8}
                    className={`image8 ${theme}-theme`}
                    alt="Description"
                />
                <div className='text2'>
                    <p>
                        I've worked a couple jobs over the last couple years, but a majority of my 
                        time has been spent at Canada's Wonderland. I first started as a Team Lead 
                        in Aquatics. After my first season, I got promoted to Trainer and I've been
                         in this position for the last 3 seasons. 
                    </p>
                    <p>
                    This job has been one of the biggest impacts on my self-development. I 
                    learned how to lead, communicate effectively, and deal with stress in a fast 
                    paced environment. Many of the skills I've learned throughout my time have 
                    contributed immensley to my work ethic, and make me the person who I am 
                    today. I've also met a lot of amazing people along the way, and I would not 
                    be where I am now without them.                 
                    </p>

                </div>
            </div>
            </div>
           <div className="text3">
                <p>
                    I'll be adding more to this, but I hope this is a good enough picture into my life, passions, and work experience.

                    
                </p>
                <p> Thanks for taking the time to read about me!</p>
                <p>
                If you'd like to check out my resume, click this link <a href="https://drive.google.com/file/d/1C9uyRfoPoKAS3WLauZ5JfdnYgMMVgqOO/view?usp=sharing"
                target="_blank"
                rel="noreferrer" className={`resume-link${theme}-theme` }>here</a> :)
                </p>
           </div>
        </div>
    );
};

export default About;
