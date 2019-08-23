window.sr = ScrollReveal();
sr.reveal('.fadeInCenter', {
    duration: 2500,
    origin: 'center',
    distance: '150px',
    opacity: 0
});
sr.reveal('.fadeInFromLeft', {
    duration: 1500,
    origin: 'left',
    distance: '150px',
    opacity: 0,
    viewFactor: 0.1
});
sr.reveal('.fadeInFromRight', {
    duration: 1500,
    origin: 'right',
    distance: '150px',
    opacity: 0,
    viewFactor: 0.1
});
sr.reveal('.fadeInTop', {
  duration: 1500,
  origin: 'bottom',
  distance: '50px',
  opacity: 0,
  viewFactor: 0.2
});
sr.reveal('.fadeInBottom', {
    duration: 1500,
    origin: 'bottom',
    distance: '350px',
    opacity: 0,
    delay: 500
});
sr.reveal('.fadeInLeft', {
    duration: 1500,
    origin: 'left',
    distance: '30px',
    opacity: 0
});
sr.reveal('.fadeInBottomSmallDelay', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    delay: 1200
});
sr.reveal('.fadeInBottomSmaller', {
    duration: 1500,
    origin: 'bottom',
    distance: '20px',
    opacity: 0,
    viewFactor: 0.2
});
sr.reveal('.fadeInBottomSlow', {
    duration: 2500,
    origin: 'bottom',
    distance: '350px',
    opacity: 0,
    easing: 'ease'
});
sr.reveal('.slideOutFromRight', {
    duration: 1000,
    origin: 'right',
    distance: '100%',
    easing: 'cubic-bezier(0.66, 0.01, 0.19, 1)',
    opacity: 1,
    viewFactor: 0.2
});