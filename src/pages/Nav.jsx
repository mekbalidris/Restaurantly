import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav({ setIsAuthenticated, isAuthenticated }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [teleporting, setTeleporting] = useState(false);

  const handlePosition = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setTeleporting(true); // Disable scroll-based detection temporarily
      setActivePage(sectionId);
      section.scrollIntoView({ behavior: "smooth" });

      // Reactivate scroll detection after some time
      setTimeout(() => {
        setTeleporting(false);
      }, 1000);
    }
  };

  const handlePageScroll = () => {
    if (teleporting) return; // Prevent scroll-based changes while teleporting

    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition < viewportHeight * 0.5) {
      setActivePage("home");
    } else if (scrollPosition < viewportHeight * 2.5) {
      setActivePage("about");
    } else if (scrollPosition < viewportHeight * 3.5) {
      setActivePage("menu");
    } else if (scrollPosition < viewportHeight * 4.5) {
      setActivePage("testemonials");
    } else if (scrollPosition < viewportHeight * 5.5) {
      setActivePage("map");
    } else if (scrollPosition < viewportHeight * 6.5) {
      setActivePage("contact");
    }
  };

  const handleNavScroll = () => {
    setIsScrolled(window.scrollY > window.innerHeight * 0.3);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1170);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    window.addEventListener("scroll", handlePageScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size on mount

    return () => {
      window.removeEventListener("scroll", handleNavScroll);
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <nav
      className={`transition duration-500 ${
        isScrolled
          ? "bg-[#0C0B09] bg-opacity-100 border-b-2 border-[#d4a373]"
          : "bg-[#0C0B09] bg-opacity-50"
      }`}
    >
      <div className="title text-5">Restaurantly</div>
      {isMobile ? (
        <div>hamburger</div>
      ) : (
        <>
          <ul className="flex gap-5">
            {[
              "home",
              "about",
              "menu",
              "testimonials",
              "contact",
            ].map((page) => (
              <li
                key={page}
                onClick={() => handlePosition(page)}
                style={{ color: activePage === page ? "#d4a373" : "white" }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </li>
            ))}
          </ul>

          {isAuthenticated ? (
            <div className="flex flex-row gap-1">
              <Link to="/book-table">
                <div className="buttons hover:bg-opacity-100 hover:text-black">
                  BOOK A TABLE
                </div>
              </Link>
              <div
                className="buttons hover:bg-opacity-100 hover:text-black"
                onClick={handleLogout}
              >
                LOG OUT
              </div>
            </div>
          ) : (
            <div className="flex flex-row gap-1">
              <Link to="/signup">
                <div className="buttons hover:bg-opacity-100 hover:text-black">
                  SIGN UP
                </div>
              </Link>
              <Link to="/login">
                <div className="buttons hover:bg-opacity-100 hover:text-black">
                  LOGIN
                </div>
              </Link>
            </div>
          )}
        </>
      )}
    </nav>
  );
}
