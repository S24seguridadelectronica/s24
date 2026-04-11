// DATA
const PRODUCT_DATA = {
  cctv: [
    {
      id: "cam1",
      title: "Cámara Domo IP 4MP",
      img: "https://images.unsplash.com/photo-1551709076-89f2499d383b?w=500",
      desc: "Resolución QHD, visión nocturna inteligente y detección de humanos.",
    },
    {
      id: "cam2",
      title: "Cámara Bullet Metálica",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500",
      desc: "Ideal para exteriores, resistente al agua IP67 y gran alcance infrarrojo.",
    },
    {
      id: "cam3",
      title: "Kit DVR 4 Canales + HDD",
      img: "https://images.unsplash.com/photo-1590483736622-39da8af75bba?w=500",
      desc: "Sistema completo con grabación continua y acceso remoto vía App.",
    },
    {
      id: "cam4",
      title: "Cámara Wi-Fi Robotizada",
      img: "https://images.unsplash.com/photo-1521233013473-c58550600b80?w=500",
      desc: "Giro de 360 grados, audio bidireccional y seguimiento automático.",
    },
  ],
  alarmas: [
    {
      id: "al1",
      title: "Panel Inalámbrico Inteligente",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
      desc: "Central de alarma con conexión WiFi y GSM.",
    },
    {
      id: "al2",
      title: "Sensor Movimiento PIR",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
      desc: "Detección de calor corporal con alta precisión.",
    },
    {
      id: "al3",
      title: "Sirena Exterior",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
      desc: "120dB con luz estroboscópica.",
    },
  ],
};

const BLOG_POSTS = [
  {
    title: "Por qué instalar cámaras 4K",
    tag: "Tecnología",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600",
    desc: "La diferencia entre reconocer un rostro o ver una mancha.",
  },
  {
    title: "Evita robos en tu negocio",
    tag: "Consejos",
    img: "https://images.unsplash.com/photo-1563013544-824ae14f486d?w=600",
    desc: "5 estrategias de seguridad electrónica.",
  },
  {
    title: "Alarmas vs Cámaras",
    tag: "Guía",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
    desc: "¿Cuál instalar primero?",
  },
];

// INIT
window.addEventListener("load", () => {
  renderCarousels();
  renderBlog();
});

// NAV
function navigate(pageId) {
  document.querySelectorAll(".page-content").forEach((p) => {
    p.classList.remove("active");
  });

  const target = document.getElementById("page-" + pageId);
  if (target) target.classList.add("active");

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// CARDS
function createCarouselCard(p, cat) {
  return `
    <div class="card" onclick="openGallery('${cat}')">
      <img src="${p.img}" />
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `;
}

function renderCarousels() {
  const cctv = document.getElementById("cat-cctv");
  const alarmas = document.getElementById("cat-alarmas");

  if (!cctv || !alarmas) return;

  cctv.innerHTML = PRODUCT_DATA.cctv
    .map((p) => createCarouselCard(p, "cctv"))
    .join("");

  alarmas.innerHTML = PRODUCT_DATA.alarmas
    .map((p) => createCarouselCard(p, "alarmas"))
    .join("");
}

// BLOG
function renderBlog() {
  const blog = document.getElementById("blog-container");
  if (!blog) return;

  blog.innerHTML = BLOG_POSTS.map(
    (post) => `
    <article onclick="openModal('${post.img}','${post.title}','${post.desc}')">
      <img src="${post.img}" />
      <h4>${post.title}</h4>
      <p>${post.desc}</p>
    </article>
  `
  ).join("");
}

// GALERÍA
function openGallery(category) {
  const container = document.getElementById("gallery-container");
  if (!container) return;

  container.innerHTML = PRODUCT_DATA[category]
    .map(
      (p) => `
      <div onclick="openModal('${p.img}','${p.title}','${p.desc}')">
        <img src="${p.img}" />
        <h4>${p.title}</h4>
      </div>
    `
    )
    .join("");

  navigate("galeria");
}

// MODAL
function openModal(src, title, desc) {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.classList.remove("hidden");

  document.getElementById("modal-img").src = src;
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = desc;
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.classList.add("hidden");
}

// MENU
function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;

  menu.classList.add("hidden");
}