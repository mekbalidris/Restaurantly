import { useEffect, useState } from 'react';  

export default function Nav() {  
    const [isMobile, setIsMobile] = useState(false);  
    const [isScrolled, setIsScrolled] = useState(false);  

    const handlePosition = (sectionId) => {  
        const section = document.getElementById(sectionId);  
        if (section) {  
            section.scrollIntoView({ behavior: 'smooth' });  
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
        window.addEventListener('resize', handleResize);  
        handleResize(); // Check initial size on mount  

        return () => {  
            window.removeEventListener('scroll', handleNavScroll);  
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
                    <li onClick={() => handlePosition('home')}>Home</li>  
                    <li onClick={() => handlePosition('about')}>About</li>  
                    <li onClick={() => handlePosition('menu')}>Menu</li>  
                    <li onClick={() => handlePosition('specials')}>Specials</li>  
                    <li onClick={() => handlePosition('events')}>Events</li>  
                    <li onClick={() => handlePosition('chefs')}>Chefs</li>  
                    <li onClick={() => handlePosition('gallery')}>Gallery</li>  
                    <li onClick={() => handlePosition('contact')}>Contact</li>  
                    <li onClick={() => handlePosition('dropdown')}>Dropdown</li>
                    </ul>  
                    <div className="buttons hover:bg-opacity-100 hover:text-black">BOOK A TABLE</div>  
                </>  
            )}  
        </nav>  
    );  
}