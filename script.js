
// Add animations and interactions
document.addEventListener('DOMContentLoaded', function () {
    // Hero text animation
    const heroText = document.querySelector('.hero-content');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    heroText.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 300);

    // Dashboard animation
    const dashboard = document.querySelector('.dashboard-mockup');
    dashboard.style.opacity = '0';
    dashboard.style.transform = 'perspective(1000px) rotateY(-20deg) translateY(40px)';
    dashboard.style.transition = 'opacity 1.2s ease, transform 1.2s ease';

    setTimeout(() => {
        dashboard.style.opacity = '1';
        dashboard.style.transform = 'perspective(1000px) rotateY(-10deg) translateY(0)';
    }, 500);

    // Hover effect for influencer cards
    const cards = document.querySelectorAll('.influencer-card, .stat-card, .step-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Button hover effect enhancement
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = btn.classList.contains('btn-primary') ?
                'translateY(-4px)' : 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // Input focus effect
    const searchInput = document.querySelector('.search-container input');
    searchInput.addEventListener('focus', () => {
        document.querySelector('.search-container').style.borderColor = 'var(--primary)';
        document.querySelector('.search-container').style.boxShadow = '0 0 0 2px rgba(64, 224, 208, 0.3)';
    });
    searchInput.addEventListener('blur', () => {
        document.querySelector('.search-container').style.borderColor = 'var(--light-gray)';
        document.querySelector('.search-container').style.boxShadow = 'none';
    });

    // Animate stats on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statCards = document.querySelectorAll('.stat-card');
                statCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    });

    observer.observe(document.querySelector('.stats-section'));
});
