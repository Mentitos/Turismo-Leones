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
        id: "termas-de-guaychu",
        title: "Termas de Guaychú",
        season: "semana santa",
        price: "99.990,00",
        image: "Otoño/gualeguaychu_otoño.jpeg",
        features: [
            { icon: "📅", text: "Programa Full Day" },
            { icon: "🚌", text: "Traslados en Bus Mix Confort | Ida y Vuelta" },
            { icon: "👤", text: "Coordinación permanente" },
            { icon: "📍", text: "Incluye entrada al Complejo Termal" }
        ],
        itinerary: `
            <p><strong>06:00 AM:</strong> Salida desde el punto de encuentro.</p>
            <p><strong>09:30 AM:</strong> Llegada al complejo termal Termas de Guaychú. Mañana libre para disfrutar de las piscinas.</p>
            <p><strong>01:00 PM:</strong> Almuerzo (no incluido).</p>
            <p><strong>04:30 PM:</strong> Regreso al punto de origen.</p>
            <p><strong>08:00 PM:</strong> Fin de los servicios.</p>
        `,
        importantNotes: `
            <p>- Llevar toallón y traje de baño.</p>
            <p>- El complejo cuenta con lockers (con cargo adicional).</p>
            <p>- Sujeto a condiciones climáticas seguras para el viaje en ruta.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Centro de la ciudad (Obelisco)</li>
                <li>Flores</li>
                <li>Liniers</li>
                <li>Morón</li>
            </ul>
        `
    }
];

function getPackageData(title, season) {
    const cleanId = title.toLowerCase().replace(/[^a-z0-9]/g, '-');

    let p = paquetesData.find(item => item.id === cleanId || cleanId.includes(item.id.replace(/-/g, '')) || item.title.toLowerCase() === title.toLowerCase());

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
