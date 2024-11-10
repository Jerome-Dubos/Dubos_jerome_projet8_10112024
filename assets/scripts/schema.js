function injectSchemaData() {
    // Le contenu JSON-LD sous forme de données
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Nina Carducci",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "68 avenue Alsace-Lorraine",
            "addressLocality": "Bordeaux",
            "postalCode": "33200",
            "addressCountry": "FR"
        },
        "telephone": "+33-5-56-67-78-89",
        "url": "https://ninacarducci.github.io",
        "openingHours": "Mo-Fr 10:00-19:00",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8378, // Latitude de Bordeaux
            "longitude": -0.5792 // Longitude de Bordeaux
        },
        "sameAs": [
            "https://www.instagram.com/ninacarducci.photo/?hl=fr"
        ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
}

window.onload = injectSchemaData;
