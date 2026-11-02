// Tab switching for installation section
document.querySelectorAll('.install-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs
        document.querySelectorAll('.install-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.install-content').forEach(c => c.classList.remove('active'));

        // Add active to clicked tab
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Copy to clipboard with fallback for non-secure contexts
function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy') ? resolve() : reject(new Error('copy failed'));
        } catch (err) {
            reject(err);
        } finally {
            ta.remove();
        }
    });
}

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const codeId = button.dataset.code;
        const codeElement = document.getElementById(codeId);
        if (!codeElement) return;
        const icon = button.querySelector('i');
        const text = button.querySelector('span');

        copyText(codeElement.innerText).then(() => {
            icon.className = 'fas fa-check';
            text.textContent = '已复制！';
            button.style.color = '#10b981';
            setTimeout(() => {
                icon.className = 'fas fa-copy';
                text.textContent = '复制';
                button.style.color = '';
            }, 2000);
        }).catch(() => {
            icon.className = 'fas fa-triangle-exclamation';
            text.textContent = '复制失败';
            button.style.color = '#ef4444';
            setTimeout(() => {
                icon.className = 'fas fa-copy';
                text.textContent = '复制';
                button.style.color = '';
            }, 2000);
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // Do nothing for top links

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
    const closeMenu = () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '打开导航菜单');
        navToggle.querySelector('i').className = 'fas fa-bars';
    };
    navToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
        navToggle.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Scrollspy: highlight the nav link of the section in view
const spyLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const spyTargets = spyLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
if ('IntersectionObserver' in window && spyTargets.length) {
    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                spyLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    spyTargets.forEach(t => spy.observe(t));
}

// Back to top button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .ai-card, .workflow-step, .stack-item, .prompt-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Stagger animation delay for grid items
document.querySelectorAll('.features-grid .feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.ai-grid .ai-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.workflow-steps .workflow-step').forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.stack-grid .stack-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
});
