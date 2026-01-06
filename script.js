// Données dynamiques
const galleryData = [
    {
        id: 1,
        category: "portails",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Portail sur mesure",
        description: "Fer forgé avec motifs personnalisés"
    },
    {
        id: 2,
        category: "rampes",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Rampe d'escalier",
        description: "Design moderne en acier inoxydable"
    },
    {
        id: 3,
        category: "deco",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Sculpture métallique",
        description: "Pièce unique pour jardin"
    },
    {
        id: 4,
        category: "mobilier",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Table de jardin",
        description: "Structure en acier avec plateau en bois"
    },
    {
        id: 5,
        category: "portails",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Grille de protection",
        description: "Motifs traditionnels marocains"
    },
    {
        id: 6,
        category: "rampes",
        image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Garde-corps de balcon",
        description: "Design contemporain avec verre"
    }
];

const servicesData = [
    {
        icon: "fas fa-door-closed",
        title: "Portails & Portes",
        description: "Création et installation de portails, portes d'entrée et grilles de sécurité sur mesure, en fer forgé ou acier."
    },
    {
        icon: "fas fa-stairs",
        title: "Rampes & Garde-corps",
        description: "Rampes d'escalier, garde-corps de balcon et de terrasse, designs classiques ou contemporains."
    },
    {
        icon: "fas fa-couch",
        title: "Mobilier Métallique",
        description: "Tables, chaises, bancs et étagères en métal, pour intérieur et extérieur, sur mesure."
    },
    {
        icon: "fas fa-palette",
        title: "Décoration & Sculpture",
        description: "Créations artistiques en métal, sculptures, lampes, objets décoratifs uniques."
    },
    {
        icon: "fas fa-tools",
        title: "Réparation & Restauration",
        description: "Réparation d'ouvrages métalliques existants, restauration de pièces anciennes en fer forgé."
    },
    {
        icon: "fas fa-home",
        title: "Serrures & Quincaillerie",
        description: "Installation de serrures, poignées et éléments de quincaillerie sur mesure pour vos ouvrages métalliques."
    }
];

// Fonctions d'initialisation
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="gallery-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

function initServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Menu mobile
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Fermer le menu en cliquant sur un lien
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }
}

// Filtrage de la galerie
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length === 0 || galleryItems.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Soumission du formulaire
function initContactForm() {
    const form = document.getElementById('devisForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Récupérer l'email
        const email = 'Jamal.salhi.ae@gmail.com';
        const subject = `Demande de devis - ${service}`;
        const body = `Nom: ${name}%0ATéléphone: ${phone}%0AService: ${service}%0ADétails: ${message}`;
        
        // Ouvrir le client mail
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Réinitialisation du formulaire
        form.reset();
    });
}

// Animation pour les sections au défilement
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.service-card, .gallery-item, .about-text, .contact-form');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initServices();
    initMobileMenu();
    initGalleryFilter();
    initContactForm();
    initScrollAnimations();
});

// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
