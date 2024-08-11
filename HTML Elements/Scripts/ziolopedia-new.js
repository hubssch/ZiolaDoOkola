const zioła = {
    "kategorieZiol": {
        "adaptogeny": ["żeń-szeń", "ashwagandha", "rhodiola"],
        "antyseptyki": ["tymianek", "czosnek", "oregano"],
        "antyoksydanty": ["zielona herbata", "jagody", "kurkuma"],
        "aperienty": ["aloes", "rzewień", "senes"],
        "sedatywy": ["melisa", "lawenda", "waleriana"],
        "immunostymulanty": ["echinacea", "jeżówka", "traganek"],
        "hepatoprotektory": ["ostropest plamisty", "karczoch", "dziurawiec"],
        "diuretyki": ["pokrzywa", "skrzyp", "mniszek lekarski"],
        "toniki": ["żeń-szeń syberyjski", "żeń-szeń panax", "eleuterokok"],
        "przeciwzapalne": ["kurkuma", "imbir", "boswellia"],
        "analgetyki": ["kora wierzby", "dziurawiec", "arnika"],
        "srodki wykrztusne": ["tymianek", "lukrecja", "prawoślaz"],
        "srodki trawienne": ["mięta pieprzowa", "imbir", "koper włoski"],
        "antydepresanty": ["dziurawiec", "szafran", "ashwagandha"],
        "astringentne": ["kora dębu", "krwawnik", "malina"]
    }
};

// Funkcja inicjalizująca przyciski z kategoriami
function initCategoryButtons() {
    const categoryButtonsDiv = document.getElementById('category-buttons');
    const categories = Object.keys(zioła.kategorieZiol);

    categories.forEach(category => {
        // const button = document.createElement('button');
        const button = document.createElement('li');
        button.className = 'category-button';
        // const button = document.querySelector("#category-button")
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        button.addEventListener('click', () => displayHerbsForCategory(category));
        categoryButtonsDiv.appendChild(button);
    });
}

// Funkcja wyświetlająca zioła dla wybranej kategorii
function displayHerbsForCategory(category) {
    const resultDiv = document.getElementById('result');
    // const resultDiv = document.createElement('result')
    resultDiv.textContent = ''
    // resultDiv.innerHTML = ''; // Wyczyszczenie poprzednich wyników
    
    if (category && zioła.kategorieZiol[category]) {
        const herbs = zioła.kategorieZiol[category];
        const list = document.createElement('ul');
        
        herbs.forEach(herb => {
            const listItem = document.createElement('li');
            listItem.textContent = herb;
            list.appendChild(listItem);
        });
        
        resultDiv.appendChild(list);
    }
}

// Inicjalizacja przycisków przy załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    initCategoryButtons();
});
