// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Navigation active link
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Gallery Data - Utilisez vos propres images ici
const galleryItems = [
    { 
        img: 'Png-exemple1.jpg', 
        category: 'portails', 
        title: 'Portail en Fer Forgé', 
        desc: 'Portail sur mesure avec motifs traditionnels'
    },
    { 
        img: 'png-exemple2.jpg', 
        category: 'rampes', 
        title: 'Rampe d\'Escalier', 
        desc: 'Rampe en acier inoxydable pour intérieur'
    },
    { 
        img: 'png-exemple3.jpg', 
        category: 'deco', 
        title: 'Sculpture Métallique', 
        desc: 'Pièce artistique pour jardin'
    },
    { 
        img: 'png-exemple5.jpg', 
        category: 'mobilier', 
        title: 'Table en Métal', 
        desc: 'Table basique avec piètement métallique'
    },
    { 
        img: 'exemple6-png.jpg', 
        category: 'portails', 
        title: 'Porte d\'Entrée', 
        desc: 'Porte sécurisée avec décorations'
    },
    { 
        img: 'exemple7-png.jpg', 
        category: 'rampes', 
        title: 'Garde-corps Balcon', 
        desc: 'Protection avec design moderne'
    },
    { 
        img: 'example8-png.jpg', 
        category: 'deco', 
        title: 'Luminaire Métallique', 
        desc: 'Suspension artisanale'
    },
    { 
        img: 'example9-png.jpg', 
        category: 'mobilier', 
        title: 'Étagères Métalliques', 
        desc: 'Rangement industriel'
    }
];

// Services Data
const servicesData = [
    {
        icon: 'fas fa-door-closed',
        title: 'Portails & Portes',
        description: 'Portails battants, coulissants, portes d\'entrée sur mesure. Sécurité et esthétique combinées.'
    },
    {
        icon: 'fas fa-stairs',
        title: 'Rampes & Garde-corps',
        description: 'Rampes d\'escalier, garde-corps de balcon, main-courantes. Confort et sécurité.'
    },
    {
        icon: 'fas fa-chair',
        title: 'Mobilier Métallique',
        description: 'Tables, chaises, étagères, lits. Mobilier robuste et design.'
    },
    {
        icon: 'fas fa-palette',
        title: 'Décoration & Sculpture',
        description: 'Pièces artistiques, luminaires, décorations murales. Donnez vie à vos espaces.'
    },
    {
        icon: 'fas fa-tools',
        title: 'Réparation & Restauration',
        description: 'Réparation d\'ouvrages existants, restauration de pièces anciennes.'
    },
    {
        icon: 'fas fa-ruler-combined',
        title: 'Conception Sur Mesure',
        description: 'Étude et conception personnalisée selon vos besoins et votre espace.'
    }
];

// Initialize Gallery
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Load all gallery items
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item fade-in-up ${item.category}`;
        galleryItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="gallery-img" loading="lazy">
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            const items = galleryGrid.querySelectorAll('.gallery-item');
            
            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize Services
function initServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in-up';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Form Submission
const devisForm = document.getElementById('devisForm');

devisForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Create email body
    const subject = `Demande de devis - ${service}`;
    const body = `
Nom: ${name}
Téléphone: ${phone}
Service: ${service}

Message:
${message}

---
Ce message a été envoyé depuis le site web Jamal Salhi Ferronnerie.
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:Jamal.salhi.ae@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    devisForm.reset();
    
    // Show success message
    alert('Merci pour votre demande ! Un email va s\'ouvrir. Veuillez l\'envoyer pour finaliser votre demande de devis.');
});

// Smooth scrolling for anchor links
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
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// Lazy loading images
const images = document.querySelectorAll('img[loading="lazy"]');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 100px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initServices();
    
    // Add animation to elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all service cards and gallery items
    document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
        animateOnScroll.observe(el);
    });
    
    console.log('Site Jamal Salhi Ferronnerie chargé avec succès!');
});

// Back to top button (optional)
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #c9a347;
    color: #000;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.backgroundColor = '#d8b450';
    backToTopBtn.style.transform = 'translateY(-5px)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.backgroundColor = '#c9a347';
    backToTopBtn.style.transform = 'translateY(0)';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
