import { useEffect, useState } from 'react';  

export default function Nav() {  
    const [isMobile, setIsMobile] = useState(false);  
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePage, setActivePage] = useState("home");  
    const [teleporting, setTeleporting] = useState(false);

    const handlePosition = (sectionId) => {  
        const section = document.getElementById(sectionId);  
        if (section) {  
            setTeleporting(true);
            section.scrollIntoView({ behavior: 'smooth' });
            setActivePage(sectionId);
        }
        setTeleporting(false);  
    };
    
    const handlePageScroll = () => {
        if(!teleporting){
            setTimeout(() => {
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
    }, 2000);
    };
    }
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
    },);  


    return (  
        <nav className={`transition duration-500 ${isScrolled ? 'bg-[#0C0B09] bg-opacity-100 border-b-2 border-[#d4a373]' : 'bg-[#0C0B09] bg-opacity-50'}`}>  
            <div className="title text-5">Restaurantly</div>  
            {isMobile ? (  
                <div>hamburger</div>  
            ) : (  
                <>  
                    <ul className="flex gap-5">  
                        <li onClick={() => handlePosition('home')} style={{color:  activePage === "home" ? '#d4a373' : 'white' }}>Home</li>  
                        <li onClick={() => handlePosition('about')} style={{color:  activePage === "about" ? '#d4a373' : 'white' }}>About</li>  
                        <li onClick={() => handlePosition('menu')} style={{color:  activePage === "menu" ? '#d4a373' : 'white' }}>Menu</li>  
                        <li onClick={() => handlePosition('specials')} style={{color:  activePage === "specials" ? '#d4a373' : 'white' }}>Specials</li>  
                        <li onClick={() => handlePosition('events')} style={{color:  activePage === "events" ? '#d4a373' : 'white' }}>Events</li>  
                        <li onClick={() => handlePosition('chefs')} style={{color:  activePage === "chefs" ? '#d4a373' : 'white' }}>Chefs</li>  
                        <li onClick={() => handlePosition('gallery')} style={{color:  activePage === "gallery" ? '#d4a373' : 'white' }}>Gallery</li>  
                        <li onClick={() => handlePosition('contact')} style={{color:  activePage === "contact" ? '#d4a373' : 'white' }}>Contact</li>  
                        <li onClick={() => handlePosition('dropdown')} style={{color:  activePage === "dropdown" ? '#d4a373' : 'white' }}>Dropdown</li>
                    </ul>  
                    <div className="buttons hover:bg-opacity-100 hover:text-black">BOOK A TABLE</div>  
                </>  
            )}  
        </nav>  
    );  
}
