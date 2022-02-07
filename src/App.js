import "./App.css";
import BoxSlider from "./components/BoxSlider";
import CareersSection from "./components/CareersSection";
import Carousal from "./components/Carousal";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import ImageBoxSlider from "./components/ImageBoxSlider";
import ImageTitleBox from "./components/ImageTitleBox";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <BoxSlider />
      <ImageBoxSlider />
      <Carousal title='Best employment opportunities' buttonTitle='HIRE NOW' />
      <ImageTitleBox title='Most Popular Courses' />
      <CareersSection />
      <Carousal
        title='Help you identify relevance skill gaps in workforce'
        buttonTitle='FIND YOUR CAREER'
        carousal={2}
      />
      <ImageTitleBox title={"Blogs"} />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
