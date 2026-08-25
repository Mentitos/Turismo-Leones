const paquetesData = [
    // === TRAVEL SALE 2026 JETSMART (25_5) ===
    {
        id: "resumen-travel-sale-jetsmart",
        title: "Resumen Travel Sale JetSMART",
        season: "jetsmart",
        price: "Desde $525.990",
        image: "25_5/24_30_agosto_jetsmart/resumen.jpeg",
        features: [
            { icon: "✈️", text: "Vuelos con JetSMART + Traslados incluidos" },
            { icon: "💥", text: "¡PROMO 4X3! Viajan 4 pagan 3" },
            { icon: "🧳", text: "Equipaje Carry On 10kg incluido" },
            { icon: "📍", text: "Destinos: Salta, Cataratas, Ushuaia y San Martín de los Andes" },
            { icon: "📅", text: "Promoción válida del 24 al 30 de Agosto" }
        ],
        itinerary: `
            <p>✈️ <strong>¡TRAVEL SALE 2026 JETSMART - PROMO 4X3!</strong></p>
            <p>Del 24 al 30 de Agosto aprovechá la super promo <strong>4x3 (Viajan 4 Pagan 3)</strong> en destinos aéreos seleccionados volando con <strong>JetSMART</strong>.</p>
            <br>
            <p><strong>DESTINOS Y TARIFAS DESTACADAS:</strong></p>
            <ul>
                <li>📍 <strong>Salta (4 Días / 3 Noches):</strong> $659.990</li>
                <li>📍 <strong>Salta (5 Días / 4 Noches):</strong> $779.990</li>
                <li>📍 <strong>Cataratas del Iguazú (4 Días / 3 Noches):</strong> $699.990 / $749.990</li>
                <li>📍 <strong>San Martín de los Andes (4 Días / 3 Noches):</strong> $699.990</li>
                <li>📍 <strong>Ushuaia (5 Días / 4 Noches):</strong> $849.990</li>
                <li>📍 <strong>Bariloche (4 Días / 3 Noches):</strong> $549.990</li>
            </ul>
        `,
        importantNotes: `
            <p>- Promoción válida únicamente para compras del 24 al 30 de Agosto.</p>
            <p>- Promo 4x3: viajan 4 personas, pagan 3.</p>
            <p>- Vuelos con JetSMART con equipaje carry on de 10kg incluido.</p>
            <p>- Cupos aéreos limitados por fecha.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salidas aéreas desde Aeroparque Jorge Newbery / Ezeiza.</li>
            </ul>
        `,
        availability: [
            { date: "Del 24 al 30 de Agosto", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "bariloche-jetsmart-travel-sale",
        title: "Bariloche JetSMART Travel Sale",
        season: "jetsmart",
        price: "$549.990",
        originalPrice: "$729.990",
        image: "25_5/24_30_agosto_jetsmart/bariloche.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en AEREO/Bariloche/a9092de1-4c02-4275-8bce-981f7c2bebd8.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Mayo-Junio/BARILOCHE AÉREO VEND MAYO_ JUNIO.pdf",
        features: [
            { icon: "✈️", text: "Aéreos ida y vuelta (Vuelo con JetSMART)" },
            { icon: "🚐", text: "Traslados in / out incluidos" },
            { icon: "🏨", text: "Hotel Internacional o Similar (4 Días / 3 Noches)" },
            { icon: "🍽️", text: "Media Pensión incluida" },
            { icon: "🧳", text: "Carry On 10kg incluido" },
            { icon: "📅", text: "Salida: 24 de Septiembre" },
            { icon: "💳", text: "6 cuotas de $130.664 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>✈️ <strong>¡TRAVEL SALE 2026 EN BARILOCHE CON JETSMART!</strong></p>
            <p>Disfrutá de la belleza incomparable de San Carlos de Bariloche con vuelos directos JetSMART a un precio promocional de <strong>$549.990</strong> (Antes $729.990).</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>✈️ <strong>Vuelos:</strong> Pasajes aéreos ida y vuelta con JetSMART + Carry On de 10kg.</li>
                <li>🚐 <strong>Traslados:</strong> Aeropuerto / Hotel / Aeropuerto en destino.</li>
                <li>🏨 <strong>Alojamiento:</strong> 4 Días / 3 Noches en Hotel Internacional o similar.</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>📅 <strong>Salida confirmada:</strong> 24 de Septiembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $130.664.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 24 de Septiembre.</p>
            <p>- Tarifa Travel Sale: $549.990 (Antes $729.990).</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $130.664.</p>
            <p>- Cupos aéreos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salida desde Aeroparque / Ezeiza con JetSMART.</li>
            </ul>
        `,
        availability: [
            { date: "24 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "salta-jetsmart-4x3-travel-sale",
        title: "Salta JetSMART 4x3 Travel Sale",
        season: "jetsmart",
        price: "$659.990",
        image: "25_5/24_30_agosto_jetsmart/salta.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Salta/7c10e094-b113-4306-b6b3-12c7eeee0e7f.MP4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Mayo-Junio/SALTA AÉREO VEND JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 4X3! Viajan 4 pagan 3" },
            { icon: "✈️", text: "Aéreos ida y vuelta (Vuelo con JetSMART)" },
            { icon: "🚐", text: "Traslados in / out incluidos" },
            { icon: "🏨", text: "Hotel Inti Raymi" },
            { icon: "🍽️", text: "Media Pensión incluida" },
            { icon: "🧳", text: "Carry On 10kg incluido" },
            { icon: "📅", text: "Salidas: 13 Oct, 10 Nov (4D/3N: $659.990) y 05 Dic Feriado (5D/4N: $779.990)" },
            { icon: "💳", text: "6 cuotas de $156.331 / $184.331" }
        ],
        itinerary: `
            <p>✈️ <strong>¡SALTA LA LINDA CON JETSMART - PROMO 4X3!</strong></p>
            <p>Viajá en grupo o familia con la imperdible promo <strong>4x3 (Viajan 4 Pagan 3)</strong> hacia el norte argentino con vuelos directos JetSMART.</p>
            <br>
            <p><strong>OPCIONES DE VIAJE:</strong></p>
            <ul>
                <li>📅 <strong>13 de Octubre & 10 de Noviembre:</strong> 4 Días / 3 Noches por <strong>$659.990</strong> (6 cuotas de $156.331).</li>
                <li>📅 <strong>05 de Diciembre (Feriado):</strong> 5 Días / 4 Noches por <strong>$779.990</strong> (6 cuotas de $184.331).</li>
            </ul>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>✈️ Pasajes aéreos con JetSMART + Carry on 10kg.</li>
                <li>🚐 Traslados aeropuerto / hotel / aeropuerto.</li>
                <li>🏨 Hotel Inti Raymi.</li>
                <li>🍽️ Media Pensión.</li>
            </ul>
        `,
        importantNotes: `
            <p>- Promo 4x3: Viajan 4 pagan 3.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Salida Feriado 05/12: 5 Días / 4 Noches ($779.990).</p>
            <p>- Salidas Octubre y Noviembre: 4 Días / 3 Noches ($659.990).</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salida desde Aeroparque / Ezeiza con JetSMART.</li>
            </ul>
        `,
        availability: [
            { date: "13 de Octubre (4D/3N)", status: "DISPONIBLE", color: "🟢" },
            { date: "10 de Noviembre (4D/3N)", status: "DISPONIBLE", color: "🟢" },
            { date: "05 de Diciembre Feriado (5D/4N)", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "salta-jetsmart-promo-septiembre",
        title: "Salta JetSMART Promo Septiembre",
        season: "jetsmart",
        price: "$525.990",
        originalPrice: "$699.990",
        image: "25_5/24_30_agosto_jetsmart/salta2.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Salta/7c10e094-b113-4306-b6b3-12c7eeee0e7f.MP4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Mayo-Junio/SALTA AÉREO VEND JUNIO 2026.pdf",
        features: [
            { icon: "✈️", text: "Aéreos ida y vuelta (Vuelo con JetSMART)" },
            { icon: "🚐", text: "Traslados in / out incluidos" },
            { icon: "🏨", text: "Hotel Inti Raymi (4 Días / 3 Noches)" },
            { icon: "🍽️", text: "Media Pensión incluida" },
            { icon: "🧳", text: "Carry On 10kg incluido" },
            { icon: "📅", text: "Salida: 26 de Septiembre" },
            { icon: "💳", text: "6 cuotas de $125.064 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>✈️ <strong>¡ESPECIAL SEPTIEMBRE EN SALTA CON JETSMART!</strong></p>
            <p>Aprovechá la tarifa super rebajada de <strong>$525.990</strong> (Antes $699.990) con salida especial el 26 de Septiembre.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>✈️ <strong>Vuelos:</strong> Pasajes ida y vuelta con JetSMART + Carry on 10kg.</li>
                <li>🚐 <strong>Traslados:</strong> Aeropuerto / Hotel / Aeropuerto.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Inti Raymi (4 Días / 3 Noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>📅 <strong>Salida confirmada:</strong> 26 de Septiembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $125.064.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 26 de Septiembre.</p>
            <p>- Tarifa Promo: $525.990 (Antes $699.990).</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $125.064.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salida desde Aeroparque / Ezeiza con JetSMART.</li>
            </ul>
        `,
        availability: [
            { date: "26 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "san-martin-de-los-andes-jetsmart-4x3-travel-sale",
        title: "San Martín de los Andes JetSMART 4x3 Travel Sale",
        season: "jetsmart",
        price: "$699.990",
        image: "25_5/24_30_agosto_jetsmart/san_martin_los_andes.jpeg",
        features: [
            { icon: "💥", text: "¡PROMO 4X3! Viajan 4 pagan 3" },
            { icon: "✈️", text: "Aéreos ida y vuelta (Vuelo con JetSMART)" },
            { icon: "🚐", text: "Traslados in / out incluidos" },
            { icon: "🏨", text: "Hotel Turismo Patagonia (4 Días / 3 Noches)" },
            { icon: "☕", text: "Desayuno incluido" },
            { icon: "🧳", text: "Carry On 10kg incluido" },
            { icon: "📅", text: "Salida: 09 de Diciembre" },
            { icon: "💳", text: "6 cuotas de $165.665 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>✈️ <strong>¡SAN MARTÍN DE LOS ANDES CON JETSMART - PROMO 4X3!</strong></p>
            <p>Viví los paisajes cordilleranos y lagos cristalinos con la promo <strong>4x3 (Viajan 4 Pagan 3)</strong> por <strong>$699.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>✈️ <strong>Vuelos:</strong> Pasajes aéreos con JetSMART + Carry on 10kg.</li>
                <li>🚐 <strong>Traslados:</strong> Aeropuerto / Hotel / Aeropuerto.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Turismo Patagonia (4 Días / 3 Noches).</li>
                <li>☕ <strong>Régimen:</strong> Desayuno buffet.</li>
                <li>📅 <strong>Salida confirmada:</strong> 09 de Diciembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $165.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 09 de Diciembre.</p>
            <p>- Promo 4x3: Viajan 4 pagan 3.</p>
            <p>- Tarifa por persona: $699.990 (+ $10.000 Gastos Adm.).</p>
            <p>- Financiación en 6 cuotas de $165.665.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salida desde Aeroparque / Ezeiza con JetSMART.</li>
            </ul>
        `,
        availability: [
            { date: "09 de Diciembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "ushuaia-jetsmart-4x3-travel-sale",
        title: "Ushuaia JetSMART 4x3 Travel Sale",
        season: "jetsmart",
        price: "$849.990",
        image: "25_5/24_30_agosto_jetsmart/ushuaia.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en AEREO/Ushuaia/VIDEO-2025-09-27-13-51-23.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Marzo-Abril/USHUAIA (vend MAR Y ABR).pdf",
        features: [
            { icon: "💥", text: "¡PROMO 4X3! Viajan 4 pagan 3" },
            { icon: "✈️", text: "Aéreos ida y vuelta (Vuelo con JetSMART)" },
            { icon: "🚐", text: "Traslados in / out incluidos" },
            { icon: "🏨", text: "Hotel Les Eclaireurs (5 Días / 4 Noches)" },
            { icon: "☕", text: "Desayuno incluido" },
            { icon: "🧳", text: "Carry On 10kg incluido" },
            { icon: "📅", text: "Salidas: 26 de Octubre y 13 de Noviembre" },
            { icon: "💳", text: "6 cuotas de $200.665 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>✈️ <strong>¡USHUAIA FIN DEL MUNDO CON JETSMART - PROMO 4X3!</strong></p>
            <p>Descubrí los paisajes más australes del planeta con la promoción <strong>4x3 (Viajan 4 Pagan 3)</strong> por <strong>$849.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>✈️ <strong>Vuelos:</strong> Pasajes aéreos con JetSMART + Carry on 10kg.</li>
                <li>🚐 <strong>Traslados:</strong> Aeropuerto / Hotel / Aeropuerto.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Les Eclaireurs (5 Días / 4 Noches).</li>
                <li>☕ <strong>Régimen:</strong> Desayuno buffet.</li>
                <li>📅 <strong>Salidas confirmadas:</strong> 26 de Octubre y 13 de Noviembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $200.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> 26 de Octubre y 13 de Noviembre.</p>
            <p>- Promo 4x3: Viajan 4 pagan 3.</p>
            <p>- Tarifa por persona: $849.990 (+ $10.000 Gastos Adm.).</p>
            <p>- Financiación en 6 cuotas de $200.665.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salida desde Aeroparque / Ezeiza con JetSMART.</li>
            </ul>
        `,
        availability: [
            { date: "26 de Octubre", status: "DISPONIBLE", color: "🟢" },
            { date: "13 de Noviembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    // === TRAVEL SALE 2026 PROMO 3X2 (25_5) ===
    {
        id: "campo-la-herradura-travel-sale",
        title: "Campo La Herradura Travel Sale (3x2)",
        season: "travel-sale",
        price: "$99.990",
        image: "25_5/24_30_agosto/campo_herradura.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/La Herradura/03a7f75d-2038-48dd-b70f-8fca947fe86d.MP4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA HERRADURA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "☀️", text: "Programa Full Day (Día de campo)" },
            { icon: "🥩", text: "Desayuno, Almuerzo (Asado) y Merienda" },
            { icon: "🥤", text: "Bebidas sin alcohol incluidas" },
            { icon: "🐎", text: "Cabalgata y actividades incluidas" },
            { icon: "📅", text: "Salidas: Septiembre 06 y 27" },
            { icon: "💳", text: "6 cuotas de $25.665 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN CAMPO LA HERRADURA - PROMO 3X2!</strong></p>
            <p>Disfrutá de un día de campo completo con asado criollo, bebidas y cabalgatas con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por solo <strong>$99.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>☀️ <strong>Modalidad:</strong> Full Day campestre.</li>
                <li>🥩 <strong>Gastronomía:</strong> Recepción/desayuno, almuerzo con asado criollo, bebidas sin alcohol libres y merienda.</li>
                <li>🐎 <strong>Actividades:</strong> Cabalgata guiada y recreación en el predio.</li>
                <li>📅 <strong>Salidas:</strong> Septiembre 06 y 27.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $25.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Septiembre 06 y 27.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $25.665.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "06 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "27 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "cataratas-del-iguazu-travel-sale",
        title: "Cataratas del Iguazú Travel Sale (3x2)",
        season: "travel-sale",
        price: "$359.990",
        image: "25_5/24_30_agosto/cataratas_iguazu.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Iguazu/VIDEO-2025-10-03-12-25-14.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/CATARATAS DEL IGUAZÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Lilian con Piscina (6 Días / 3 Noches)" },
            { icon: "☕", text: "Desayuno incluido" },
            { icon: "🌊", text: "Excursiones: Ruinas San Ignacio, Minas Wanda y Cataratas Argentinas" },
            { icon: "📅", text: "Salidas: Septiembre 06 y 27" },
            { icon: "💳", text: "6 cuotas de $86.331 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN CATARATAS DEL IGUAZÚ - PROMO 3X2!</strong></p>
            <p>Maravilla del Mundo a un precio único con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$359.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> 6 Días / 3 Noches en Hotel Lilian con piscina.</li>
                <li>☕ <strong>Régimen:</strong> Desayuno.</li>
                <li>🌊 <strong>Excursiones:</strong> Traslados a Ruinas de San Ignacio, Minas de Wanda y Parque Nacional Iguazú (lado argentino).</li>
                <li>📅 <strong>Salidas:</strong> Septiembre 06 y 27.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $86.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Septiembre 06 y 27.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $86.331.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "06 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "27 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "gualeguaychu-travel-sale",
        title: "Gualeguaychú Travel Sale (3x2)",
        season: "travel-sale",
        price: "$139.990",
        image: "25_5/24_30_agosto/gualeguaychu.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Gualeguaychu/VIDEO-2025-12-19-13-34-16.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUALEGUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Los Robles (2 Días / 1 Noche)" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🏊", text: "Traslado a Termas del Guaychú incluido" },
            { icon: "📅", text: "Salidas: Viernes 25 Sep ($139.990) y Sábado 26 Sep ($149.990)" },
            { icon: "💳", text: "6 cuotas desde $34.998 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN GUALEGUAYCHÚ - PROMO 3X2!</strong></p>
            <p>Escapada termal y relax en Entre Ríos con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong>.</p>
            <br>
            <p><strong>OPCIONES DE SALIDA:</strong></p>
            <ul>
                <li>📅 <strong>Salida Viernes 25 de Septiembre:</strong> $139.990 (6 cuotas de $34.998).</li>
                <li>📅 <strong>Salida Sábado 26 de Septiembre:</strong> $149.990 (6 cuotas de $37.331).</li>
            </ul>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 Bus ida y vuelta con coordinador.</li>
                <li>🏨 Hotel Los Robles (2 Días / 1 Noche).</li>
                <li>🍽️ Media Pensión.</li>
                <li>🏊 Traslado a Termas del Guaychú.</li>
            </ul>
        `,
        importantNotes: `
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas fijas.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "Viernes 25 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "Sábado 26 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "mendoza-travel-sale",
        title: "Mendoza Travel Sale (3x2)",
        season: "travel-sale",
        price: "$299.990",
        image: "25_5/24_30_agosto/mendoza.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mendoza/VIDEO-2025-10-20-14-32-50.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MENDOZA X 3 NTS VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Geminis (6 Días / 3 Noches)" },
            { icon: "☕", text: "Desayuno incluido" },
            { icon: "♨️", text: "Traslado a Termas de Cacheuta incluido" },
            { icon: "📅", text: "Salida: 20 de Septiembre" },
            { icon: "💳", text: "6 cuotas de $72.331 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN MENDOZA - PROMO 3X2!</strong></p>
            <p>Tierra del sol y del buen vino con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por solo <strong>$299.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Geminis (6 Días / 3 Noches).</li>
                <li>☕ <strong>Régimen:</strong> Desayuno buffet.</li>
                <li>♨️ <strong>Excursión:</strong> Traslado incluido a Termas de Cacheuta.</li>
                <li>📅 <strong>Salida:</strong> 20 de Septiembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $72.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 20 de Septiembre.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $72.331.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "20 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "salta-travel-sale",
        title: "Salta Travel Sale (3x2)",
        season: "travel-sale",
        price: "$459.990",
        image: "25_5/24_30_agosto/salta.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Salta/VIDEO-2025-11-12-12-47-52.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SALTA X 4 NTS VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Inti Raymi (7 Días / 4 Noches)" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "⛰️", text: "Traslado a la Virgen del Cerro incluido" },
            { icon: "📅", text: "Salida: 21 de Septiembre" },
            { icon: "💳", text: "6 cuotas de $109.665 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN SALTA LA LINDA - PROMO 3X2!</strong></p>
            <p>Conocé el norte argentino con la promoción <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$459.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Inti Raymi (7 Días / 4 Noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>⛰️ <strong>Excursión:</strong> Traslado incluido a la Virgen del Cerro.</li>
                <li>📅 <strong>Salida:</strong> 21 de Septiembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $109.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 21 de Septiembre.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $109.665.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "21 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "san-pedro-travel-sale",
        title: "San Pedro Travel Sale (3x2)",
        season: "travel-sale",
        price: "$109.990",
        image: "25_5/24_30_agosto/san_pedro.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/San Pedro/VIDEO-2025-11-13-12-01-23.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SAN PEDRO VEND ABRIL A JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "☀️", text: "Programa Full Day" },
            { icon: "🥩", text: "Almuerzo con Parrillada incluida" },
            { icon: "🏛️", text: "Visitas: Vuelta de Obligado, La Campiña y Ensaimadas" },
            { icon: "📅", text: "Salida: 27 de Septiembre" },
            { icon: "💳", text: "6 cuotas de $27.998 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN SAN PEDRO - PROMO 3X2!</strong></p>
            <p>Un día perfecto de parrillada, historia y sabores con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$109.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>☀️ <strong>Modalidad:</strong> Full Day completo.</li>
                <li>🥩 <strong>Gastronomía:</strong> Almuerzo completo con parrillada.</li>
                <li>🏛️ <strong>Visitas:</strong> Monumento Vuelta de Obligado, La Campiña de Mónica y César, y fábrica de ensaimadas.</li>
                <li>📅 <strong>Salida:</strong> 27 de Septiembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $27.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 27 de Septiembre.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $27.998.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "27 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "san-rafael-travel-sale",
        title: "San Rafael Travel Sale (3x2)",
        season: "travel-sale",
        price: "$359.990",
        image: "25_5/24_30_agosto/san_rafael.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/San Rafael/VIDEO-2025-11-04-13-03-48.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SAN RAFAEL X 3 NTS SEGUNDA QUINCENA MAYO A JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Puesta del Sol (6 Días / 3 Noches)" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "📅", text: "Salida: 23 de Septiembre" },
            { icon: "💳", text: "6 cuotas de $86.331 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN SAN RAFAEL - PROMO 3X2!</strong></p>
            <p>Cañón del Atuel, bodegas y paisajes mendocinos inolvidables con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$359.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta de última generación.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Puesta del Sol (6 Días / 3 Noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>🙋‍♂️ <strong>Coordinación:</strong> Guía/coordinador permanente.</li>
                <li>📅 <strong>Salida:</strong> 23 de Septiembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $86.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 23 de Septiembre.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $86.331.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "23 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "tandil-travel-sale",
        title: "Tandil Travel Sale (3x2)",
        season: "travel-sale",
        price: "$219.990",
        image: "25_5/24_30_agosto/tandil.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Tandil/VIDEO-2025-09-26-13-43-30.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/TANDIL X1 NT VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel El Turista (2 Días / 1 Noche)" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🧀", text: "Paseos serranos y sabores tradicionales" },
            { icon: "📅", text: "Salidas: Septiembre 19 y 26" },
            { icon: "💳", text: "6 cuotas de $53.665 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN TANDIL - PROMO 3X2!</strong></p>
            <p>Sierras, quesos y embutidos con la imperdible promoción <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$219.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel El Turista (2 Días / 1 Noche).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>⛰️ <strong>Actividades:</strong> Paseos por las sierras de Tandil.</li>
                <li>📅 <strong>Salidas:</strong> Septiembre 19 y 26.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $53.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Septiembre 19 y 26.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $53.665.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "19 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "26 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "termas-del-guaychu-travel-sale",
        title: "Termas del Guaychú Travel Sale (3x2)",
        season: "travel-sale",
        price: "$99.990",
        image: "25_5/24_30_agosto/termas_guaychu.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Termas de Guaychu/VIDEO-2025-09-30-16-56-07.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/GUAYCHÚ VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "☀️", text: "Programa Full Day" },
            { icon: "🎟️", text: "Entrada incluida al Complejo Termal" },
            { icon: "📅", text: "Salidas: Septiembre 06 y 20" },
            { icon: "💳", text: "6 cuotas de $25.665 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN TERMAS DEL GUAYCHÚ - PROMO 3X2!</strong></p>
            <p>Un día entero de spa, aguas termales y desconexión total con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por solo <strong>$99.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>☀️ <strong>Modalidad:</strong> Full Day termal.</li>
                <li>🎟️ <strong>Entrada:</strong> Entrada general incluida al complejo termal.</li>
                <li>📅 <strong>Salidas:</strong> Septiembre 06 y 20.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $25.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Septiembre 06 y 20.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $25.665.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "06 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "20 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "villa-carlos-paz-travel-sale",
        title: "Villa Carlos Paz Travel Sale (3x2)",
        season: "travel-sale",
        price: "$289.990",
        image: "25_5/24_30_agosto/villa_carlos_paz.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Villa Carlos Paz/VIDEO-2025-10-20-13-56-05.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/VILLA CARLOS PAZ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏊", text: "Hotel Palmas del Lago con Piscina Climatizada (5 Días / 3 Noches)" },
            { icon: "🍽️", text: "Pensión Completa" },
            { icon: "📅", text: "Salidas: Septiembre 06 y 13" },
            { icon: "💳", text: "6 cuotas de $69.998 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN VILLA CARLOS PAZ - PROMO 3X2!</strong></p>
            <p>Disfrutá de las sierras cordobesas con Pensión Completa y piscina climatizada con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$289.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Palmas del Lago con piscina climatizada (5 Días / 3 Noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Pensión Completa.</li>
                <li>📅 <strong>Salidas:</strong> Septiembre 06 y 13.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $69.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Septiembre 06 y 13.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $69.998.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "06 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "13 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "villa-de-merlo-travel-sale",
        title: "Villa de Merlo Travel Sale (3x2)",
        season: "travel-sale",
        price: "$269.990",
        image: "25_5/24_30_agosto/villa_merlo.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Villa de Merlo/VIDEO-2025-10-30-10-10-15.mp4",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/FERIADO 25 DE MAYO/MERLO VEND FERIADO MAYO 2026.pdf",
        features: [
            { icon: "💥", text: "¡PROMO 3X2! Viajan 3 Pagan 2" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Virginia Spa con Piscina Climatizada (5 Días / 3 Noches)" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🌄", text: "Microclima y paisajes de San Luis" },
            { icon: "📅", text: "Salidas: Septiembre 16 y 22" },
            { icon: "💳", text: "6 cuotas de $65.331 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>🔥 <strong>¡TRAVEL SALE 2026 EN VILLA DE MERLO - PROMO 3X2!</strong></p>
            <p>El tercer microclima del mundo te espera con Hotel Spa y piscina climatizada con la promo <strong>3x2 (Viajan 3 Pagan 2)</strong> por <strong>$269.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinador permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Virginia Spa con piscina climatizada (5 Días / 3 Noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>🌄 <strong>Entorno:</strong> Sierras y microclima puntano.</li>
                <li>📅 <strong>Salidas:</strong> Septiembre 16 y 22.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $65.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Septiembre 16 y 22.</p>
            <p>- Promo 3x2: Viajan 3 pagan 2.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $65.331.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "16 de Septiembre", status: "DISPONIBLE", color: "🟢" },
            { date: "22 de Septiembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },

    {
        id: "aimogasta-super-sale",
        title: "Aimogasta Super Sale",
        season: "super-sale",
        price: "$199.990",
        originalPrice: "$389.990",
        image: "nuevo19_8/aimogasta.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/AIMOGASTA VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Aimogasta/VIDEO-2025-10-29-12-12-11.mp4",
        features: [
            { icon: "🔥", text: "¡SUPER SALE TRAVELERO! Antes $389.990" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Gran Arauco (6 Días / 3 Noches)" },
            { icon: "📅", text: "Salida: 20 de Agosto" },
            { icon: "💳", text: "6 cuotas de $48.998" }
        ],
        itinerary: `
            <p>🔥 <strong>¡SUPER SALE TRAVELERO EN AIMOGASTA!</strong></p>
            <p>Aprovechá esta super oferta exclusiva para viajar a Aimogasta a un precio imperdible de <strong>$199.990</strong> (Precio regular: $389.990).</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Gran Arauco (6 días / 3 noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>📅 <strong>Salida confirmada:</strong> 20 de Agosto.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $48.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 20 de Agosto.</p>
            <p>- Tarifa Super Sale: $199.990 (Antes $389.990).</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $48.998.</p>
            <p>- Cupos limitados hasta agotar disponibilidad.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "20 de Agosto", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "salta-super-sale",
        title: "Salta Super Sale",
        season: "super-sale",
        price: "$199.990",
        originalPrice: "$439.990",
        image: "nuevo19_8/salta.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SALTA X 4 NTS VEND MARZO A JUNIO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Salta/7c10e094-b113-4306-b6b3-12c7eeee0e7f.MP4",
        features: [
            { icon: "🔥", text: "¡SUPER SALE TRAVELERO! Antes $439.990" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "⛰️", text: "Traslado incluido a la Virgen del Cerro" },
            { icon: "🏨", text: "Hotel Inti Raymi (7 Días / 4 Noches)" },
            { icon: "📅", text: "Salida: 20 de Agosto" },
            { icon: "💳", text: "6 cuotas de $48.998" }
        ],
        itinerary: `
            <p>🔥 <strong>¡SUPER SALE TRAVELERO EN SALTA LA LINDA!</strong></p>
            <p>Viví la magia del norte argentino con una tarifa promocional única de <strong>$199.990</strong> (Precio regular: $439.990).</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Inti Raymi (7 días / 4 noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>⛰️ <strong>Excursión:</strong> Traslado incluido a la Virgen del Cerro.</li>
                <li>📅 <strong>Salida confirmada:</strong> 20 de Agosto.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $48.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 20 de Agosto.</p>
            <p>- Tarifa Super Sale: $199.990 (Antes $439.990).</p>
            <p>- Traslado incluido a la Virgen del Cerro.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $48.998.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "20 de Agosto", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "termas-de-rio-hondo-super-sale",
        title: "Termas de Río Hondo Super Sale",
        season: "super-sale",
        price: "$289.990",
        originalPrice: "$479.990",
        image: "nuevo19_8/terma_rio_hondo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/TERMAS DE RIO HONDO VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Termas de Rio Hondo/81881e9d-6144-41d9-b8c1-6cf2551f3964.MP4",
        features: [
            { icon: "🔥", text: "¡SUPER SALE TRAVELERO! Antes $479.990" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Pensión Completa" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏊", text: "Hotel Internacional con Piscina Termal (7 Días / 4 Noches)" },
            { icon: "📅", text: "Salida: 23 de Agosto" },
            { icon: "💳", text: "6 cuotas de $69.998" }
        ],
        itinerary: `
            <p>🔥 <strong>¡SUPER SALE TRAVELERO EN TERMAS DE RÍO HONDO!</strong></p>
            <p>Relax total y aguas termales con Pensión Completa por solo <strong>$289.990</strong> (Precio regular: $479.990).</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Internacional con Piscina Termal (7 días / 4 noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Pensión Completa.</li>
                <li>📅 <strong>Salida confirmada:</strong> 23 de Agosto.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $69.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 23 de Agosto.</p>
            <p>- Tarifa Super Sale: $289.990 (Antes $479.990).</p>
            <p>- Hotel con piscina termal y pensión completa.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $69.998.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "23 de Agosto", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "villa-carlos-paz-super-sale",
        title: "Villa Carlos Paz Super Sale",
        season: "super-sale",
        price: "$179.990",
        originalPrice: "$269.990",
        image: "nuevo19_8/villa_carlos_paz.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/VILLA CARLOS PAZ VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Villa Carlos Paz/5ff7eaf1-b05d-4066-9692-71492a95a83c.mp4",
        features: [
            { icon: "🔥", text: "¡SUPER SALE TRAVELERO! Antes $269.990" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Pensión Completa" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏊", text: "Hotel Palmas del Lago con Piscina Climatizada (5 Días / 3 Noches)" },
            { icon: "📅", text: "Salida: 22 de Agosto" },
            { icon: "💳", text: "6 cuotas de $44.331" }
        ],
        itinerary: `
            <p>🔥 <strong>¡SUPER SALE TRAVELERO EN VILLA CARLOS PAZ!</strong></p>
            <p>Disfrutá de las sierras de Córdoba con Pensión Completa en Hotel Palmas del Lago por <strong>$179.990</strong> (Precio regular: $269.990).</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Palmas del Lago con piscina climatizada (5 días / 3 noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Pensión Completa.</li>
                <li>📅 <strong>Salida confirmada:</strong> 22 de Agosto.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $44.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 22 de Agosto.</p>
            <p>- Tarifa Super Sale: $179.990 (Antes $269.990).</p>
            <p>- Hotel con piscina climatizada y pensión completa.</p>
            <p>- Gastos administrativos: $10.000.</p>
            <p>- Financiación en 6 cuotas de $44.331.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "22 de Agosto", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "campo-la-herradura-dia-del-maestro",
        title: "Campo La Herradura Día del Maestro",
        season: "maestro",
        price: "$99.990",
        image: "15_8/campo_herradura.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA HERRADURA VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/La Herradura/03a7f75d-2038-48dd-b70f-8fca947fe86d.MP4",
        features: [
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "☀️", text: "Programa Full Day (Día de Campo)" },
            { icon: "🥩", text: "Desayuno, Almuerzo (Asado) y Merienda" },
            { icon: "🥤", text: "Bebidas sin alcohol incluidas" },
            { icon: "🐎", text: "Cabalgatas y actividades campestres" },
            { icon: "💳", text: "6 cuotas fijas de $23.331" }
        ],
        itinerary: `
            <p>✨ <strong>¡Especial Día del Maestro en Campo La Herradura!</strong></p>
            <p>Vení a disfrutar de un día de campo completo e inolvidable para celebrar el Día del Maestro rodeado de naturaleza y la mejor gastronomía criolla.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>☀️ <strong>Modalidad:</strong> Full Day (Día de campo).</li>
                <li>🥩 <strong>Gastronomía completa:</strong> Recepción/desayuno, almuerzo con asado criollo completo, bebidas sin alcohol libres y merienda.</li>
                <li>🐎 <strong>Actividades:</strong> Paseos a caballo, cabalgatas guiadas y uso de todas las instalaciones del predio.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $23.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas Septiembre:</strong> 11 de Septiembre (AGOTADO) | 13 de Septiembre (¡ÚLTIMOS LUGARES!).</p>
            <p>- Tarifa especial Día del Maestro por persona: $99.990.</p>
            <p>- Financiación disponible en 6 cuotas de $23.331.</p>
            <p>- Cupos limitados. Reservá con anticipación.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "11 de Septiembre", status: "AGOTADO", color: "🔴" },
            { date: "13 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "mar-del-plata-dia-del-maestro",
        title: "Mar del Plata Día del Maestro",
        season: "maestro",
        price: "$179.990",
        image: "15_8/mar_plata.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MAR DEL PLATA X 2NTS VEND MARZO A JUNIO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mar del Plata/VIDEO-2026-03-18-15-35-35.mp4",
        features: [
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "3 Días / 2 Noches en Hotel Nuevo Horizonte" },
            { icon: "☕", text: "Desayuno incluido" },
            { icon: "🌊", text: "Escapada especial a la costa" },
            { icon: "💳", text: "6 cuotas de $44.331 (+ $10.000 Gastos Adm.)" }
        ],
        itinerary: `
            <p>✨ <strong>¡Especial Día del Maestro en Mar del Plata!</strong></p>
            <p>Disfrutá de una hermosa escapada frente al mar en 'La Feliz' para celebrar el Día del Maestro como te merecés.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta de última generación.</li>
                <li>🏨 <strong>Alojamiento:</strong> 3 Días / 2 Noches en Hotel Nuevo Horizonte.</li>
                <li>☕ <strong>Régimen:</strong> Desayuno buffet incluido.</li>
                <li>🙋‍♂️ <strong>Coordinación:</strong> Coordinador permanente durante todo el itinerario.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $44.331 (Gastos Adm. $10.000).</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida Septiembre:</strong> 11 de Septiembre (¡ÚLTIMOS LUGARES!).</p>
            <p>- Tarifa especial Día del Maestro por persona: $179.990 (+ $10.000 Gastos Adm.).</p>
            <p>- Financiación disponible en 6 cuotas de $44.331.</p>
            <p>- Cupos muy reducidos.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "11 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "san-pedro-dia-del-maestro",
        title: "San Pedro Día del Maestro",
        season: "maestro",
        price: "$109.990",
        image: "15_8/san_pedro.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN PEDRO VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/San Pedro/VIDEO-2025-11-13-12-01-23.mp4",
        features: [
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "☀️", text: "Programa Full Day" },
            { icon: "🥩", text: "Almuerzo con Parrillada incluida" },
            { icon: "🏛️", text: "Visita Vuelta de Obligado" },
            { icon: "🍊", text: "Visita La Campiña de Mónica y César" },
            { icon: "🥐", text: "Visita fábrica de Ensaimadas" },
            { icon: "💳", text: "6 cuotas de $25.665" }
        ],
        itinerary: `
            <p>✨ <strong>¡Especial Día del Maestro en San Pedro!</strong></p>
            <p>Vení a pasar un día maravilloso junto al río Paraná, descubriendo la historia, paisajes y la deliciosa gastronomía sampedrina.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>☀️ <strong>Modalidad:</strong> Full Day.</li>
                <li>🥩 <strong>Gastronomía:</strong> Almuerzo con auténtica Parrillada incluida.</li>
                <li>🏛️ <strong>Excursiones y Paseos:</strong> Visita al Monumento Histórico Vuelta de Obligado, visita guiada a La Campiña (de Mónica y César) y visita con degustación a fábrica tradicional de Ensaimadas.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $25.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas Septiembre:</strong> 11 de Septiembre (¡ÚLTIMOS LUGARES!) | 13 de Septiembre (¡ÚLTIMOS LUGARES!).</p>
            <p>- Tarifa especial Día del Maestro por persona: $109.990.</p>
            <p>- Financiación disponible en 6 cuotas de $25.665.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "11 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" },
            { date: "13 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "termas-de-guaychu-dia-del-maestro",
        title: "Termas de Guaychú Día del Maestro",
        season: "maestro",
        price: "$99.990",
        image: "15_8/termas_guaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Termas de Guaychu/4e75b42e-ab5d-46b3-a476-ae538638992b.MP4",
        features: [
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "☀️", text: "Programa Full Day" },
            { icon: "🎟️", text: "Entrada Incluida al Complejo Termal" },
            { icon: "🏊‍♂️", text: "Piscinas termales cubiertas y al aire libre" },
            { icon: "🌿", text: "Naturaleza, relax y recreación" },
            { icon: "💳", text: "6 cuotas de $23.331" }
        ],
        itinerary: `
            <p>✨ <strong>¡Especial Día del Maestro en Termas de Guaychú!</strong></p>
            <p>Regalate un día de descanso total, relax y diversión en las reconocidas aguas termales de Guaychú (Entre Ríos).</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>☀️ <strong>Modalidad:</strong> Full Day Termal.</li>
                <li>🎟️ <strong>Entrada al complejo:</strong> Entrada general 100% incluida a Termas de Guaychú.</li>
                <li>🏊‍♂️ <strong>Instalaciones:</strong> Acceso a piscinas de aguas termales, parques, áreas de sombra y descanso.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $23.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas Septiembre:</strong> 11 de Septiembre (AGOTADO) | 13 de Septiembre (¡ÚLTIMOS LUGARES!).</p>
            <p>- Tarifa especial Día del Maestro por persona: $99.990.</p>
            <p>- Financiación disponible en 6 cuotas de $23.331.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "11 de Septiembre", status: "AGOTADO", color: "🔴" },
            { date: "13 de Septiembre", status: "POCO DISPONIBLE", color: "🟡" }
        ]
    },
    {
        id: "bariloche-agosto",
        title: "Bariloche Nieve Agosto (Salida 25/08)",
        season: "invierno",
        price: "Consultar",
        image: "8_8/bariloche.jpeg",
        pdf: "8_8/programa_viaje.jpeg",
        video: "8_8/video.mp4",
        features: [
            { icon: "", text: "Vuelo Aéreo Ida y Vuelta" },
            { icon: "", text: "Salida Especial: 25 de Agosto (25/08)" },
            { icon: "", text: "Nieve en Bariloche a mejor precio" },
            { icon: "", text: "¡Solo 10 lugares disponibles!" }
        ],
        itinerary: `
            <p>✨ <strong>¿Se quedaron con ganas de nieve?</strong></p>
            <p>Apurate con esta salida de Agosto a San Carlos de Bariloche donde no solo es más barato sino que aún hay mucha nieve!</p>
            <p><strong>BARILOCHE🍫❄️</strong></p>
            <ul>
                <li>🏷️ <strong>Salida:</strong> 25/08</li>
                <li>✈️ <strong>Transporte:</strong> Aéreo desde Buenos Aires</li>
                <li>⚠️ <strong>Disponibilidad:</strong> ¡Solo 10 lugares disponibles!</li>
            </ul>
            <br>
            <p>Consulte el programa de viaje detallado en el documento adjunto o visualízelo a continuación:</p>
            <p><img src="8_8/programa_viaje.jpeg" alt="Programa de Viaje Bariloche 25/08" style="max-width:100%; border-radius:12px; margin-top:15px; box-shadow:0 4px 12px rgba(0,0,0,0.15);"></p>
        `,
        importantNotes: `
            <p>- <strong>Salida confirmada:</strong> 25 de Agosto (25/08).</p>
            <p>- <strong>CUPOS MUY LIMITADOS:</strong> ¡Solo 10 lugares disponibles!</p>
            <p>- Salida promocional imperdible en temporada de nieve.</p>
            <p>- Consultá por medios de pago y financiación en cuotas fijas.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Salida en Aéreo desde Buenos Aires (Aeroparque / Ezeiza) con traslados in/out en destino.</li>
            </ul>
        `,
        availability: [
            { date: "Salida 25/08", status: "POCO DISPONIBLE", color: "" }
        ]
    },
    {
        id: "mar-de-ajo-primavera-3d-2n",
        title: "Mar de Ajó Primavera (3D / 2N)",
        season: "primavera",
        price: "$199.990",
        image: "22_8/mar_ajo.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mar de Ajo/09099a36-df10-4ba2-9c49-63e818bf3fa2.mp4",
        features: [
            { icon: "🌸", text: "¡Viajá en Primavera con TravelAr!" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Atlantic (A 30 mts del mar)" },
            { icon: "📅", text: "Salida: Diciembre 01-03 (3 Días / 2 Noches)" },
            { icon: "💳", text: "6 cuotas de $48.997" }
        ],
        itinerary: `
            <p>🌸 <strong>¡VIAJÁ EN PRIMAVERA A MAR DE AJÓ CON TRAVELAR!</strong></p>
            <p>Disfrutá de una escapada increíble a Mar de Ajó junto al mar con todo resuelto por <strong>$199.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Atlantic (a sólo 30 metros del mar - 3 días / 2 noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>📅 <strong>Salida confirmada:</strong> Diciembre 01 al 03.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $48.997.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> Diciembre 01-03.</p>
            <p>- <strong>Duración:</strong> 3 Días / 2 Noches.</p>
            <p>- <strong>Tarifa:</strong> $199.990 por persona.</p>
            <p>- <strong>Gastos administrativos:</strong> $10.000.</p>
            <p>- <strong>Financiación:</strong> 6 cuotas de $48.997.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "Diciembre 01-03", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "mar-de-ajo-primavera-2d-1n",
        title: "Mar de Ajó Primavera (2D / 1N)",
        season: "primavera",
        price: "$169.990",
        image: "22_8/mar_ajo_2.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mar de Ajo/09099a36-df10-4ba2-9c49-63e818bf3fa2.mp4",
        features: [
            { icon: "🌸", text: "¡Viajá en Primavera con TravelAr!" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Media Pensión" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Atlantic (A 30 mts del mar)" },
            { icon: "📅", text: "Salida: Noviembre 07 (2 Días / 1 Noche)" },
            { icon: "💳", text: "6 cuotas de $41.998" }
        ],
        itinerary: `
            <p>🌸 <strong>¡ESCAPADA DE PRIMAVERA A MAR DE AJÓ CON TRAVELAR!</strong></p>
            <p>Aprovechá este fin de semana primaveral frente a la playa por <strong>$169.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Atlantic (a sólo 30 metros del mar - 2 días / 1 noche).</li>
                <li>🍽️ <strong>Régimen:</strong> Media Pensión.</li>
                <li>📅 <strong>Salida confirmada:</strong> 07 de Noviembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $41.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 07 de Noviembre.</p>
            <p>- <strong>Duración:</strong> 2 Días / 1 Noche.</p>
            <p>- <strong>Tarifa:</strong> $169.990 por persona.</p>
            <p>- <strong>Gastos administrativos:</strong> $10.000.</p>
            <p>- <strong>Financiación:</strong> 6 cuotas de $41.998.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "07 de Noviembre", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "mar-del-plata-primavera-3d-2n",
        title: "Mar del Plata Primavera (3D / 2N)",
        season: "primavera",
        price: "$199.990",
        image: "22_8/mar_del_plata.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MAR DEL PLATA X 2NTS VEND MARZO A JUNIO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mar del Plata/VIDEO-2026-03-18-15-35-35.mp4",
        features: [
            { icon: "🌸", text: "¡Viajá en Primavera con TravelAr!" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Pensión Completa" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Riazor (3 Días / 2 Noches)" },
            { icon: "📅", text: "Salidas: Diciembre 01 - 03 - 08" },
            { icon: "💳", text: "6 cuotas de $48.997" }
        ],
        itinerary: `
            <p>🌸 <strong>¡VIAJÁ EN PRIMAVERA A MAR DEL PLATA CON TRAVELAR!</strong></p>
            <p>Viví la ciudad feliz con pensión completa y la mejor atención en Hotel Riazor por <strong>$199.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Riazor (3 días / 2 noches).</li>
                <li>🍽️ <strong>Régimen:</strong> Pensión Completa.</li>
                <li>📅 <strong>Salidas confirmadas:</strong> Diciembre 01, 03 y 08.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $48.997.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> Diciembre 01, 03 y 08.</p>
            <p>- <strong>Duración:</strong> 3 Días / 2 Noches.</p>
            <p>- <strong>Tarifa:</strong> $199.990 por persona con Pensión Completa.</p>
            <p>- <strong>Gastos administrativos:</strong> $10.000.</p>
            <p>- <strong>Financiación:</strong> 6 cuotas de $48.997.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "01 de Diciembre", status: "DISPONIBLE", color: "🟢" },
            { date: "03 de Diciembre", status: "ÚLTIMOS LUGARES", color: "🟡" },
            { date: "08 de Diciembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "mar-del-plata-primavera-2d-1n",
        title: "Mar del Plata Primavera (2D / 1N)",
        season: "primavera",
        price: "$169.990",
        image: "22_8/mar_del_plata_2.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/MAR DEL PLATA X1 NT VEND MARZO A JUNIO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mar del Plata/VIDEO-2026-03-18-15-35-35.mp4",
        features: [
            { icon: "🌸", text: "¡Viajá en Primavera con TravelAr!" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "🍽️", text: "Pensión Completa" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Riazor (2 Días / 1 Noche)" },
            { icon: "📅", text: "Salida: Noviembre 07" },
            { icon: "💳", text: "6 cuotas de $41.998" }
        ],
        itinerary: `
            <p>🌸 <strong>¡ESCAPADA DE PRIMAVERA A MAR DEL PLATA CON TRAVELAR!</strong></p>
            <p>Disfrutá del mar en Mar del Plata con Pensión Completa por <strong>$169.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Riazor (2 días / 1 noche).</li>
                <li>🍽️ <strong>Régimen:</strong> Pensión Completa.</li>
                <li>📅 <strong>Salida confirmada:</strong> 07 de Noviembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $41.998.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 07 de Noviembre.</p>
            <p>- <strong>Duración:</strong> 2 Días / 1 Noche.</p>
            <p>- <strong>Tarifa:</strong> $169.990 por persona con Pensión Completa.</p>
            <p>- <strong>Gastos administrativos:</strong> $10.000.</p>
            <p>- <strong>Financiación:</strong> 6 cuotas de $41.998.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "07 de Noviembre", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "san-bernardo-primavera",
        title: "San Bernardo Primavera",
        season: "primavera",
        price: "$239.990",
        image: "22_8/san_bernardo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SAN BERNARDO VEND X 2 NTS MARZO.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/San Bernardo/425148a7-1c28-44ae-81d5-f4997dcda3d8.mp4",
        features: [
            { icon: "🌸", text: "¡Viajá en Primavera con TravelAr!" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "☕", text: "Desayuno y Merienda" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Majo (Frente al mar - 3 Días / 2 Noches)" },
            { icon: "📅", text: "Salidas: Noviembre 27 | Diciembre 11-13" },
            { icon: "💳", text: "6 cuotas de $58.331" }
        ],
        itinerary: `
            <p>🌸 <strong>¡VIAJÁ EN PRIMAVERA A SAN BERNARDO CON TRAVELAR!</strong></p>
            <p>Viví una estadía de ensueño frente al mar en Hotel Majo por <strong>$239.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Majo (Frente al mar - 3 días / 2 noches).</li>
                <li>☕ <strong>Régimen:</strong> Desayuno y Merienda incluidos.</li>
                <li>📅 <strong>Salidas confirmadas:</strong> 27 de Noviembre y 11 al 13 de Diciembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $58.331.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salidas:</strong> 27 de Noviembre y 11 al 13 de Diciembre.</p>
            <p>- <strong>Duración:</strong> 3 Días / 2 Noches.</p>
            <p>- <strong>Tarifa:</strong> $239.990 por persona.</p>
            <p>- <strong>Gastos administrativos:</strong> $10.000.</p>
            <p>- <strong>Financiación:</strong> 6 cuotas de $58.331.</p>
            <p>- Hotel Majo frente al mar.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "27 de Noviembre", status: "ÚLTIMOS LUGARES", color: "🟡" },
            { date: "11-13 de Diciembre", status: "DISPONIBLE", color: "🟢" }
        ]
    },
    {
        id: "santa-teresita-primavera",
        title: "Santa Teresita Primavera",
        season: "primavera",
        price: "$189.990",
        image: "22_8/santa_teresita.jpeg",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Santa Teresita/d9ed77d3-3006-497f-b8c2-d6df92bc76c9.mp4",
        features: [
            { icon: "🌸", text: "¡Viajá en Primavera con TravelAr!" },
            { icon: "🚌", text: "Bus Ida y Vuelta" },
            { icon: "☕", text: "Desayuno incluido" },
            { icon: "🙋‍♂️", text: "Coordinación Permanente" },
            { icon: "🏨", text: "Hotel Turista (3 Días / 2 Noches)" },
            { icon: "📅", text: "Salida: Diciembre 11-13" },
            { icon: "💳", text: "6 cuotas de $46.665" }
        ],
        itinerary: `
            <p>🌸 <strong>¡VIAJÁ EN PRIMAVERA A SANTA TERESITA CON TRAVELAR!</strong></p>
            <p>Disfrutá de la tranquilidad y las playas de Santa Teresita en Hotel Turista por <strong>$189.990</strong> por persona.</p>
            <br>
            <p><strong>INCLUYE:</strong></p>
            <ul>
                <li>🚌 <strong>Transporte:</strong> Bus ida y vuelta con coordinación permanente.</li>
                <li>🏨 <strong>Alojamiento:</strong> Hotel Turista (3 días / 2 noches).</li>
                <li>☕ <strong>Régimen:</strong> Desayuno incluido.</li>
                <li>📅 <strong>Salida confirmada:</strong> 11 al 13 de Diciembre.</li>
                <li>💳 <strong>Financiación:</strong> 6 cuotas de $46.665.</li>
            </ul>
        `,
        importantNotes: `
            <p>- <strong>Salida:</strong> 11 al 13 de Diciembre.</p>
            <p>- <strong>Duración:</strong> 3 Días / 2 Noches.</p>
            <p>- <strong>Tarifa:</strong> $189.990 por persona.</p>
            <p>- <strong>Gastos administrativos:</strong> $10.000.</p>
            <p>- <strong>Financiación:</strong> 6 cuotas de $46.665.</p>
            <p>- Cupos limitados.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Puntos de embarque en CABA y Gran Buenos Aires.</li>
            </ul>
        `,
        availability: [
            { date: "11-13 de Diciembre", status: "ÚLTIMOS LUGARES", color: "🟡" }
        ]
    },
    {
        id: "resumen-primavera",
        title: "Resumen Primavera",
        season: "primavera",
        price: "Consultar",
        image: "30_7/primavera/resumen.jpeg",
        pdf: "",
        video: "",
        features: [
            { icon: "", text: "Salidas Especiales Primavera" },
            { icon: "", text: "Consulta por todos nuestros destinos" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "bariloche-primavera",
        title: "Bariloche Primavera",
        season: "primavera",
        price: "Consultar",
        image: "30_7/primavera/bariloche.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/BARILOCHE AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en AEREO/Bariloche/a9092de1-4c02-4275-8bce-981f7c2bebd8.mp4",
        features: [
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con Desayuno" },
            { icon: "", text: "Traslados In/Out" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "ushuaia-primavera",
        title: "Ushuaia Primavera",
        season: "primavera",
        price: "Consultar",
        image: "30_7/primavera/ushuaia.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/USHUAIA AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en AEREO/Ushuaia/1d415b1c-2db9-4ca6-a88a-c01b2822bd82.MP4",
        features: [
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con Desayuno" },
            { icon: "", text: "Traslados In/Out" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "aimogasta-primavera",
        title: "Aimogasta Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/aimogasta.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/AIMOGASTA VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Aimogasta/VIDEO-2025-10-29-12-12-11.mp4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Media Pensión" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "campo-la-herradura-primavera",
        title: "Campo La Herradura Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/campo_herradura.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA HERRADURA VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/La Herradura/03a7f75d-2038-48dd-b70f-8fca947fe86d.MP4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Día de Campo Completo" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "cataratas-del-iguazu-primavera",
        title: "Cataratas del Iguazú Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/cataratas_iguazu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/CATARATAS DEL IGUAZÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Iguazu/VIDEO-2025-09-27-13-52-38.mp4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Desayuno" },
            { icon: "", text: "Excursiones incluidas" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "gualeguaychu-primavera",
        title: "Gualeguaychú Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/gualeguaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUALEGUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Gualeguaychu/ee3c5736-9583-4565-947c-d11d9ce6e4a6.MP4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Desayuno" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "mendoza-primavera",
        title: "Mendoza Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/mendoza.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/MENDOZA VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Mendoza/3ee0ac3c-755c-4fdc-9172-56f1773f6910.MP4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Media Pensión" },
            { icon: "", text: "Excursiones en cordillera" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "salta-primavera",
        title: "Salta Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/salta.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/SALTA X 4 NTS VEND MARZO A JUNIO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Salta/7c10e094-b113-4306-b6b3-12c7eeee0e7f.MP4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Desayuno" },
            { icon: "", text: "Recorrido por Valles" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "san-pedro-primavera",
        title: "San Pedro Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/san_pedro.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN PEDRO VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/San Pedro/VIDEO-2025-11-13-12-01-23.mp4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Escapada de Fin de Semana" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "san-rafael-primavera",
        title: "San Rafael Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/san_rafael.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN RAFAEL VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/San Rafael/VIDEO-2025-11-04-13-03-48.mp4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Media Pensión" },
            { icon: "", text: "Valle Grande y Atuel" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "tandil-primavera",
        title: "Tandil Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/tandil.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/TANDIL VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Tandil/VIDEO-2025-09-26-13-43-30.mp4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Desayuno" },
            { icon: "", text: "Paseos serranos" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "termas-de-guaychu-primavera",
        title: "Termas de Guaychú Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/termas_guaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Termas de Guaychu/4e75b42e-ab5d-46b3-a476-ae538638992b.MP4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Entrada al parque termal" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "villa-carlos-paz-primavera",
        title: "Villa Carlos Paz Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/villa_carlos_paz.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/VILLA CARLOS PAZ VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Villa Carlos Paz/5ff7eaf1-b05d-4066-9692-71492a95a83c.mp4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Media Pensión" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "villa-de-merlo-primavera",
        title: "Villa de Merlo Primavera",
        season: "primavera",
        price: "Consultar",
        image: "4_8/villa_merlo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/MERLO VEND VACACIONES DE INVIERNO 2026.pdf",
        video: "ordenarvideos/VIDEOS TRAVELAR/Destinos en BUS/Villa de Merlo/340ccd21-9565-47ea-a02a-6b45ffb3367d.MP4",
        features: [
            { icon: "", text: "Bus Mix Confort" },
            { icon: "", text: "Alojamiento con Media Pensión" },
            { icon: "", text: "Microclima serrano" }
        ],
        itinerary: `<p>Consulte el itinerario detallado de Primavera en el PDF adjunto.</p>`,
        importantNotes: `<p>- Tarifas sujetas a disponibilidad y cambios sin previo aviso.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Puntos de embarque en GBA y CABA</li></ul>`
    },
    {
        id: "crucero-travelero",
        title: "Crucero Travelero",
        season: "Todo el año",
        price: "Consultar",
        image: "Otros/crucero_travelero_flyer.jpeg",
        features: [
            { icon: "", text: "Crucero Full Destacados" },
            { icon: "", text: "No gastas ni un mango más" },
            { icon: "", text: "All Inclusive" },
            { icon: "", text: "Shows y entretenimiento" }
        ],
        itinerary: `
            <p><strong>Día 1:</strong>Embarque y bienvenida a bordo.</p>
            <p><strong>Días Navegación:</strong>Disfrute de todas las instalaciones, comidas y shows incluidos.</p>
            <p><strong>Destinos:</strong>Recorrido por las costas más bellas.</p>
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
        price: "$919.990",
        image: "14_7/bariloche.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/BARILOCHE AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento en Hotel Internacional o similar" },
            { icon: "", text: "4 días / 3 noches" },
            { icon: "", text: "Media Pensión" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Equipaje de mano de 12kg incluido" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>¡Salida Especial Vacaciones de Invierno a San Carlos de Bariloche! Disfrutá de la nieve y los maravillosos paisajes de la Patagonia. El paquete incluye aéreos desde Buenos Aires, traslados de ida y vuelta al hotel, 3 noches de alojamiento en el Hotel Internacional o similar con Media Pensión y equipaje de mano de 12kg.</p>`,
        importantNotes: `<p>- Valor por persona: $919.990 + Gastos Administrativos ($10.000).</p><p>- Promoción 4x3: ¡Viajan 4 y pagan 3!</p><p>- Financiación disponible en 6 cuotas fijas de $216.998.</p><p>- Cupos limitados.</p>`,
        boardingPoints: `<ul><li>Aeropuerto de Ezeiza / Aeroparque</li></ul>`,
        availability: [
            { date: "18/07 al 23/07", status: "POCO DISPONIBLE", color: "" }
        ]
    },
    {
        id: "ushuaia-aereo",
        title: "Ushuaia Aéreo",
        season: "invierno",
        price: "Consultar",
        image: "Otros/ushuaia.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en AEREO/Vacaciones de invierno/USHUAIA AÉREO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo desde Buenos Aires" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Traslados in/out" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "19/07", status: "POCO DISPONIBLE", color: "" }
        ]
    },
    {
        id: "villa-carlos-paz",
        title: "Villa Carlos Paz",
        season: "invierno",
        price: "299.990",
        image: "ordenarmas/invierno_carlos_paz.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/VILLA CARLOS PAZ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "17/07", status: "DISPONIBLE", color: "" },
            { date: "20/07", status: "POCO DISPONIBLE", color: "" },
            { date: "23/07", status: "DISPONIBLE", color: "" },
            { date: "26/07", status: "DISPONIBLE", color: "" },
            { date: "29/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "gualeguaychú",
        title: "Gualeguaychú",
        season: "invierno",
        price: "189.990",
        image: "ordenarmas/invierno_gualeguaychu.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUALEGUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "20/07", status: "DISPONIBLE", color: "" },
            { date: "27/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "la-rioja",
        title: "La Rioja",
        season: "invierno",
        price: "319.990",
        image: "ordenarmas/invierno_la_rioja.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA RIOJA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "21/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "mendoza",
        title: "Mendoza",
        season: "invierno",
        price: "299.990",
        image: "ordenarmas/invierno_mendoza.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/MENDOZA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "17/07", status: "DISPONIBLE", color: "" },
            { date: "20/07", status: "POCO DISPONIBLE", color: "" },
            { date: "23/07", status: "DISPONIBLE", color: "" },
            { date: "26/07", status: "DISPONIBLE", color: "" },
            { date: "29/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "villa-de-merlo",
        title: "Villa de Merlo",
        season: "invierno",
        price: "289.990",
        image: "ordenarmas/invierno_merlo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/MERLO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "17/07", status: "DISPONIBLE", color: "" },
            { date: "20/07", status: "POCO DISPONIBLE", color: "" },
            { date: "23/07", status: "DISPONIBLE", color: "" },
            { date: "26/07", status: "DISPONIBLE", color: "" },
            { date: "29/07", status: "POCO DISPONIBLE", color: "" }
        ]
    },
    {
        id: "puerto-madryn",
        title: "Puerto Madryn",
        season: "invierno",
        price: "369.990",
        image: "ordenarmas/invierno_puerto_madryn.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/PUERTO MADRYN VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "22/07", status: "POCO DISPONIBLE", color: "" }
        ]
    },
    {
        id: "san-pedro",
        title: "San Pedro",
        season: "invierno",
        price: "109.990",
        image: "ordenarmas/invierno_san_pedro.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN PEDRO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "26/07", status: "AGOTADO", color: "" }
        ]
    },
    {
        id: "san-rafael",
        title: "San Rafael",
        season: "invierno",
        price: "359.990",
        image: "ordenarmas/invierno_san_rafael.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/SAN RAFAEL VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "17/07", status: "DISPONIBLE", color: "" },
            { date: "20/07", status: "AGOTADO", color: "" },
            { date: "23/07", status: "DISPONIBLE", color: "" },
            { date: "26/07", status: "DISPONIBLE", color: "" },
            { date: "29/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "tandil",
        title: "Tandil",
        season: "invierno",
        price: "209.990",
        image: "ordenarmas/invierno_tandil.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/TANDIL VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "18/07", status: "DISPONIBLE", color: "" },
            { date: "25/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "termas-de-guaychú",
        title: "Termas de Guaychú",
        season: "invierno",
        price: "99.990",
        image: "ordenarmas/invierno_termas.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/GUAYCHÚ VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Entrada incluida" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "19/07", status: "DISPONIBLE", color: "" },
            { date: "26/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "termas-de-federación",
        title: "Termas de Federación",
        season: "invierno",
        price: "219.990",
        image: "ordenarmas/invierno_termas_federacion.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/FEDERACION VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "21/07", status: "DISPONIBLE", color: "" },
            { date: "27/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "termas-de-río-hondo",
        title: "Termas de Río Hondo",
        season: "invierno",
        price: "449.990",
        image: "ordenarmas/invierno_termas_rio_hondo.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/TERMAS DE RÍO HONDO VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con pensión completa" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "18/07", status: "DISPONIBLE", color: "" },
            { date: "22/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "campo-la-herradura",
        title: "Campo La Herradura",
        season: "invierno",
        price: "99.990",
        image: "ordenarmas/invierno_campo_la_herradura.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/VACACIONES DE INVIERNO/LA HERRADURA VEND VACACIONES DE INVIERNO 2026.pdf",
        features: [
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Almuerzo incluido" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "19/07", status: "AGOTADO", color: "" },
            { date: "26/07", status: "DISPONIBLE", color: "" }
        ]
    },
    {
        id: "termas-de-guaychu",
        title: "Termas de Guaychú",
        season: "semana santa",
        price: "99.990,00",
        image: "Otoño/gualeguaychu_otoño.jpeg",
        pdf: "ordenarpdf/ITINERARIOS TRAVELAR/salidas en BUS/ABRIL A JUNIO/GUAYCHÚ VEND MARZO A JUNIO 2026.pdf",
        features: [
            { icon: "", text: "Programa Full Day" },
            { icon: "", text: "Traslados en Bus Mix Confort | Ida y Vuelta" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Incluye entrada al Complejo Termal" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Entrada incluida" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Almuerzo incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con media pensión" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento con desayuno" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>Consulte el itinerario detallado en el PDF adjunto.</p>`,
        importantNotes: `<p>- Cupos limitados.</p><p>- Promoción: ¡Viajan 4 y pagan 3!</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque</li></ul>`,
        availability: [
            { date: "18/07", status: "DISPONIBLE", color: "" },
            { date: "21/07", status: "DISPONIBLE", color: "" },
            { date: "24/07", status: "DISPONIBLE", color: "" },
            { date: "27/07", status: "DISPONIBLE", color: "" }
        ]
    }
,

    {
        id: "cataratas-del-iguazu-valijasya",
        title: "Cataratas del Iguazu",
        season: "valijasya",
        price: "Consultar",
        image: "valijasya/cataratasdeliguazu.jpeg",
        features: [
            { icon: "", text: "Cataratas del Iguazú" },
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "San Rafael, Mendoza" },
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Villa Carlos Paz, Córdoba" },
            { icon: "", text: "Bus Mix" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus semicama" },
            { icon: "", text: "Hotel Samay Huasi (céntrico con piscina climatizada)" },
            { icon: "", text: "Desayuno buffet" },
            { icon: "", text: "6 días / 3 noches" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Con 10 pasajeros te pasamos a buscar" }
        ],
        itinerary: `
            <p><strong>Salidas programadas:</strong></p>
            <ul>
                <li><strong>Agosto:</strong>11, 18</li>
                <li><strong>Septiembre:</strong>03, 10, 16, 23</li>
                <li><strong>Octubre:</strong>22, 25</li>
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
    { icon: "", text: "Entrada al complejo termal incluida" },
            { icon: "", text: "Especial Día del Maestro" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Aéreo incluido (Salida 23/05)" },
            { icon: "", text: "PROMO SUPER SALE 2x1" },
            { icon: "", text: "Aboná en 3 y 6 cuotas" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "", text: "PROMO SUPER SALE 2x1" },
            { icon: "", text: "Aboná en 3 y 6 cuotas" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "", text: "PROMO SUPER SALE 2x1" },
            { icon: "", text: "Aboná en 3 y 6 cuotas" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix Confort (Salida 22/05)" },
            { icon: "", text: "PROMO SUPER SALE 2x1" },
            { icon: "", text: "Aboná en 3 y 6 cuotas" },
            { icon: "", text: "Alojamiento incluido" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Confortable (Salida 25/05)" },
            { icon: "", text: "PROMO SUPER SALE 2x1" },
            { icon: "", text: "Aboná en 3 y 6 cuotas" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Super Sale 2x1 en Salidas Inmediatas" },
            { icon: "", text: "Pagá en 3 y 6 cuotas fijas" },
            { icon: "", text: "Salidas próximamente en Mayo" },
            { icon: "", text: "Cupos estrictamente limitados" }
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
            { icon: "", text: "Super Sale Especial 25 de Mayo" },
            { icon: "", text: "Pagá en 6 cuotas fijas" },
            { icon: "", text: "Salidas especiales 23/05 y 25/05" },
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
            { icon: "", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "", text: "Alojamiento en hotel turista" },
            { icon: "", text: "Media Pensión incluida" },
            { icon: "", text: "2 días / 1 noche" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Mix Confort (Salida 23/05)" },
            { icon: "", text: "Alojamiento en Hotel Los Robles" },
            { icon: "", text: "Desayuno incluido" },
            { icon: "", text: "3 días / 2 noches" },
            { icon: "", text: "Coordinación permanente" }
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
            { icon: "", text: "Bus Confortable (Salida 25/05)" },
            { icon: "", text: "Almuerzo: Parrillada incluida" },
            { icon: "", text: "Salida Full Day" },
            { icon: "", text: "Coordinación permanente" }
        ],
        itinerary: `<p>¡Salida Especial del 25 de Mayo! Viví una jornada de campo de descanso y tradición en San Pedro. Incluye viaje de ida y vuelta en el día y un espectacular almuerzo con parrillada completa.</p>`,
        importantNotes: `<p>- Tarifa Promocional: ANTES $109.990 → AHORA $79.990 final (sin gastos extra).</p><p>- Financiación: 6 cuotas fijas de $18.665.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA.</li></ul>`
    },
    {
        id: "formosa-bañado-la-estrella-invierno",
        title: "Formosa + Bañado La Estrella",
        season: "invierno",
        price: "$399.990",
        image: "nuevo22_5/formosa_bañadolaestrella.jpeg",
        pdf: "nuevo22_5/BAÑADO LA ESTRELLA VACACIONES DE INVIERNO.pptx.pdf",
        features: [
            { icon: "", text: "Salida: 18 de JULIO" },
            { icon: "", text: "Bus ida y vuelta" },
            { icon: "", text: "7 días / 4 noches" },
            { icon: "", text: "Las Lomitas: 2 noches – Media pensión" },
            { icon: "", text: "Formosa: 2 noches – Desayuno" },
            { icon: "", text: "Coordinación permanente" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" }
        ],
        itinerary: `<p>¡Salida Especial Vacaciones de Invierno! Disfrutá de la majestuosidad de Formosa y el Bañado La Estrella. El paquete incluye traslados en bus de ida y vuelta, alojamiento en hoteles seleccionados (2 noches en Las Lomitas con media pensión y 2 noches en Formosa con desayuno) y coordination permanente.</p>`,
        importantNotes: `<p>- Valor por persona: $399.990.</p><p>- Promoción 4x3: ¡Viajan 4 y pagan 3!</p><p>- Financiación de hasta 6 cuotas fijas.</p><p>- CUPOS ESTRICTAMENTE LIMITADOS.</p>`,
        boardingPoints: `<ul><li>Varios puntos de embarque en CABA y GBA.</li></ul>`,
        availability: [
            { date: "18/07", status: "POCO DISPONIBLE", color: "" }
        ]
    },
    {
        id: "feriado-9-de-julio",
        title: "Feriado 9 de Julio — Día de la Independencia",
        season: "feriados",
        price: "Consultar",
        image: "9JULIO/resumen.jpeg",
        features: [
            { icon: "", text: "Feriado 9 de Julio" },
            { icon: "", text: "Promo 4x3: ¡Viajan 4 y pagan 3!" },
            { icon: "", text: "Villa de Merlo — $269.990" },
            { icon: "", text: "Villa Carlos Paz — $249.990" },
            { icon: "", text: "Gualeguaychú — $229.990" },
            { icon: "", text: "Tandil — $199.990" },
            { icon: "", text: "San Pedro — $109.990" },
            { icon: "", text: "Campo La Herradura — $99.990" },
            { icon: "", text: "Termas de Guaychú — $99.990" }
        ],
        itinerary: `
            <p>Disfrutá del fin de semana largo del 9 de Julio con nuestra espectacular promo 4x3: ¡viajan 4 y pagan 3! Elegí entre nuestros increíbles destinos nacionales con traslados y alojamiento incluidos.</p>
            <br>
            <p><strong>Destinos y precios por persona (4x3):</strong></p>
            <ul>
                <li><strong>Villa de Merlo:</strong> $269.990</li>
                <li><strong>Villa Carlos Paz:</strong> $249.990</li>
                <li><strong>Gualeguaychú:</strong> $229.990</li>
                <li><strong>Tandil:</strong> $199.990</li>
                <li><strong>San Pedro:</strong> $109.990</li>
                <li><strong>Campo La Herradura:</strong> $99.990</li>
                <li><strong>Termas de Guaychú:</strong> $99.990</li>
            </ul>
        `,
        importantNotes: `
            <p>Promo por tiempo limitado y cupos sujetos a disponibilidad.</p>
            <p>- Tarifas por persona en base doble/triple.</p>
            <p>- Reservá con el 30% de seña y aboná el saldo restante en cuotas accesibles.</p>
        `,
        boardingPoints: `
            <ul>
                <li>Múltiples puntos de embarque en CABA y GBA según destino.</li>
            </ul>
        `
    }
];

function getPackageData(title, season) {
    if (!title) return null;

    // Normalization function to remove accents and special characters
    const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    const targetId = normalize(title);
    const targetSeasonId = season ? `${targetId}-${normalize(season)}` : null;

    // 1. Try finding by normalized ID, original ID, or normalized title
    let p = paquetesData.find(item => {
        const itemId = normalize(item.id);
        const itemTitle = normalize(item.title);
        return itemId === targetSeasonId || itemId === targetId || itemTitle === targetId || item.id === title;
    });

    // 2. Try finding with season filter
    if (!p && season) {
        p = paquetesData.find(item => {
            const itemTitle = normalize(item.title);
            const itemSeason = normalize(item.season || '');
            return (itemTitle.includes(targetId) || targetId.includes(itemTitle)) && itemSeason === normalize(season);
        });
    }

    // 3. Fallback to a partial title or ID match
    if (!p) {
        p = paquetesData.find(item => {
            const itemTitle = normalize(item.title);
            const itemId = normalize(item.id);
            return itemTitle.includes(targetId) || targetId.includes(itemTitle) || itemId.includes(targetId) || targetId.includes(itemId);
        });
    }

    // 4. Default fallback object so no flyer EVER fails
    if (!p) {
        return {
            id: targetId,
            title: title || "Destino Turístico",
            season: season || 'Consultar',
            price: "Consultar",
            image: "15_8/campo_herradura.jpeg",
            features: [
                { icon: "🚌", text: "Traslados ida y vuelta en Bus Mix Confort" },
                { icon: "🙋‍♂️", text: "Coordinación permanente" },
                { icon: "✨", text: "Salidas programadas y cupos limitados" },
                { icon: "✔", text: "Asistencia médica incluida" }
            ],
            itinerary: `<p>Consulte el itinerario detallado de <strong>${title}</strong> solicitando información personalizada.</p>`,
            importantNotes: `<p>- Tarifas y disponibilidad sujetas a confirmación.</p><p>- Consultá facilidades de pago en cuotas.</p>`,
            boardingPoints: `<ul><li>Puntos de embarque en CABA y Gran Buenos Aires.</li></ul>`,
            legal: ""
        };
    }

    return p;
}
