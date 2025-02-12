import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Nav({ setIsAuthenticated, isAuthenticated }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [teleporting, setTeleporting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility

  const navigate = useNavigate()
  const location = useLocation()

  const handlePosition = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home page
      navigate('/');
  
      // Use setTimeout to delay the scroll logic until after navigation
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          setTeleporting(true);
          setActivePage(sectionId);
          section.scrollIntoView({ behavior: "smooth" });
  
          setTimeout(() => {
            setTeleporting(false);
          }, 1000); // Reset teleporting state after 1 second
        }
      }, 100); // Small delay to allow DOM to update after navigation
    } else {
      // If already on home page, call handlePosition directly
      const section = document.getElementById(sectionId);
      if (section) {
        setTeleporting(true);
        setActivePage(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
  
        setTimeout(() => {
          setTeleporting(false);
        }, 1000); // Reset teleporting state after 1 second
      }
    }
    setIsMenuOpen(false); // Close the mobile menu
  };

  const handlePageScroll = () => {
    if (teleporting) return;

    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition < viewportHeight * 0.5) {
      setActivePage("home");
    } else if (scrollPosition < viewportHeight * 2.5) {
      setActivePage("about");
    } else if (scrollPosition < viewportHeight * 3.5) {
      setActivePage("menu");
    } else if (scrollPosition < viewportHeight * 4.5) {
      setActivePage("testimonials");
    } else if (scrollPosition < viewportHeight * 5.5) {
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
    handleResize();

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
      className={`fixed w-full z-50 transition duration-500 ${
        isScrolled
          ? "bg-[#0C0B09] bg-opacity-100 border-b-2 border-[#d4a373]"
          : "bg-[#0C0B09] bg-opacity-50"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="title text-5 ml-10">Restaurantly</div>

        {/* Hamburger Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <ul className="flex gap-5 ml-10">
              {["home", "about", "menu", "testimonials", "contact"].map((page) => (
                <li
                  key={page}
                  onClick={() => handlePosition(page)}
                  className={`cursor-pointer ${
                    activePage === page ? "text-[#d4a373]" : "text-white"
                  }`}
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
              <div className="flex flex-row gap-1 mr-10">
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

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-[#0C0B09] bg-opacity-95 z-50 flex flex-col items-center justify-center">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <ul className="flex flex-col gap-6 text-center">
              {["home", "about", "menu", "testimonials", "contact"].map((page) => (
                <li
                  key={page}
                  onClick={() => handlePosition(page)}
                  className={`cursor-pointer text-2xl ${
                    activePage === page ? "text-[#d4a373]" : "text-white"
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              {isAuthenticated ? (
                <>
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
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}