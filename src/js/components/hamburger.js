export function hamburgerAnimation() {
    const hamburger = document.querySelectorAll('#hamburger__icon');
    hamburger.forEach((element) => {
        element.addEventListener('click', () => {
            const currentState = element.getAttribute('data-state');

            if (!currentState || currentState === 'closed') {
                element.setAttribute('data-state', 'opened');
                element.setAttribute('aria-expanded', 'true');
            } else {
                element.setAttribute('data-state', 'closed');
                element.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
