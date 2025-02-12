import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import about_bg from "../assets/bg/about_bg.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about">
      <div
        style={{
          backgroundImage: `url(${about_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative w-full min-h-screen lg:min-h-[100vh] md:min-h-[120vh] sm:min-h-[140vh] flex items-center"
      >
        {/* Overlay for the background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-85 z-1"></div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto px-6" data-aos="fade-up">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mt-10 lg:mt-0">
              Culpa cupidatat occaecat
            </h2>
            <p className="mt-4 text-gray-300">
              Sint minim anim eu voluptate in ut id tempor est aute in do quis
              minim. Ad velit aliqua occaecat commodo est commodo eiusmod sunt.
            </p>
            <div className="mt-6 space-y-2 text-gray-300">
              <p>✔️ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>✔️ Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>
                ✔️ Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta storacalaperda
                mastiro dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <p className="mt-6 text-gray-300">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </div>

          {/* Right Side - Image */}
          <div
            className="w-full lg:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url(${about_bg})`,
              border: "1px solid white"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
