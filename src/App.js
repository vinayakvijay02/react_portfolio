import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./components/skills-bar/skillbar";
// import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
// import Fade from "react-reveal/Fade";
// import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
// import PhotoGallery from "./components/gallery/PhotoGallery";
// // import Particles from "react-particles-js";
// // import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";
import React, { Component } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage"
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />

            
                <MyCarousal 
                title="Home"
                // subtitle={dummyText}
                dark={true}
                id="section1"
               />
               
                <MyTitleMessage />
                     
       
         <About 
         title="ABOUT ME"
         // subtitle={dummyText}
         dark={false}
         id="section2"
        />
         <Skills 
            title="TECH SKILLS"
            // subtitle={dummyText}
            dark={false}
            id="section3"
         />
           <TimeLine
           title="PROJECTS"
           // subtitle={dummyText}
           dark={false}
           id="section4"
          
          />
         <Experience 
           title="SERVICES"
           // subtitle={dummyText}
           dark={false}
           id="section5"
         />
        
          <ContactForm
           title="CONTACT ME"
           // subtitle={dummyText}
           dark={false}
           id="section6"
          />
          <FooterPanel 
           title="Footer"
           // subtitle={dummyText}
           dark={false}
           id="section7"
          />
      </div>
    );
  }
}

export default App;

