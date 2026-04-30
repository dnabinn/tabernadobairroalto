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

// Lightbox — all 17 gallery images
const lbImages = [
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM.jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (1).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (2).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (3).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (4).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (5).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (6).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (7).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.00 AM (8).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM.jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (1).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (2).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (3).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (4).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (5).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (6).jpeg' },
  { type: 'img', src: 'gallery/WhatsApp Image 2026-04-30 at 12.54.01 AM (7).jpeg' },
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

  $('#df-flipbook').flipBook('Taberna do bairro alto no price.pdf', {
    height          : 700,
    webgl           : true,
    backgroundColor : '#1a0900',
    backgroundImage : '',
    duration        : 800,
    direction       : DFLIP.DIRECTION.LTR,
    singlePage      : false,
  });
});
