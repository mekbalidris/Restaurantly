import home_bg from '../assets/bg/home_bg.jpg';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative w-full h-screen flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${home_bg})` }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4" data-aos="fade-up">
          Welcome To <span className="text-yellow-500">Restaurantly</span>
        </h1>
        <h3 className="text-gray-300 text-lg sm:text-xl mb-6" data-aos="fade-up" data-aos-delay="200">
          Delivering great food for more than 18 years!
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
          <button className="buttons" onClick={() => scrollToSection("menu")}>OUR MENU</button>
          <button className="buttons" onClick={(e) => {navigate('/book-table')}}>BOOK A TABLE</button>
        </div>
      </div>
    </div>
  );
}