<script type="module">
        const PRODUCT_DATA = {
            'cctv': [
                { id: 'cam1', title: 'Cámara Domo IP 4MP', img: 'https://images.unsplash.com/photo-1551709076-89f2499d383b?w=500', desc: 'Resolución QHD, visión nocturna inteligente y detección de humanos.' },
                { id: 'cam2', title: 'Cámara Bullet Metálica', img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500', desc: 'Ideal para exteriores, resistente al agua IP67 y gran alcance infrarrojo.' },
                { id: 'cam3', title: 'Kit DVR 4 Canales + HDD', img: 'https://images.unsplash.com/photo-1590483736622-39da8af75bba?w=500', desc: 'Sistema completo con grabación continua y acceso remoto vía App.' },
                { id: 'cam4', title: 'Cámara Wi-Fi Robotizada', img: 'https://images.unsplash.com/photo-1521233013473-c58550600b80?w=500', desc: 'Giro de 360 grados, audio bidireccional y seguimiento automático.' }
            ],
            'alarmas': [
                { id: 'al1', title: 'Panel Inalámbrico Inteligente', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500', desc: 'Central de alarma con conexión WiFi y GSM para reporte instantáneo al móvil.' },
                { id: 'al2', title: 'Sensor Movimiento PIR', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500', desc: 'Tecnología anti-mascotas y detección de calor corporal de alta precisión.' },
                { id: 'al3', title: 'Sirena Exterior de Alta Potencia', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500', desc: '120dB con luz estroboscópica para disuasión inmediata.' }
            ]
        };

        const BLOG_POSTS = [
            { title: 'Por qué instalar cámaras 4K', tag: 'Tecnología', img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600', desc: 'La diferencia entre reconocer un rostro o ver una mancha borrosa.' },
            { title: 'Evita robos en tu negocio', tag: 'Consejos', img: 'https://images.unsplash.com/photo-1563013544-824ae14f486d?w=600', desc: '5 estrategias de seguridad electrónica que todo comerciante debe aplicar.' },
            { title: 'Alarmas vs Cámaras', tag: 'Guía', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600', desc: '¿Cuál instalar primero? Te ayudamos a decidir según tu prioridad.' }
        ];

        // Inicializar componentes
        window.onload = () => {
            renderCarousels();
            renderBlog();
        };

        function navigate(pageId) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            const target = document.getElementById('page-' + pageId);
            if(target) target.classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-page') === pageId);
            });
            
            closeMobileMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function renderCarousels() {
            const cctvTrack = document.getElementById('cat-cctv');
            const alarTrack = document.getElementById('cat-alarmas');

            PRODUCT_DATA.cctv.forEach(p => {
                cctvTrack.innerHTML += createCarouselCard(p, 'cctv');
            });
            PRODUCT_DATA.alarmas.forEach(p => {
                alarTrack.innerHTML += createCarouselCard(p, 'alarmas');
            });
        }

        function createCarouselCard(p, cat) {
            return `
                <div class="min-w-[280px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100" onclick="openGallery('${cat}')">
                    <div class="h-48 overflow-hidden">
                        <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6">
                        <h4 class="font-bold text-lg mb-2">${p.title}</h4>
                        <p class="text-slate-400 text-xs line-clamp-2">${p.desc}</p>
                    </div>
                </div>
            `;
        }

        function renderBlog() {
            const blogCont = document.getElementById('blog-container');
            BLOG_POSTS.forEach(post => {
                blogCont.innerHTML += `
                    <article class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer group" onclick="openModal('${post.img}', '${post.title}', '${post.desc}')">
                        <div class="h-56 overflow-hidden relative">
                            <span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase z-10">${post.tag}</span>
                            <img src="${post.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                        </div>
                        <div class="p-8">
                            <h4 class="text-xl font-bold mb-3 group-hover:text-blue-600 transition italic">${post.title}</h4>
                            <p class="text-slate-500 text-sm mb-6">${post.desc}</p>
                            <span class="text-blue-600 font-bold text-xs flex items-center gap-2">Leer más <i class="fas fa-arrow-right text-[10px]"></i></span>
                        </div>
                    </article>
                `;
            });
        }

        function openGallery(category) {
            const container = document.getElementById('gallery-container');
            const title = document.getElementById('gallery-title');
            container.innerHTML = '';
            title.innerText = category === 'cctv' ? 'Sistemas de Cámaras' : 'Sistemas de Alarma';

            const products = PRODUCT_DATA[category];
            products.forEach(p => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 p-2 cursor-pointer';
                card.innerHTML = `
                    <div class="h-48 rounded-2xl overflow-hidden mb-4">
                        <img src="${p.img}" class="w-full h-full object-cover">
                    </div>
                    <div class="px-4 pb-4">
                        <h4 class="font-bold text-lg mb-1">${p.title}</h4>
                        <p class="text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">Ref: S24-70${Math.floor(Math.random()*100)}</p>
                        <button class="w-full py-3 bg-slate-50 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition">Ver detalles</button>
                    </div>
                `;
                card.onclick = () => openModal(p.img, p.title, p.desc);
                container.appendChild(card);
            });

            navigate('galeria');
        }

        function openModal(src, title, desc) {
            const modal = document.getElementById('modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.getElementById('modal-img').src = src;
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-desc').innerText = desc;

            const msg = encodeURIComponent(`Hola S24, me interesa este equipo: ${title}. ¿Podrían darme más información?`);
            document.getElementById('whatsapp-btn').href = `https://wa.me/573046615865?text=${msg}`;
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Menú Móvil
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.onclick = () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        };

        function closeMobileMenu() {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
        }
        menuClose.onclick = closeMobileMenu;

    </script>