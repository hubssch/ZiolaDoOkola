const przepisNaSyropZMietyZCytryna = {
    tytul: "Syrop z mięty z cytryną",
    data: "2 września 2022",
    wprowadzenie: "Syrop z mięty, znany również jako sok z mięty, to doskonały dodatek do zimowej herbaty, ale i do deserów, lemoniad czy drinków. Wspaniale orzeźwia, wspiera odporność organizmu, łagodzi kaszel i działa wspomagająco w dolegliwościach trawiennych.",
    skladniki: {
        mieta: "30/40 gałązek świeżej mięty",
        woda: "2 litry",
        cukier: "2 kg",
        cytryny: "2 cytryny (można dodać więcej)"
    },
    narzedzia: [
        "Duży garnek",
        "Szklane butelki z nowymi, dopasowanymi zakrętkami",
        "Sitko",
        "Lejek do butelek",
        "Drewniana łyżka"
    ],
    instrukcje: [
        "Dokładnie umyj 30/40 gałązek świeżej mięty pod bieżącą wodą i odsącz ręcznikiem papierowym.",
        "W dużym garnku zagotuj 2 litry wody.",
        "Po zagotowaniu wyłącz palnik i wsyp 2 kg cukru oraz wyciśnięty sok z dwóch cytryn. Mieszaj do całkowitego rozpuszczenia się cukru.",
        "Dodaj do garnka przygotowane wcześniej gałązki mięty i zanurz dokładnie w syropie cukrowym. Możesz obciążyć np. małym talerzykiem, aby wszystkie gałązki były zanurzone.",
        "Odstaw całość na 24 godziny. W tym czasie mięta ściemnieje, zmniejszy swoją objętość i odda swój smak oraz aromat do syropu.",
        "Po upływie doby, odsącz i wyjmij gałązki mięty, odciskając je dokładnie. Sam syrop przecedź kilkukrotnie z pozostałościami używając sitka.",
        "Przygotuj szklane butelki na sok – wyparz je dokładnie wrzątkiem i włóż do zimnego piekarnika (bez zakrętek). Następnie piekarnik ustaw na około 90°C, aby butelki się podgrzały. Po rozgrzaniu piekarnik można wyłączyć.",
        "Syrop ponownie zagotuj, mieszając drewnianą łyżką, aby nie dopuścić do przypalenia.",
        "Do gorących butelek wlej gorący syrop używając lejka do butelek i zakręć butelki. (Pamiętaj, aby zakrętki były nowe, czyste i suche.)",
        "Butelki odstaw do ostygnięcia."
    ],
    wlasciwosci: [
        "Wspomaga odporność organizmu.",
        "Łagodzi kaszel.",
        "Działa wspomagająco w dolegliwościach trawiennych.",
        "Działa przeciwbólowo w przypadku migren.",
        "Poprawia perystaltykę jelit.",
        "Ma działanie antybakteryjne.",
        "Łagodzi dolegliwości dróg żółciowych.",
        "Orzeźwia i nawadnia."
    ],
    przechowywanie: [
        "Przechowywać w chłodnym i zaciemnionym miejscu.",
        "Idealna będzie piwnica lub domowa spiżarka.",
        "Przechowywać w szklanych butelkach z dokładnie dopasowanymi zakrętkami.",
        "Po otwarciu, syrop przechowywać w lodówce i spożyć w przeciągu maksymalnie 14 dni."
    ],
    zastosowanie: [
        "Dodatek do herbaty.",
        "Rozcieńczanie z wodą.",
        "Dodatek do lemoniady, deserów, a nawet niektórych dań mięsnych.",
        "Dodatek do drinków, np. w popularnym Mojito."
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("przepis-container");

    const title = document.createElement("h2");
    title.textContent = przepisNaSyropZMietyZCytryna.tytul;
    container.appendChild(title);

    const date = document.createElement("p");
    date.textContent = przepisNaSyropZMietyZCytryna.data;
    container.appendChild(date);

    const intro = document.createElement("p");
    intro.textContent = przepisNaSyropZMietyZCytryna.wprowadzenie;
    container.appendChild(intro);

    const ingredientsHeader = document.createElement("h3");
    ingredientsHeader.textContent = "Składniki:";
    container.appendChild(ingredientsHeader);

    const ingredientsList = document.createElement("ul");
    Object.entries(przepisNaSyropZMietyZCytryna.skladniki).forEach(([key, value]) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        ingredientsList.appendChild(listItem);
    });
    container.appendChild(ingredientsList);

    const toolsHeader = document.createElement("h3");
    toolsHeader.textContent = "Narzędzia:";
    container.appendChild(toolsHeader);

    const toolsList = document.createElement("ul");
    przepisNaSyropZMietyZCytryna.narzedzia.forEach(tool => {
        const listItem = document.createElement("li");
        listItem.textContent = tool;
        toolsList.appendChild(listItem);
    });
    container.appendChild(toolsList);

    const instructionsHeader = document.createElement("h3");
    instructionsHeader.textContent = "Instrukcje:";
    container.appendChild(instructionsHeader);

    const instructionsList = document.createElement("ol");
    przepisNaSyropZMietyZCytryna.instrukcje.forEach(instruction => {
        const listItem = document.createElement("li");
        listItem.textContent = instruction;
        instructionsList.appendChild(listItem);
    });
    container.appendChild(instructionsList);

    const propertiesHeader = document.createElement("h3");
    propertiesHeader.textContent = "Właściwości:";
    container.appendChild(propertiesHeader);

    const propertiesList = document.createElement("ul");
    przepisNaSyropZMietyZCytryna.wlasciwosci.forEach(property => {
        const listItem = document.createElement("li");
        listItem.textContent = property;
        propertiesList.appendChild(listItem);
    });
    container.appendChild(propertiesList);

    const storageHeader = document.createElement("h3");
    storageHeader.textContent = "Przechowywanie:";
    container.appendChild(storageHeader);

    const storageList = document.createElement("ul");
    przepisNaSyropZMietyZCytryna.przechowywanie.forEach(storage => {
        const listItem = document.createElement("li");
        listItem.textContent = storage;
        storageList.appendChild(listItem);
    });
    container.appendChild(storageList);

    const usageHeader = document.createElement("h3");
    usageHeader.textContent = "Zastosowanie:";
    container.appendChild(usageHeader);

    const usageList = document.createElement("ul");
    przepisNaSyropZMietyZCytryna.zastosowanie.forEach(usage => {
        const listItem = document.createElement("li");
        listItem.textContent = usage;
        usageList.appendChild(listItem);
    });
    container.appendChild(usageList);
});
