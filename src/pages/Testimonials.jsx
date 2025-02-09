import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam.",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat.",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor.",
  },
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam.",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat.",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor.",
  },
];

export default function Testimonials() {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 1023);
  const [marginTop, setMarginTop] = useState("mt-[15rem]");

  const handleResize = () => {
    setIsPhone(window.innerWidth <= 1023);
  };
  const handleMargin = () =>{
    setMarginTop(window.innerWidth >= 380 ? "mt-[13rem]" : "mt-[15rem]");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleMargin);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleMargin);
    };
  }, []);

  return (
    <div id="testimonials">
    <div className={`flex items-center justify-center bg-mainbg h-screen w-full px-6 ${marginTop} lg:mt-0`}>
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-gray-500 text-sm uppercase tracking-wide">Testimonials</h2>
          <div className="relative flex justify-center items-center mt-2">
            <div className="w-16 h-[2px] bg-white"></div>
            <h3 className="text-3xl font-bold mx-3 title">Customer Reviews</h3>
            <div className="w-16 h-[2px] bg-white"></div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          slidesPerView={isPhone ? 1 : 3}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          className="rounded-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#151412] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center text-center sm:text-left sm:items-start gap-4 w-[90%] mx-auto"
                onMouseEnter={(e) => e.target.closest(".swiper")?.swiper.autoplay.stop()}
                onMouseLeave={(e) => e.target.closest(".swiper")?.swiper.autoplay.start()}
              >
                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 sm:w-20 sm:h-20 rounded-full border-2 border-[#d4a373]"
                />

                {/* Text Content */}
                <div>
                  <p className="italic text-lg text-white leading-relaxed">
                    <span className="text-gray-500 text-2xl">“</span> {testimonial.text}{" "}
                    <span className="text-gray-500 text-2xl">”</span>
                  </p>
                  <h3 className="text-xl font-bold mt-3 text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
  );
}
