// Función para alternar la visibilidad de las categorías de laboratorios
function toggleCategoria(id) {
    const categoria = document.getElementById(id);
    const todasCategorias = document.querySelectorAll('.contenido-categoria');
    
    // Cerrar todas las categorías excepto la que se hace clic
    todasCategorias.forEach(item => {
        if (item.id !== id && item.style.display === 'block') {
            item.style.display = 'none';
            item.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
            item.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
        }
    });
    
    // Alternar la categoría actual
    if (categoria.style.display === 'block') {
        categoria.style.display = 'none';
        categoria.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
        categoria.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
    } else {
        categoria.style.display = 'block';
        categoria.previousElementSibling.querySelector('i').classList.remove('fa-chevron-down');
        categoria.previousElementSibling.querySelector('i').classList.add('fa-chevron-up');
    }
}

// Función para abrir el modal con la imagen
function abrirModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img-modal');
    modal.style.display = 'block';
    modalImg.src = src;
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Menú responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
            }
        });
    });
    
    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Efecto de aparición suave al hacer scroll
function checkScroll() {
    const elements = document.querySelectorAll('.tarjeta-lab, .item-topologia, .categoria-habilidad');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar estilos para la animación de scroll
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.tarjeta-lab, .item-topologia, .categoria-habilidad');
    
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    // Verificar una vez al cargar la página
    checkScroll();
});