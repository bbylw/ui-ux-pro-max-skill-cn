// Tab switching for installation section
const installTabs = document.querySelectorAll<HTMLButtonElement>('.install-tab');
const installPanels = document.querySelectorAll<HTMLElement>('.install-content');

installTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const panelId = tab.dataset.tab;
        if (!panelId) return;

        const panel = document.getElementById(panelId);
        if (!panel) return;

        installTabs.forEach((item) => item.classList.remove('active'));
        installPanels.forEach((item) => item.classList.remove('active'));

        tab.classList.add('active');
        panel.classList.add('active');
    });
});

// Copy to clipboard with fallback for non-secure contexts
async function copyText(text: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        if (!document.execCommand('copy')) throw new Error('copy failed');
    } finally {
        textarea.remove();
    }
}

const copyButtons = document.querySelectorAll<HTMLButtonElement>('.copy-btn');

copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        const codeId = button.dataset.code;
        if (!codeId) return;

        const codeElement = document.getElementById(codeId);
        const icon = button.querySelector<HTMLElement>('i');
        const label = button.querySelector<HTMLSpanElement>('span');
        if (!codeElement || !icon || !label) return;

        try {
            await copyText(codeElement.innerText);
            icon.className = 'fas fa-check';
            label.textContent = '已复制！';
            button.style.color = '#10b981';
        } catch {
            icon.className = 'fas fa-triangle-exclamation';
            label.textContent = '复制失败';
            button.style.color = '#ef4444';
        }

        window.setTimeout(() => {
            icon.className = 'fas fa-copy';
            label.textContent = '复制';
            button.style.color = '';
        }, 2000);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        event.preventDefault();
        const target = document.querySelector<HTMLElement>(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    const navIcon = navToggle.querySelector<HTMLElement>('i');

    const closeMenu = (): void => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '打开导航菜单');
        if (navIcon) navIcon.className = 'fas fa-bars';
    };

    navToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
        if (navIcon) navIcon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
    });

    navMenu.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

// Scrollspy: highlight the nav link of the section in view
const spyLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]'));
const spyTargets = spyLinks
    .map((link) => link.getAttribute('href'))
    .filter((href): href is `#${string}` => href?.startsWith('#') === true)
    .map((href) => document.querySelector<HTMLElement>(href))
    .filter((target): target is HTMLElement => target !== null);

if ('IntersectionObserver' in window && spyTargets.length > 0) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                spyLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    spyTargets.forEach((target) => spy.observe(target));
}

// Back to top button
const backToTop = document.querySelector<HTMLButtonElement>('#back-to-top');

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

window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Intersection Observer for scroll animations
const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll<HTMLElement>('.feature-card, .ai-card, .workflow-step, .stack-item, .prompt-item').forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
});

// Add animation class styles
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animationStyle);

// Stagger animation delay for grid items
document.querySelectorAll<HTMLElement>('.features-grid .feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll<HTMLElement>('.ai-grid .ai-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll<HTMLElement>('.workflow-steps .workflow-step').forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll<HTMLElement>('.stack-grid .stack-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
});
