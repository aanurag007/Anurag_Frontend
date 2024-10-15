import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import Footer from "./Footer";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import SeventhSection from "./SeventhSection";
import SixthSection from "./SixthSection";
import ThirdSection from "./ThirdSection";

const HomePage = () => {
    return (
        <div className="bg-black">
          <FirstSection/>
           <SecondSection/>
           <ThirdSection/>
           <FourthSection/>
           <FifthSection/>
           <SixthSection/>
           <SeventhSection/>
           <Footer/>
        </div>
    );
};

export default HomePage;