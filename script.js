// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// Highlight today's hours
const days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
const today = days[new Date().getDay()];
document.querySelectorAll('.hours-table tr').forEach(row => {
  if (row.cells[0] && row.cells[0].textContent.trim() === today) row.classList.add('today');
});

// Lightbox
const lbImages = [
  { type: 'img', src: 'images/cover2.jpeg' },
  { type: 'img', src: 'images/cover3.jpeg' },
  { type: 'img', src: 'images/imgi_26_WhatsApp-Image-2026-01-22-at-5.06.46-PM.jpg' },
  { type: 'img', src: 'images/imgi_27_WhatsApp-Image-2026-01-22-at-5.09.34-PM.jpg' },
  { type: 'img', src: 'images/cover1.jpeg' },
  { type: 'img', src: 'images/imgi_28_WhatsApp-Image-2026-01-22-at-5.34.24-PM.jpg' },
  { type: 'img', src: 'images/imgi_43_1.jpg' },
  { type: 'img', src: 'images/imgi_44_2.jpg' },
];
let currentLb = 0;

function openLightbox(idx) {
  currentLb = idx;
  renderLb();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function renderLb() {
  const item = lbImages[currentLb];
  document.getElementById('lb-content').innerHTML = item.type === 'img'
    ? `<img src="${item.src}" alt="" style="max-width:90vw;max-height:85vh;object-fit:contain;" />`
    : `<video src="${item.src}" controls autoplay style="max-width:90vw;max-height:85vh;"></video>`;
}
function lbStep(dir) {
  if (currentLb < 0) return;
  currentLb = (currentLb + dir + lbImages.length) % lbImages.length;
  renderLb();
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  const v = document.getElementById('lb-content').querySelector('video');
  if (v) v.pause();
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') lbStep(1);
  if (e.key === 'ArrowLeft')  lbStep(-1);
});

// DearFlip menu
$(function () {
  DFLIP.defaults.webgl               = true;
  DFLIP.defaults.autoEnableOutline   = false;
  DFLIP.defaults.autoEnableThumbnail = false;
  DFLIP.defaults.backgroundColor     = '#1a0900';
  DFLIP.defaults.backgroundImage     = '';
  DFLIP.defaults.pdfjsSrc            = 'https://cdn.jsdelivr.net/npm/dflip@1.0.0/js/libs/pdf.min.js';
  DFLIP.defaults.pdfjsWorkerSrc      = 'https://cdn.jsdelivr.net/npm/dflip@1.0.0/js/libs/pdf.worker.min.js';

  $('#df-flipbook').flipBook('taberna do bairro alto menu.pdf', {
    height          : 700,
    webgl           : true,
    backgroundColor : '#1a0900',
    backgroundImage : '',
    duration        : 800,
    direction       : DFLIP.DIRECTION.LTR,
    singlePage      : false,
  });
});
