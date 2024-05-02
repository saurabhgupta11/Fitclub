import React, { useEffect, useRef } from 'react';
import FitnessProgram from "./components/fitnessprograms.component";
import Footer from "./components/footer.component";
import Header from "./components/header.component";
import JoinUs from "./components/joinus.component";
import Navbar from "./components/navbar.component";
import Newsletter from "./components/newsletter.component";
import Pricing from "./components/pricing.component";
import ProgramClass from "./components/programclass.component";
import Review from "./components/review.component";
import BMI from './components/bmicalculator.component';

function App() {
  const programRef = useRef();
  const serviceRef = useRef();
  const pricingRef = useRef();
  return (
    <>
      <Navbar extraProps={{ programRef, serviceRef, pricingRef }} />
      <Header />
      <FitnessProgram extraProps={{ programRef, serviceRef, pricingRef }} />
      <ProgramClass />
      <JoinUs extraProps={{ serviceRef }} />
      <Pricing extraProps={{ pricingRef }} />
      <Review />
      <Newsletter />
      <BMI />
      <Footer />
    </>
  );
}

export default App;
