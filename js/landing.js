//Variables
export const landing = document.getElementById("landing")
//Funciones

// Función para manejar el menú móvil
export const setupMobileMenu =()=> {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    
    if (menuToggle && menu) {
        const toggleMenu=()=> {
            menu.classList.toggle('hidden');
            menu.classList.toggle('md:flex');
        }
        
        menuToggle.addEventListener('click', toggleMenu);
    }
}

// Función para configurar smooth scrolling
export const setupSmoothScrolling =()=> {
    const handleSmoothScroll=(e)=> {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// Función para configurar animaciones al hacer scroll
export const setupScrollAnimations=()=> {
    const observerOptions = {
        threshold: 0.1
    };
    const handleIntersection=(entries)=> {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observar elementos con clase "animate-on-scroll"
    document.querySelectorAll('.benefit-item, .service-card, .animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}