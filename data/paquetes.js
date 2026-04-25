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
        image: "Feriados/feriado_carlospaz.jpeg",
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
        image: "Feriados/feriado_gualeguaychu.jpeg",
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
        image: "Feriados/feriado_sanrafael.jpeg",
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
        image: "Feriados/feriado_tandil.jpeg",
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
        image: "Feriados/feriado_villademerlo.jpeg",
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
    }
];

function getPackageData(title, season) {
    const cleanId = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const seasonId = season ? `${cleanId}-${season.toLowerCase().trim()}` : null;

    // Try finding by season-specific ID first, then by clean ID, then by title
    let p = paquetesData.find(item => item.id === seasonId) || 
            paquetesData.find(item => item.id === cleanId) ||
            paquetesData.find(item => item.title.toLowerCase() === title.toLowerCase());

    if (!p) {
        return {
            id: cleanId,
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
