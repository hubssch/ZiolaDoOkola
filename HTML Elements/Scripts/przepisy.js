const przepis = {
    nazwa: 'Spaghetti Carbonara',
    czasPrzygotowania: '30 minut',
    poziomTrudnosci: 'średni',
    składniki: [
        { nazwa: 'Spaghetti', ilość: '200g' },
        { nazwa: 'Pancetta', ilość: '100g' },
        { nazwa: 'Jajka', ilość: '3' },
        { nazwa: 'Parmezan', ilość: '50g, starty' },
        { nazwa: 'Czosnek', ilość: '2 ząbki' },
        { nazwa: 'Pieprz', ilość: 'do smaku' },
        { nazwa: 'Sól', ilość: 'do smaku' },
    ],
    instrukcje: [
        'Ugotuj spaghetti w osolonej wodzie zgodnie z instrukcją na opakowaniu.',
        'Podsmaż pancettę na patelni, aż będzie chrupiąca.',
        'W misce wymieszaj jajka z parmezanem, pieprzem i odrobiną soli.',
        'Dodaj ugotowane spaghetti do patelni z pancettą i wymieszaj.',
        'Zdejmij patelnię z ognia i dodaj mieszankę jajek i parmezanu, szybko mieszając, aby uniknąć ścięcia jajek.',
        'Podawaj od razu, posypane dodatkowym parmezanem i pieprzem do smaku.'
    ],
    porcje: 2,
    kategorie: ['Włoska', 'Makaron', 'Obiad']
};

// Wyświetlenie obiektu w konsoli
console.log(przepis);
