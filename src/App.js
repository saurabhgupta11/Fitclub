import FitnessProgram from "./components/fitnessprograms.component";
import Footer from "./components/footer.component";
import Header from "./components/header.component";
import JoinUs from "./components/joinus.component";
import Navbar from "./components/navbar.component";
import Pricing from "./components/pricing.component";
import ProgramClass from "./components/programclass.component";
import Review from "./components/review.component";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FitnessProgram />
      <ProgramClass />
      <JoinUs />
      <Pricing />
      <Review />
      <Footer />
    </>
  );
}

export default App;
