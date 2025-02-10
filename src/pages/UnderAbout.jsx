import fire from "../assets/videos/fire.mp4";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function UnderAbout() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-mainbg py-16 px-4 sm:px-6">
      <div className="text-center mb-10">
        <div className="relative flex justify-center items-center">
          <div className="w-16 h-[2px] bg-white"></div>
          <h3 className="text-3xl font-bold mx-3 title">Why Choose Our Restaurant</h3>
          <div className="w-16 h-[2px] bg-white"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="cardabout group"
            data-aos="fade-up"
            data-aos-delay={index * 300}
          >
            <video className="firevideo group" autoPlay muted loop>
              <source src={fire} type="video/mp4" />
            </video>
            <div className="relative z-10 subtitle text-golden font-poppins">0{item}</div>
            <div className="relative z-10 subtitle text-white">This is a subtitle</div>
            <div className="relative z-10">
              <p className="duration-500 group-hover:text-white">
                Ea nostrud cillum fugiat cillum amet esse eu. Eu aute dolor duis dolore exercitation irure dolore aliquip.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}