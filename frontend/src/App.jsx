import { Navbar } from './components/landing_page/Navbar';
import { SaaSEcosystem } from './components/landing_page/platform/SaaSEcosystem';
import { Footer } from './components/landing_page/Footer';
import CommingSoon from './components/landing_page/commingSoon';
import HomePage from './components/landing_page/home/HomePage';
import Pharma4OPage from './components/landing_page/pharma4O/pharma4Opage';
import ServicePage from './components/landing_page/service/servicePage';
import AboutPage from './components/landing_page/about/aboutPage';
import ContactPage from './components/landing_page/contact/contactPage';
import HealthScore from './components/landing_page/HealthScore/HealthScore';
import ScrollToTop from './components/landing_page/ScrollToTop';
import Nutrition from './components/landing_page/NavPages/Nutrition';
import DiabetesCare from './components/landing_page/NavPages/DiabetesCare';
import WomenCare from './components/landing_page/NavPages/WomenCare';
import HeartCare from './components/landing_page/NavPages/HeartCare';
import DietPlan from './components/landing_page/NavPages/DietPlan';
import CareCoordinators from './components/landing_page/NavPages/CareCoordinators';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from "react";



export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/pharma40' element={<Pharma4OPage/>}/>
          <Route path='/platform' element={<SaaSEcosystem/>}/>
          <Route path='/service' element={<ServicePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/commingsoon' element={<CommingSoon/>}/>
          <Route path='/health-score' element={<HealthScore/>}/>

          <Route path='/nutirition' element={<Nutrition/>}/>
          <Route path='/diabetescare' element={<DiabetesCare/>}/>
          <Route path='/womencare' element={<WomenCare/>}/>
          <Route path='/heartcare' element={<HeartCare/>}/>
          <Route path='/dietplan' element={<DietPlan/>}/>
          <Route path='/carecoordinators' element={<CareCoordinators/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
