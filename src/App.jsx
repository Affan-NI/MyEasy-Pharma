import { Navbar } from './components/landing_page/Navbar';
import { Pharma40 } from './components/landing_page/pharma4O/Pharma40';
import { IndiasMoment } from './components/landing_page/pharma4O/IndiasMoment';
import { SaaSEcosystem } from './components/landing_page/platform/SaaSEcosystem';
import { AboutUs } from './components/landing_page/about/AboutUs';
import { Founders } from './components/landing_page/about/Founders';
import { PharmacyServices } from './components/landing_page/service/PharmacyServices';
import { CallToAction } from './components/landing_page/contact/CallToAction';
import { Footer } from './components/landing_page/Footer';

import { WhyChooseUs } from './components/landing_page/service/WhyChooseUs';

import HomePage from './components/landing_page/home/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from "react";
import { ContactModal } from "./components/landing_page/contact/contactLogic/ContactModal";
// import { useScheduleDemo } from "./components/landing_page/contact/contactLogic/useScheduleDemo";

import { DemoModal } from "./components/landing_page/contact/contactLogic/DemoModal";

import QuickContactCTA from "./components/landing_page/contact/QuickContactCTA";


export default function App() {

  const [contactOpen, setContactOpen] = useState(false);
  // const { scheduleDemo } = useScheduleDemo();

  const [demoOpen, setDemoOpen] = useState(false);

  // const [role, setRole] = useState(null);
  // const [interest, setInterest] = useState(null);



  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          {/* <Hero ....../> */}
          <Route path='/pharma40' element={
            <>
              <Pharma40/>
              <IndiasMoment />
            </>
          }/>
          {/* <Pharma40 ......./> */}
          {/* <IndiasMoment ...../> */}
          {/* <AINative ........./> */}
          {/* <Simplification ....../> */}
          {/* <NextGen ...../> */}
          {/* <UseCases ......./> */}
          <Route path='/platform' element={<SaaSEcosystem/>}/>
          {/* <SaaSEcosystem   ......../> */}
          <Route path='/service' element={
            <>
              <PharmacyServices/>
              <WhyChooseUs/>
            </>
          }/>
          {/* <PharmacyServices .........../> */}
          <Route path='/about' element={
          <>
            <AboutUs/>
            <Founders />
          </>
          }/>
          {/* <AboutUs /> ..............*/}
          {/* <Founders /> .....*/}
          {/* <Route path='/contact' element={<CallToAction/>}/> */}
          <Route
            path="/contact"
            element={
              <>
                <CallToAction
                  onContactClick={() => setContactOpen(true)}
                  onDemoClick={() => setDemoOpen(true)}
                />
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pb-10 flex justify-center">
                  <QuickContactCTA />
                </div>

                <DemoModal
                  open={demoOpen}
                  onClose={() => setDemoOpen(false)}
                />

                <ContactModal
                  open={contactOpen}
                  onClose={() => setContactOpen(false)}
                />
              </>
            }
          />

          {/* <CallToAction .............../> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
