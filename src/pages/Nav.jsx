import { useEffect, useState } from 'react';  

export default function Nav() {  
    const [isMobile, setIsMobile] = useState(false);  
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePage, setActivePage] = useState("home");  

    const handlePosition = (sectionId) => {  
        const section = document.getElementById(sectionId);  
        if (section) {  
            section.scrollIntoView({ behavior: 'smooth' });
            setActivePage(sectionId);
        }  
    };
    
    const handlePageScroll = () => {
        if(window.scrollY < window.innerHeight * 0.5){
            setActivePage("home");
        }else if(window.scrollY < window.innerHeight * 1.5){
            setActivePage("about");
        }else if(window.scrollY < window.innerHeight * 2.5){
            setActivePage("menu");
        }else if(window.scrollY < window.innerHeight * 3.5){
            setActivePage("specials");
        }else if(window.scrollY < window.innerHeight * 4.5){
            setActivePage("events");
        }else if(window.scrollY < window.innerHeight * 5.5){
            setActivePage("chefs");
        }else if(window.scrollY < window.innerHeight * 6.5){
            setActivePage("gallery");
        }
    };

    const handleNavScroll = () => {  
        setIsScrolled(window.scrollY > window.innerHeight * 0.3);
    };  

    const handleResize = () => {  
        setIsMobile(window.innerWidth < 1100);  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleNavScroll);
        window.addEventListener('scroll', handlePageScroll);  
        window.addEventListener('resize', handleResize);  
        handleResize(); // Check initial size on mount  

        return () => {  
            window.removeEventListener('scroll', handleNavScroll);
            window.removeEventListener('scroll', handlePageScroll);  
            window.removeEventListener('resize', handleResize);  
        };  
    }, []);  

    return (  
        <nav className={`transition duration-500 ${isScrolled ? 'bg-black bg-opacity-100' : 'bg-black bg-opacity-50'}`}>  
            <div className="title">Restaurantly</div>  
            {isMobile ? (  
                <div>hamburger</div>  
            ) : (  
                <>  
                    <ul className="flex gap-5">  
                        <li onClick={() => handlePosition('home')} style={{color:  activePage === "home" ? '#FBBF24' : 'white' }}>Home</li>  
                        <li onClick={() => handlePosition('about')} style={{color:  activePage === "about" ? '#FBBF24' : 'white' }}>About</li>  
                        <li onClick={() => handlePosition('menu')} style={{color:  activePage === "menu" ? '#FBBF24' : 'white' }}>Menu</li>  
                        <li onClick={() => handlePosition('specials')} style={{color:  activePage === "specials" ? '#FBBF24' : 'white' }}>Specials</li>  
                        <li onClick={() => handlePosition('events')} style={{color:  activePage === "events" ? '#FBBF24' : 'white' }}>Events</li>  
                        <li onClick={() => handlePosition('chefs')} style={{color:  activePage === "chefs" ? '#FBBF24' : 'white' }}>Chefs</li>  
                        <li onClick={() => handlePosition('gallery')} style={{color:  activePage === "gallery" ? '#FBBF24' : 'white' }}>Gallery</li>  
                        <li onClick={() => handlePosition('contact')} style={{color:  activePage === "contact" ? '#FBBF24' : 'white' }}>Contact</li>  
                        <li onClick={() => handlePosition('dropdown')} style={{color:  activePage === "dropdown" ? '#FBBF24' : 'white' }}>Dropdown</li>
                    </ul>  
                    <div className="buttons hover:bg-opacity-100 hover:text-black">BOOK A TABLE</div>  
                </>  
            )}  
        </nav>  
    );  
}
