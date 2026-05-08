// ===== Hero Slideshow (WAAPI) =====
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0;
  const INTERVAL = 5000;  // 表示時間 ms
  const DURATION = 1500;  // フェード時間 ms

  // 初期設定：最初のスライドだけ見せる
  slides.forEach((s, i) => { s.style.opacity = i === 0 ? '1' : '0'; });

  // 次の画像を先読み
  function preload(index) {
    const bg = slides[index].style.backgroundImage.replace(/url\(["'"]?|["']?\)/g, '');
    if (bg) { const img = new Image(); img.src = bg; }
  }
  for (let i = 1; i < slides.length; i++) preload(i);

  // クロスフェード切替
  function advance() {
    const outSlide = slides[current];
    current = (current + 1) % slides.length;
    const inSlide = slides[current];

    // 前回のアニメーションをキャンセルしてインラインスタイルをリセット
    outSlide.getAnimations().forEach(a => a.cancel());
    inSlide.getAnimations().forEach(a => a.cancel());
    outSlide.style.opacity = '1';
    inSlide.style.opacity = '0';

    // フェードアウト（fill なし → onfinish でインライン確定）
    const outAnim = outSlide.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: DURATION, easing: 'ease-in-out' }
    );
    outAnim.onfinish = () => { outSlide.style.opacity = '0'; };

    // フェードイン（fill なし → onfinish でインライン確定）
    const inAnim = inSlide.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: DURATION, easing: 'ease-in-out' }
    );
    inAnim.onfinish = () => { inSlide.style.opacity = '1'; };
  }

  setInterval(advance, INTERVAL);
})();

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
// Close nav on link click
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ===== Gallery: ランダム表示 =====
const galleryImages = [
  { src: 'images/IMG_9574-scaled.jpg', alt: '焼きモッツァレラとトマトパスタ' },
  { src: 'images/IMG_9579-scaled.jpg', alt: 'コムシロンパスタ' },
  { src: 'images/IMG_9581-scaled.jpg', alt: 'ナスとベーコンのトマトソースパスタ' },
  { src: 'images/IMG_9568-scaled.jpg', alt: 'エビと貝柱のフレッシュトマトペペロンチーノ' },
  { src: 'images/IMG_9566-scaled.jpg', alt: 'ほうれん草とベーコンのクリームパスタ' },
  { src: 'images/IMG_9564-scaled.jpg', alt: 'コムシロンパスタ（黒いボウル）' },
  { src: 'images/IMG_9573-scaled.jpg', alt: '生ハムとレモン・オリーブのパスタ' },
  { src: 'images/IMG_9569-scaled.jpg', alt: 'エビとブロッコリーのトマトクリームパスタ' },
  { src: 'images/IMG_9598-scaled.jpg', alt: 'トルコライス' },
  { src: 'images/IMG_9604-scaled.jpg', alt: 'チキン南蛮ランチ' },
  { src: 'images/IMG_9600-scaled.jpg', alt: '塩からあげランチ' },
  { src: 'images/IMG_9605-scaled.jpg', alt: 'ベーコンとキノコのクリームリゾット' },
  { src: 'images/IMG_9607-scaled.jpg', alt: '季節野菜のサラダ' },
  { src: 'images/Recommended_set-scaled.jpg', alt: 'おすすめセット（フルコース）' },
  { src: 'images/IMG_9610-scaled.jpg', alt: 'いちごパフェ' },
  { src: 'images/IMG_9613-scaled.jpg', alt: 'フルーツワッフル' },
  { src: 'images/IMG_9616-scaled.jpg', alt: '手作りケーキ' },
  { src: 'images/IMG_9376-scaled.jpg', alt: 'チーズケーキ＆アイス' },
  { src: 'images/IMG_9406-scaled.jpg', alt: 'ウインナーのトマトパスタ' },
  { src: 'images/IMG_3157-scaled.jpg', alt: '生ハムとレモンのパスタ' },
  { src: 'images/IMG_3204-scaled.jpg', alt: '塩からあげ' },
  { src: 'images/IMG_4113-1-scaled.jpg', alt: 'コムシロンパスタ（卵黄・納豆スタイル）' },
];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const galleryImgs = document.querySelectorAll('.gallery-item img');
const picked = shuffleArray(galleryImages).slice(0, galleryImgs.length);
galleryImgs.forEach((img, i) => {
  img.src = picked[i].src;
  img.alt = picked[i].alt;
});

// Smooth fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.menu-card, .voice-card, .gallery-item, .concept-body, .access-body').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Inject fade-in styles
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .fade-in.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);
