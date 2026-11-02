const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion.matches ? 'auto' : 'smooth');

// Accessible installation tabs with roving focus and automatic activation.
const installTabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.install-tab'));

function activateTab(tab: HTMLButtonElement, moveFocus = false): void {
    const panelId = tab.dataset.tab;
    if (!panelId) return;

    installTabs.forEach((item) => {
        const selected = item === tab;
        const itemPanelId = item.dataset.tab;
        const panel = itemPanelId ? document.getElementById(itemPanelId) : null;

        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;

        if (panel) {
            panel.hidden = !selected;
            panel.classList.toggle('active', selected);
        }
    });

    if (moveFocus) tab.focus();
}

installTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));

    tab.addEventListener('keydown', (event) => {
        let nextIndex: number | null = null;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            nextIndex = (index + 1) % installTabs.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            nextIndex = (index - 1 + installTabs.length) % installTabs.length;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = installTabs.length - 1;
        }

        if (nextIndex === null) return;
        event.preventDefault();
        activateTab(installTabs[nextIndex], true);
    });
});

// Copy to clipboard with fallback for non-secure contexts.
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

const copyResetTimers = new WeakMap<HTMLButtonElement, number>();
const copyButtons = document.querySelectorAll<HTMLButtonElement>('.copy-btn');

copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        const codeId = button.dataset.code;
        if (!codeId) return;

        const codeElement = document.getElementById(codeId);
        const icon = button.querySelector<HTMLElement>('i');
        const label = button.querySelector<HTMLSpanElement>('span');
        if (!codeElement || !icon || !label) return;

        const previousTimer = copyResetTimers.get(button);
        if (previousTimer) window.clearTimeout(previousTimer);

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

        copyResetTimers.set(button, window.setTimeout(() => {
            icon.className = 'fas fa-copy';
            label.textContent = '复制';
            button.style.color = '';
            copyResetTimers.delete(button);
        }, 2000));
    });
});

// Smooth scroll for in-page navigation.
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.getElementById(decodeURIComponent(href.slice(1)));
        if (!target) return;

        event.preventDefault();
        if (anchor.classList.contains('skip-link')) {
            target.focus({ preventScroll: true });
        } else if (anchor.closest('.nav-links')) {
            const heading = target.querySelector<HTMLElement>('h1, h2');
            if (heading) {
                heading.tabIndex = -1;
                heading.focus({ preventScroll: true });
            }
        }
        target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    });
});

// Mobile navigation with scroll lock, Escape, outside click and resize cleanup.
const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const mobileNavQuery = window.matchMedia('(max-width: 960px)');

if (navToggle && navMenu) {
    const navIcon = navToggle.querySelector<HTMLElement>('i');

    const setMenu = (open: boolean, returnFocus = false): void => {
        navMenu.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
        document.body.classList.toggle('menu-open', open && mobileNavQuery.matches);
        if (navIcon) navIcon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
        if (returnFocus) navToggle.focus();
    };

    navToggle.addEventListener('click', () => {
        const opening = !navMenu.classList.contains('open');
        setMenu(opening);

        if (opening) {
            window.requestAnimationFrame(() => {
                if (!navMenu.classList.contains('open')) return;
                navMenu.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
            });
        }
    });

    navMenu.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('open')) {
            setMenu(false, true);
        }
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.classList.contains('open')) return;
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (!navMenu.contains(target) && !navToggle.contains(target)) {
            setMenu(false);
        }
    });

    mobileNavQuery.addEventListener('change', (event) => {
        if (!event.matches) setMenu(false);
    });
}

// Scrollspy: highlight the navigation link for the section in view.
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
                    const active = link.getAttribute('href') === `#${entry.target.id}`;
                    link.classList.toggle('active', active);
                    if (active) link.setAttribute('aria-current', 'location');
                    else link.removeAttribute('aria-current');
                });
                return;
            }

            const link = spyLinks.find((item) => item.getAttribute('href') === `#${entry.target.id}`);
            if (link?.classList.contains('active')) {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    spyTargets.forEach((target) => spy.observe(target));
}

// Back to top button.
const backToTop = document.querySelector<HTMLButtonElement>('#back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: scrollBehavior() });
    });
}

// Navbar scroll effect.
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
}, { passive: true });

// Reveal content only after the animation setup succeeds.
const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(
    '.feature-card, .ai-card, .workflow-step, .stack-item, .prompt-item'
));

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window && revealTargets.length > 0) {
    const staggerGroups: Array<{ selector: string; delay: number }> = [
        { selector: '.features-grid .feature-card', delay: 0.1 },
        { selector: '.ai-grid .ai-card', delay: 0.1 },
        { selector: '.workflow-steps .workflow-step', delay: 0.15 },
        { selector: '.stack-grid .stack-item', delay: 0.05 },
    ];

    staggerGroups.forEach(({ selector, delay }) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((item, index) => {
            item.style.transitionDelay = `${index * delay}s`;
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target as HTMLElement;
            element.classList.add('animate-in');
            revealObserver.unobserve(element);

            const cleanupReveal = (event: TransitionEvent): void => {
                if (event.target !== element || event.propertyName !== 'opacity') return;
                element.classList.remove('reveal-ready', 'animate-in');
                element.style.removeProperty('transition-delay');
                element.removeEventListener('transitionend', cleanupReveal);
            };

            element.addEventListener('transitionend', cleanupReveal);
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealTargets.forEach((element) => {
        element.classList.add('reveal-ready');
        revealObserver.observe(element);
    });
}

prefersReducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;

    revealTargets.forEach((element) => {
        element.classList.remove('reveal-ready', 'animate-in');
        element.style.removeProperty('transition-delay');
    });
});
