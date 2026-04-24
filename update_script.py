import os
import re

repo_dir = r"c:\Users\tello\OneDrive\Documentos\GitHub\Turismo-Leones"

# 1. Update crucero.html
crucero_path = os.path.join(repo_dir, "crucero.html")
with open(crucero_path, "r", encoding="utf-8") as f:
    crucero_html = f.read()

target_btn = """<a href="https://wa.me/5491151233885?text=Hola!%20Quisiera%20reservar%20una%20Cabina%20Interna%20en%20el%20Crucero%20Travelero"
                                target="_blank"
                                class="w-full bg-[#16a34a] text-white py-4 rounded-xl font-bold hover:bg-[#15803d] transition-colors editorial-shadow uppercase tracking-wider block text-center">RESERVAR
                                AHORA</a>"""

replacement_btn = """<button disabled class="w-full bg-gray-400 text-white py-4 rounded-xl font-bold uppercase tracking-wider block text-center opacity-70 cursor-not-allowed">AGOTADO</button>"""
crucero_html = crucero_html.replace(target_btn, replacement_btn)
with open(crucero_path, "w", encoding="utf-8") as f:
    f.write(crucero_html)

# 2. Update index.html
index_path = os.path.join(repo_dir, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    index_html = f.read()

index_html = index_html.replace('Otros/crucero_travelero_flyer.jpeg', 'ordenarmas/actualizada_flyer_crucero_travelero.jpeg')

invierno_section = """    <div class="season-section" data-section-season="invierno">
        <h2 class="season-title">TEMPORADA DE INVIERNO <span class="section-count"></span></h2>
        <div class="flyers-wrapper">
            <button class="flyer-carousel-btn left" onclick="scrollTrack(this, -1)">&#8249;</button>
            <button class="flyer-carousel-btn right" onclick="scrollTrack(this, 1)">&#8250;</button>
            <div class="flyers-track">
                <div class="flyer-card" onclick="openPackage('Tilcara Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_aereo_tilcara.jpeg" class="flyer-media flyer-img" alt="Tilcara">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Tilcara</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Aimogasta Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_aimogasta.jpeg" class="flyer-media flyer-img" alt="Aimogasta">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Aimogasta</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Campo La Herradura Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_campo_la_herradura.jpeg" class="flyer-media flyer-img" alt="Campo La Herradura">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Campo La Herradura</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Carlos Paz Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_carlos_paz.jpeg" class="flyer-media flyer-img" alt="Carlos Paz">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Carlos Paz</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Gualeguaychu Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_gualeguaychu.jpeg" class="flyer-media flyer-img" alt="Gualeguaychu">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Gualeguaychu</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('La Rioja Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_la_rioja.jpeg" class="flyer-media flyer-img" alt="La Rioja">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">La Rioja</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Mendoza Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_mendoza.jpeg" class="flyer-media flyer-img" alt="Mendoza">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Mendoza</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Merlo Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_merlo.jpeg" class="flyer-media flyer-img" alt="Merlo">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Merlo</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Puerto Madryn Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_puerto_madryn.jpeg" class="flyer-media flyer-img" alt="Puerto Madryn">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Puerto Madryn</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('San Pedro Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_san_pedro.jpeg" class="flyer-media flyer-img" alt="San Pedro">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">San Pedro</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('San Rafael Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_san_rafael.jpeg" class="flyer-media flyer-img" alt="San Rafael">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">San Rafael</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Tandil Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_tandil.jpeg" class="flyer-media flyer-img" alt="Tandil">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Tandil</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Termas Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_termas.jpeg" class="flyer-media flyer-img" alt="Termas">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Termas</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Termas Federacion Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_termas_federacion.jpeg" class="flyer-media flyer-img" alt="Termas Federacion">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Termas Federación</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
                <div class="flyer-card" onclick="openPackage('Termas Rio Hondo Invierno', 'invierno')">
                    <img src="ordenarmas/invierno_termas_rio_hondo.jpeg" class="flyer-media flyer-img" alt="Termas Rio Hondo">
                    <div class="flyer-overlay"><span class="flyer-overlay-title">Termas Rio Hondo</span><span class="flyer-overlay-badge">💬 Consultar</span></div>
                </div>
            </div>
        </div>
    </div>"""

feriados_start = '<div class="season-section" data-section-season="feriados">'
index_html = index_html.replace(feriados_start, invierno_section + "\n    " + feriados_start)
with open(index_path, "w", encoding="utf-8") as f:
    f.write(index_html)


# 3. Update galeria.html
galeria_path = os.path.join(repo_dir, "galeria.html")
with open(galeria_path, "r", encoding="utf-8") as f:
    galeria_html = f.read()

new_galeria_grid = """<div class="gallery-grid" id="galleryGrid">

        <div class="gallery-card" data-category="aventura" onclick="openLightbox(this)">
            <img src="ordenarmas/galeria.jpeg"
                alt="Galería">
            <div class="gallery-card-badge">Aventura</div>
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Viajes Inolvidables</span>
                    <span class="caption">¡Un verano para recordar!</span>
                </div>
            </div>
        </div>

        <div class="gallery-card" data-category="ciudad" onclick="openLightbox(this)">
            <img src="ordenarmas/paquetes_aereos.jpeg"
                alt="Paquetes Aéreos">
            <div class="gallery-card-badge">Aéreo</div>
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Paquetes Aéreos</span>
                    <span class="caption">Destinos nacionales e internacionales</span>
                </div>
            </div>
        </div>

        <div class="gallery-card" data-category="aventura" onclick="openLightbox(this)">
            <img src="ordenarmas/puntos_de_embarque_micro.jpeg"
                alt="Puntos de Embarque">
            <div class="gallery-card-badge">Terrestre</div>
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Puntos de Embarque</span>
                    <span class="caption">Salidas desde GBA y Capital</span>
                </div>
            </div>
        </div>

        <div class="gallery-card" data-category="crucero" onclick="openLightbox(this)">
            <img src="ordenarmas/actualizada_flyer_crucero_travelero.jpeg"
                alt="Crucero Travelero">
            <div class="gallery-card-badge">Crucero</div>
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Crucero Travelero</span>
                    <span class="caption">El océano como horizonte</span>
                </div>
            </div>
        </div>
        
        <div class="gallery-card" data-category="aventura" onclick="openLightbox(this)">
            <img src="ordenarmas/invierno_aereo_tilcara.jpeg"
                alt="Tilcara">
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Tilcara</span>
                    <span class="caption">Magia en el norte</span>
                </div>
            </div>
        </div>

        <div class="gallery-card" data-category="ciudad" onclick="openLightbox(this)">
            <img src="ordenarmas/invierno_mendoza.jpeg"
                alt="Mendoza">
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Mendoza</span>
                    <span class="caption">Nieve y viñedos</span>
                </div>
            </div>
        </div>

        <div class="gallery-card" data-category="aventura" onclick="openLightbox(this)">
            <img src="ordenarmas/invierno_puerto_madryn.jpeg"
                alt="Puerto Madryn">
            <div class="gallery-card-badge">Aventura</div>
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Puerto Madryn</span>
                    <span class="caption">Temporada de ballenas</span>
                </div>
            </div>
        </div>

        <div class="gallery-card" data-category="playa" onclick="openLightbox(this)">
            <img src="ordenarmas/invierno_termas_rio_hondo.jpeg"
                alt="Termas Rio Hondo">
            <div class="gallery-card-badge">Relax</div>
            <div class="gallery-card-overlay">
                <div class="gallery-card-info">
                    <span class="dest">Termas de Río Hondo</span>
                    <span class="caption">Descanso y bienestar</span>
                </div>
            </div>
        </div>

    </div>"""

galeria_html = re.sub(r'<div class="gallery-grid" id="galleryGrid">.*?</div>\s*<section class="gallery-cta">', new_galeria_grid + '\n\n    <section class="gallery-cta">', galeria_html, flags=re.DOTALL)

with open(galeria_path, "w", encoding="utf-8") as f:
    f.write(galeria_html)

print("Done")
