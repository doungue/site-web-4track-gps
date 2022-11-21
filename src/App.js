import React from 'react';
import Header from './composant/header/Header'; 
import Nav from './composant/nav/Nav';
import About from './composant/about/About';
import Experience from './composant/experience/Experience';   
import Service from './composant/service/Service';
import Portfolio from './composant/portfolio/Portfolio';
import Testimorial from './composant/testimorial/Testimorial';
import Contact from './composant/contact/Contact';  
import Footer from './composant/footer/Footer';   

function App() {
  return (
    <div>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Service/>
     <Portfolio/>
     <Testimorial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
