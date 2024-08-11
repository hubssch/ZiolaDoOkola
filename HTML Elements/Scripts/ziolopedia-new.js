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

    // Zmienna do śledzenia aktualnie otwartej kategorii
    let currentOpenedCategory = null;

    categories.forEach(category => {
        const button = document.createElement('li');
        button.className = 'category-button';
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        button.addEventListener('click', () => {
            // Wyczyszczenie poprzednio otwartej kategorii
            if (currentOpenedCategory && currentOpenedCategory !== button) {
                const previousList = currentOpenedCategory.querySelector('ul');
                if (previousList) {
                    previousList.remove();
                }
            }

            displayHerbsForCategory(category, button);
            currentOpenedCategory = button; // Ustawienie aktualnie otwartej kategorii
        });

        categoryButtonsDiv.appendChild(button);
    });

    function displayHerbsForCategory(category, button) {
        // Wyczyszczenie poprzedniego wyniku
        const existingList = button.querySelector('ul');
        if (existingList) {
            existingList.remove();
        }
        
        // Dodanie nowej listy z ziołami
        if (category && zioła.kategorieZiol[category]) {
            const herbs = zioła.kategorieZiol[category];
            const list = document.createElement('ul');
            
            herbs.forEach(herb => {
                const listItem = document.createElement('li');
                listItem.textContent = herb;
                list.appendChild(listItem);
            });
            
            button.appendChild(list);
        }
    }
}

// Inicjalizacja przycisków przy załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    initCategoryButtons();
});
