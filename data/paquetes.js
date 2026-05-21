const paquetesData = [
    {
        id: "crucero-travelero",
        title: "Crucero Travelero",
        season: "Todo el año",
        price: "Consultar",
        image: "Otros/crucero_travelero_flyer.jpeg",
        features: [
            { icon: "🚢", text: "Crucero Full Destacados" },
            { icon: "💰", text: "No gastas ni un mango más" },
            { icon: "🍽️", text: "All Inclusive" },
            { icon: "🎭", text: "Shows y entretenimiento" }
        ],
        itinerary: `
            <p><strong>Día 1:</strong> Embarque y bienvenida a bordo.</p>
            <p><strong>Días Navegación:</strong> Disfrute de todas las instalaciones, comidas y shows incluidos.</p>
            <p><strong>Destinos:</strong> Recorrido por las costas más bellas.</p>
        `,
        importantNotes: `
            <p>- Documentación requerida: DNI o Pasaporte vigente.</p>
            <p>- Incluye todas las tasas e impuestos.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puerto de Buenos Aires</li>
            </ul>
        `
    },
    {
        id: "bariloche-aereo",
        title: "Bariloche Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/BARILOCHE AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "ushuaia-aereo",
        title: "Ushuaia Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "Otros/ushuaia.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/USHUAIA AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "calafate-aereo",
        title: "Calafate Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Marzo-Abril/EL CALAFATE (vend MAR).pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "iguazu-aereo",
        title: "Iguazú Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/CATARATAS DEL IGUAZÚ AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "mendoza-aereo",
        title: "Mendoza Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/MENDOZA AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "puerto-madryn-aereo",
        title: "Puerto Madryn Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/PUERTO MADRYN VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "tilcara",
        title: "Tilcara",
        season: "invierno",
        price: "739.990",
        image: "ordenarmas/invierno_aereo_tilcara.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/TILCARA AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "salta-aereo",
        title: "Salta Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/SALTA AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`
    },
    {
        id: "aimogasta",
        title: "Aimogasta",
        season: "invierno",
        price: "399.990",
        image: "ordenarmas/invierno_aimogasta.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/AIMOGASTA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-carlos-paz",
        title: "Villa Carlos Paz",
        season: "invierno",
        price: "299.990",
        image: "ordenarmas/invierno_carlos_paz.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/VILLA CARLOS PAZ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "gualeguaychú",
        title: "Gualeguaychú",
        season: "invierno",
        price: "189.990",
        image: "ordenarmas/invierno_gualeguaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUALEGUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "la-rioja",
        title: "La Rioja",
        season: "invierno",
        price: "319.990",
        image: "ordenarmas/invierno_la_rioja.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA RIOJA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "mendoza",
        title: "Mendoza",
        season: "invierno",
        price: "299.990",
        image: "ordenarmas/invierno_mendoza.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/MENDOZA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-de-merlo",
        title: "Villa de Merlo",
        season: "invierno",
        price: "289.990",
        image: "ordenarmas/invierno_merlo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/MERLO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "puerto-madryn",
        title: "Puerto Madryn",
        season: "invierno",
        price: "369.990",
        image: "ordenarmas/invierno_puerto_madryn.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/PUERTO MADRYN VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "san-pedro",
        title: "San Pedro",
        season: "invierno",
        price: "109.990",
        image: "ordenarmas/invierno_san_pedro.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN PEDRO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "san-rafael",
        title: "San Rafael",
        season: "invierno",
        price: "359.990",
        image: "ordenarmas/invierno_san_rafael.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN RAFAEL VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "tandil",
        title: "Tandil",
        season: "invierno",
        price: "209.990",
        image: "ordenarmas/invierno_tandil.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/TANDIL VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "termas-de-guaychú",
        title: "Termas de Guaychú",
        season: "invierno",
        price: "99.990",
        image: "ordenarmas/invierno_termas.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "📍", text: "Entrada incluida" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "termas-de-federación",
        title: "Termas de Federación",
        season: "invierno",
        price: "219.990",
        image: "ordenarmas/invierno_termas_federacion.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/FEDERACION VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "termas-de-río-hondo",
        title: "Termas de Río Hondo",
        season: "invierno",
        price: "449.990",
        image: "ordenarmas/invierno_termas_rio_hondo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/TERMAS DE RÍO HONDO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con pensión completa" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "campo-la-herradura",
        title: "Campo La Herradura",
        season: "invierno",
        price: "99.990",
        image: "ordenarmas/invierno_campo_la_herradura.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA HERRADURA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🍖", text: "Almuerzo incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "termas-de-guaychu",
        title: "Termas de Guaychú",
        season: "semana santa",
        price: "99.990,00",
        image: "Otoño/gualeguaychu_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/GUAYCHÚ VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "📅", text: "Programa Full Day" },
            { icon: "🚌", text: "Traslados en Bus Mix Confort | Ida y Vuelta" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "📍", text: "Incluye entrada al Complejo Termal" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-carlos-paz-feriados",
        title: "Villa Carlos Paz",
        season: "feriados",
        price: "229.990",
        image: "Feriados/villa_carlos_paz.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/VILLA CARLOS PAZ FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "gualeguaychú-feriados",
        title: "Gualeguaychú",
        season: "feriados",
        price: "189.990",
        image: "Feriados/gualeguaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/GUALEGUAYCHÚ VEND FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "mendoza-feriados",
        title: "Mendoza",
        season: "feriados",
        price: "249.990",
        image: "Feriados/feriado_mendoza.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/MENDOZA VEND FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "san-rafael-feriados",
        title: "San Rafael",
        season: "feriados",
        price: "259.990",
        image: "Feriados/san_rafael.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/SAN RAFAEL VEND FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "tandil-feriados",
        title: "Tandil",
        season: "feriados",
        price: "199.990",
        image: "Feriados/tandil.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/TANDIL VEND FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-de-merlo-feriados",
        title: "Villa de Merlo",
        season: "feriados",
        price: "239.990",
        image: "Feriados/villa_merlo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/MERLO VEND FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "termas-de-guaychú-feriados",
        title: "Termas de Guaychú",
        season: "feriados",
        price: "99.990",
        image: "Feriados/feriado_termas_guaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO JUNIO/GUAYCHÚ VEND FERIADO JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "📍", text: "Entrada incluida" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "gualeguaychu-oto-o",
        title: "Gualeguaychú Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/gualeguaychu_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/GUALEGUAYCHÚ X 1 NT VEND ABRIL A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "mendoza-oto-o",
        title: "Mendoza Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/mendoza_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MENDOZA X 3 NTS VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "puerto-madryn-oto-o",
        title: "Puerto Madryn Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/puerto_madryn_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/PUERTO MADRYN X 3 NTS VEND JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "san-rafael-oto-o",
        title: "San Rafael Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/san_rafael_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SAN RAFAEL X 3 NTS SEGUNDA QUINCENA MAYO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "tandil-oto-o",
        title: "Tandil Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/tandil_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/TANDIL X1 NT VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-carlos-paz-oto-o",
        title: "Villa Carlos Paz Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/villa_carlos_paz_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/VILLA CARLOS PAZ VEND MAYO_JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-de-merlo-oto-o",
        title: "Villa de Merlo Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/villa_de_merlo_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MERLO X 3 NTS SEGUNDA QUINCENA MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "cataratas-del-iguazu-oto-o",
        title: "Cataratas Del Iguazú Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/cataratas_del_iguazu_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/CATARATAS DEL IGUAZÚ X 3 NTS VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "mar-del-plata-oto-o",
        title: "Mar Del Plata Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/mar_del_plata_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MAR DEL PLATA X 2NTS VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "salta-oto-o",
        title: "Salta Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/salta_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SALTA X 4 NTS VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "san-pedro-oto-o",
        title: "San Pedro Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/san_pedro_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SAN PEDRO VEND ABRIL A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "campo-la-herradura-oto-o",
        title: "Campo La Herradura Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/campo_la_herradura_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/LA HERRADURA VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🍖", text: "Almuerzo incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "la-rioja-oto-o",
        title: "La Rioja Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/la_rioja_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/LA RIOJA VEND MAYO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "aimogasta-oto-o",
        title: "Aimogasta Otoño",
        season: "otoño",
        price: "Consultar",
        image: "Otoño/aimogasta_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/AIMOGASTA VEND JUNIO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "iguazu",
        title: "Iguazú",
        season: "invierno",
        price: "Consultar",
        image: "ordenarmas/invierno_iguazu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/CATARATAS DEL IGUAZÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    }
,

    {
        id: "cataratas-del-iguazu-valijasya",
        title: "Cataratas del Iguazu",
        season: "valijasya",
        price: "Consultar",
        image: "valijasya/cataratasdeliguazu.jpeg",
        features: [
            { icon: "🌊", text: "Cataratas del Iguazú" },
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Nueva salida! Contactanos para fechas, precios y disponibilidad.</p>`,
        importantNotes: `<p>- Cupos limitados. Consultá por WhatsApp.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "san-rafael-valijasya",
        title: "San Rafael",
        season: "valijasya",
        price: "Consultar",
        image: "valijasya/sanrafael.jpeg",
        features: [
            { icon: "🏔️", text: "San Rafael, Mendoza" },
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Nueva salida! Contactanos para fechas, precios y disponibilidad.</p>`,
        importantNotes: `<p>- Cupos limitados. Consultá por WhatsApp.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "villa-carlos-paz-valijasya",
        title: "Villa Carlos Paz",
        season: "valijasya",
        price: "Consultar",
        image: "valijasya/villacarlospaz.jpeg",
        features: [
            { icon: "🎡", text: "Villa Carlos Paz, Córdoba" },
            { icon: "🚌", text: "Bus Mix" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Nueva salida! Contactanos para fechas, precios y disponibilidad.</p>`,
        importantNotes: `<p>- Cupos limitados. Consultá por WhatsApp.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "puerto-madryn-ballenas",
        title: "Puerto Madryn Ballenas",
        season: "invierno",
        price: "$379.990 + gastos / 6 cuotas de $90.998",
        image: "nuevo20_5/puerto_madryn.jpeg",
        features: [
            { icon: "🚌", text: "Bus semicama" },
            { icon: "🏨", text: "Hotel Samay Huasi (céntrico con piscina climatizada)" },
            { icon: "🍽️", text: "Desayuno buffet" },
            { icon: "📅", text: "6 días / 3 noches" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "📍", text: "Con 10 pasajeros te pasamos a buscar" }
        ],
        itinerary: `
            <p><strong>Salidas programadas:</strong></p>
            <ul>
                <li><strong>Agosto:</strong> 11, 18</li>
                <li><strong>Septiembre:</strong> 03, 10, 16, 23</li>
                <li><strong>Octubre:</strong> 22, 25</li>
            </ul>
            <p>¡Disfrutá de la maravillosa Temporada de Ballenas 2026 con el mejor servicio y hotelería!</p>
        `,
        importantNotes: `
            <p>- Precio publicado + gastos.</p>
            <p>- Financiación: 6 cuotas fijas de $90.998.</p>
            <p>- Adicional: "Con 10 pasajeros te pasamos a buscar" (consultar zona de cobertura).</p>
        `,
        boardingPoints: `
            <ul>
                <li>Varios puntos de embarque en Buenos Aires y zonas aledañas (consultá por tu punto más cercano).</li>
            </ul>
        `
    },
    {
        id: "mendoza-aereo-dia-del-maestro",
        title: "Mendoza Aéreo Día del Maestro",
        season: "maestro",
        price: "$529.990",
        image: "nuevo20_5/dia_del_maestro.jpeg",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires (ida y vuelta)" },
            { icon: "🏨", text: "Alojamiento céntrico con desayuno" },
            { icon: "🚌", text: "Traslados de llegada y salida" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>¡Salida especial Día del Maestro! Disfrutá de la tierra del sol y del buen vino.</p>`,
        importantNotes: `<p>- Cupos muy limitados. Tarifas especiales para docentes y acompañantes.</p>`,
        boardingPoints: `<ul><li>Aeroparque Jorge Newbery / Ezeiza</li></ul>`
    },
    {
        id: "cataratas-aereo-dia-del-maestro",
        title: "Cataratas Aéreo Día del Maestro",
        season: "maestro",
        price: "$539.990",
        image: "nuevo20_5/dia_del_maestro.jpeg",
        features: [
            { icon: "✈️", text: "Aéreo desde Buenos Aires (ida y vuelta)" },
            { icon: "🏨", text: "Alojamiento con piscina y desayuno" },
            { icon: "🚌", text: "Traslados in/out" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>¡Salida especial Día del Maestro! Viví una experiencia única en una de las Nuevas Siete Maravillas del Mundo.</p>`,
        importantNotes: `<p>- Cupos muy limitados. Tarifas especiales para docentes y acompañantes.</p>`,
        boardingPoints: `<ul><li>Aeroparque Jorge Newbery / Ezeiza</li></ul>`
    },
    {
        id: "villa-de-merlo-bus-dia-del-maestro",
        title: "Villa de Merlo Bus Día del Maestro",
        season: "maestro",
        price: "$229.990",
        image: "ordenarmas/invierno_merlo.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix de última generación" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>Disfrutá del excelente microclima de Villa de Merlo en este fin de semana especial.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "villa-carlos-paz-bus-dia-del-maestro",
        title: "Villa Carlos Paz Bus Día del Maestro",
        season: "maestro",
        price: "$229.990",
        image: "ordenarmas/invierno_carlos_paz.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix de última generación" },
            { icon: "🏨", text: "Alojamiento con media pensión" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>Divertite y relajate en las sierras de Córdoba en este especial para maestros.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "tandil-bus-dia-del-maestro",
        title: "Tandil Bus Día del Maestro",
        season: "maestro",
        price: "$199.990",
        image: "ordenarmas/invierno_tandil.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix de última generación" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>Escapate a las sierras de Tandil, disfrutá del aire libre y la gastronomía regional.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "gualeguaychu-bus-dia-del-maestro",
        title: "Gualeguaychú Bus Día del Maestro",
        season: "maestro",
        price: "$189.990",
        image: "ordenarmas/invierno_gualeguaychu.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix de última generación" },
            { icon: "🏨", text: "Alojamiento con desayuno" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>Disfrutá del río, las termas y la tranquilidad de Gualeguaychú.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "mar-del-plata-bus-dia-del-maestro",
        title: "Mar del Plata Bus Día del Maestro",
        season: "maestro",
        price: "$179.990",
        image: "Feriados/feriado_mardelplata.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix de última generación" },
            { icon: "🏨", text: "Alojamiento céntrico con desayuno" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "🍎", text: "Especial Día del Maestro" }
        ],
        itinerary: `<p>Disfrutá de la brisa marina, los teatros y los mejores paseos en Mar del Plata.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "san-pedro-bus-dia-del-maestro",
        title: "San Pedro Bus Día del Maestro",
        season: "maestro",
        price: "$109.990",
        image: "ordenarmas/invierno_san_pedro.jpeg",
        features: [
            { icon: "🚌", text: "Bus semicama confortable" },
            { icon: "🍎", text: "Especial Día del Maestro" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Ideal para un fin de semana campestre en la costa del río Paraná.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "campo-la-herradura-bus-dia-del-maestro",
        title: "Campo La Herradura Bus Día del Maestro",
        season: "maestro",
        price: "$99.990",
        image: "ordenarmas/invierno_campo_la_herradura.jpeg",
        features: [
            { icon: "🚌", text: "Bus semicama confortable" },
            { icon: "🍖", text: "Almuerzo de campo incluido" },
            { icon: "🍎", text: "Especial Día del Maestro" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Un día de campo inolvidable con el mejor asado criollo y actividades tradicionales.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "termas-de-guaychu-bus-dia-del-maestro",
        title: "Termas de Guaychú Bus Día del Maestro",
        season: "maestro",
        price: "$99.990",
        image: "ordenarmas/invierno_termas.jpeg",
        features: [
            { icon: "🚌", text: "Bus semicama confortable" },
            { icon: "📍", text: "Entrada al complejo termal incluida" },
            { icon: "🍎", text: "Especial Día del Maestro" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Relajate y renová tus energías en las piletas termales de Guaychú.</p>`,
        importantNotes: `<p>- Tarifas promocionales por el Día del Maestro.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "cataratas-2x1",
        title: "Cataratas 2x1",
        season: "valijasya",
        price: "$499.990 c/u",
        image: "Otoño/cataratas_del_iguazu_otoño.jpeg",
        features: [
            { icon: "✈️", text: "Aéreo incluido (Salida 23/05)" },
            { icon: "🔥", text: "PROMO SUPER SALE 2x1" },
            { icon: "💳", text: "Aboná en 3 y 6 cuotas" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida INMEDIATA el 23 de Mayo! Pagás 1 y viajan 2. Disfrutá de las Cataratas del Iguazú a una tarifa de locos.</p>`,
        importantNotes: `<p>- Cupos súper limitados. La reserva es por el 2x1.</p>`,
        boardingPoints: `<ul><li>Aeropuerto / Ezeiza</li></ul>`
    },
    {
        id: "gualeguaychu-2x1",
        title: "Gualeguaychú 2x1",
        season: "valijasya",
        price: "$159.990 c/u",
        image: "Otoño/gualeguaychu_otoño.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "🔥", text: "PROMO SUPER SALE 2x1" },
            { icon: "💳", text: "Aboná en 3 y 6 cuotas" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida INMEDIATA el 23 de Mayo! Pagás 1 y viajan 2. Relajate en Gualeguaychú el fin de semana.</p>`,
        importantNotes: `<p>- Cupos súper limitados. La reserva es por el 2x1.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "tandil-2x1",
        title: "Tandil 2x1",
        season: "valijasya",
        price: "$164.990 c/u",
        image: "Otoño/tandil_otoño.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "🔥", text: "PROMO SUPER SALE 2x1" },
            { icon: "💳", text: "Aboná en 3 y 6 cuotas" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida INMEDIATA el 23 de Mayo! Pagás 1 y viajan 2. Recorré las sierras y descansá en Tandil.</p>`,
        importantNotes: `<p>- Cupos súper limitados. La reserva es por el 2x1.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "merlo-2x1",
        title: "Merlo 2x1",
        season: "valijasya",
        price: "$199.990 c/u",
        image: "Otoño/villa_de_merlo_otoño.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix Confort (Salida 22/05)" },
            { icon: "🔥", text: "PROMO SUPER SALE 2x1" },
            { icon: "💳", text: "Aboná en 3 y 6 cuotas" },
            { icon: "🏨", text: "Alojamiento incluido" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida INMEDIATA el 22 de Mayo! Pagás 1 y viajan 2. Viví el microclima de Merlo.</p>`,
        importantNotes: `<p>- Cupos súper limitados. La reserva es por el 2x1.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA</li></ul>`
    },
    {
        id: "san-pedro-2x1",
        title: "San Pedro 2x1",
        season: "valijasya",
        price: "$89.990 c/u",
        image: "Otoño/san_pedro_otoño.jpeg",
        features: [
            { icon: "🚌", text: "Bus Confortable (Salida 25/05)" },
            { icon: "🔥", text: "PROMO SUPER SALE 2x1" },
            { icon: "💳", text: "Aboná en 3 y 6 cuotas" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida INMEDIATA el 25 de Mayo! Pagás 1 y viajan 2. Un escape perfecto a San Pedro.</p>`,
        importantNotes: `<p>- Cupos súper limitados. La reserva es por el 2x1.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`
    },
    {
        id: "super-sale-2x1",
        title: "Super Sale 2x1",
        season: "valijasya",
        price: "Consultar",
        image: "nuevo20_5/resumen_2x1.jpeg",
        features: [
            { icon: "🔥", text: "Super Sale 2x1 en Salidas Inmediatas" },
            { icon: "💳", text: "Pagá en 3 y 6 cuotas fijas" },
            { icon: "📅", text: "Salidas próximamente en Mayo" },
            { icon: "⚠️", text: "Cupos estrictamente limitados" }
        ],
        itinerary: `<p>¡Aprovechá la promo de salidas urgentes del mes de Mayo! Viajan 2 personas pagando sólo 1. Cataratas Aéreo, Gualeguaychú, Tandil, Merlo, San Pedro y La Rioja con tarifas únicas.</p>`,
        importantNotes: `<p>- Cupos limitados. Consultanos por WhatsApp para congelar tu lugar inmediatamente.</p>`,
        boardingPoints: `<ul><li>Múltiples puntos de embarque según el destino</li></ul>`
    },
    {
        id: "super-sale-mayo25",
        title: "Especial 25 de Mayo",
        season: "mayo25",
        price: "Consultar",
        image: "nuevo21_5/resumen.jpeg",
        features: [
            { icon: "🔥", text: "Super Sale Especial 25 de Mayo" },
            { icon: "💳", text: "Pagá en 6 cuotas fijas" },
            { icon: "📅", text: "Salidas especiales 23/05 y 25/05" },
            { icon: "🇦🇷", text: "Celebrá el fin de semana patrio" }
        ],
        itinerary: `<p>¡Celebrá el fin de semana patrio viajando! Increíbles tarifas promocionales para Tandil, Gualeguaychú y San Pedro. Viajá con total comodidad en salidas grupales con coordinación.</p>`,
        importantNotes: `<p>- Cupos estrictamente limitados por ser fin de semana patrio.</p><p>- Reservá hoy mismo con seña mínima.</p>`,
        boardingPoints: `<ul><li>Múltiples puntos de embarque en CABA y GBA según destino.</li></ul>`
    },
    {
        id: "tandil-mayo25",
        title: "Tandil Especial 25 de Mayo",
        season: "mayo25",
        price: "$99.990 + gastos",
        image: "nuevo21_5/tandil.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "🏨", text: "Alojamiento en hotel turista" },
            { icon: "🍽️", text: "Media Pensión incluida" },
            { icon: "📅", text: "2 días / 1 noche" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida Especial del 25 de Mayo! Disfrutá de la tranquilidad y sierras de Tandil. El paquete incluye 2 días y 1 noche de alojamiento con media pensión, y traslados de ida y vuelta.</p>`,
        importantNotes: `<p>- Tarifa Promocional: ANTES $199.990 → AHORA $99.990 + gastos.</p><p>- Financiación: 6 cuotas fijas de $25.664.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA.</li></ul>`
    },
    {
        id: "gualeguaychu-mayo25",
        title: "Gualeguaychú Especial 25 de Mayo",
        season: "mayo25",
        price: "$99.990 + gastos",
        image: "nuevo21_5/gualeguaychu.jpeg",
        features: [
            { icon: "🚌", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "🏨", text: "Alojamiento en Hotel Los Robles" },
            { icon: "🍽️", text: "Desayuno incluido" },
            { icon: "📅", text: "3 días / 2 noches" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida Especial del 25 de Mayo! Escapate a Gualeguaychú por 3 días y 2 noches, con hospedaje en el Hotel Los Robles y desayuno incluido. Ideal para descansar y recorrer.</p>`,
        importantNotes: `<p>- Tarifa Promocional: ANTES $189.990 → AHORA $99.990 + gastos.</p><p>- Financiación: 6 cuotas fijas de $25.664.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA.</li></ul>`
    },
    {
        id: "san-pedro-mayo25",
        title: "San Pedro Especial 25 de Mayo",
        season: "mayo25",
        price: "$79.990",
        image: "nuevo21_5/san_pedro.jpeg",
        features: [
            { icon: "🚌", text: "Bus Confortable (Salida 25/05)" },
            { icon: "🍖", text: "Almuerzo: Parrillada incluida" },
            { icon: "📅", text: "Salida Full Day" },
            { icon: "👤", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida Especial del 25 de Mayo! Viví una jornada de campo de descanso y tradición en San Pedro. Incluye viaje de ida y vuelta en el día y un espectacular almuerzo con parrillada completa.</p>`,
        importantNotes: `<p>- Tarifa Promocional: ANTES $109.990 → AHORA $79.990 final (sin gastos extra).</p><p>- Financiación: 6 cuotas fijas de $18.665.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA.</li></ul>`
    }
];

function getPackageData(title, season) {
    if (!title) return null;

    // Normalization function to remove accents and special characters
    const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    const targetId = normalize(title);
    const targetSeasonId = season ? `${targetId}-${normalize(season)}` : null;

    // Try finding by normalized ID, original ID, or normalized title
    let p = paquetesData.find(item => {
        const itemId = normalize(item.id);
        const itemTitle = normalize(item.title);
        return itemId === targetSeasonId || itemId === targetId || itemTitle === targetId || item.id === title;
    });

    if (!p) {
        // Fallback to a partial title match if still not found
        p = paquetesData.find(item => normalize(item.title).includes(targetId) || targetId.includes(normalize(item.title)));
    }

    if (!p) {
        return {
            id: targetId,
            title: title || "Destino Turístico",
            season: season || 'Consultar',
            price: "Consultar",
            image: "Otoño/gualeguaychu_otoño.jpeg",
            features: [
                { icon: "📅", text: "Programa Full Day" },
                { icon: "🚌", text: "Traslados en Bus Mix Confort | Ida y Vuelta" },
                { icon: "👤", text: "Coordinación permanente" },
                { icon: "✔", text: "Asistencia médica" }
            ],
            itinerary: paquetesData[0].itinerary,
            importantNotes: paquetesData[0].importantNotes,
            boardingPoints: paquetesData[0].boardingPoints,
            legal: ""
        };
    }

    return p;
}
