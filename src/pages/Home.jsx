import home_bg from '../assets/bg/home_bg.jpg';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,         // Default duration for animations (800ms)
      easing: 'ease-in-out', // Default easing function
      once: true,            // Whether animation runs only once (true) or on every scroll (false)
      //offset: 200,           // Default offset in pixels from the trigger point
      //delay: 100             // Default delay before animations start
  });
  }, []);

  return (
    <>
    <div id='home'>
      <div
        style={{
          backgroundImage: `url(${home_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          position: 'relative',
        }}
      >
        {/*overlay for the background*/}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
            zIndex: 1,
          }}
        />

        <div
          className="flex flex-col justify-center items-center text-center z-10 relative h-full" data-aos="fade-up"
        >
          <h1 className="text-white text-4xl font-bold mb-4">
            Welcome To{' '}
            <span className="text-yellow-500">
              Restaurantly
            </span>
          </h1>
          <h3 className="text-gray-300 text-lg mb-6">
            Delivering great food for more than 18 years!
          </h3>
          <div className="flex gap-4">
            <button className="buttons">
              OUR MENU
            </button>
            <button className="buttons">
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
