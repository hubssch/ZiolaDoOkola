const sklep = {
    nazwaSklepu: 'Gabi Chmioła - Zioła do okoła',
    logo: {src: '../images/ziola-do-okoloa/zioła-do-okola-2.JPG', alt: 'Zioła do okoła - logo1'},
    logo2: {src: '../images/ziola-do-okoloa/zioła-do-okola.JPG', alt: 'Zioła do okoła - logo2'},
    lokalizacja: {
        wojewodztwo: 'Małopolskie',
        miasto: 'Kraków',
        ulica: 'ul. Zielonego Chmielu 37',
    },
    kontakt: {
        email: 'gabimotakchmiola@zioladookola.pl',
        numerTelefonu: '777777777'
    }
}

const divListaSklepow = document.getElementById('lista-sklepow')
const divNazwaSklepu = document.createElement('div')
const divLogoSklepu = document.createElement('img')
const divLokalizacja = document.createElement('ul')
const pMiasto = document.createElement('p')
const pUlica = document.createElement('p')
const divKontakt = document.createElement('div')
const pEmail = document.createElement('p')
const pNumerTelefonu = document.createElement('p')


divNazwaSklepu.className = 'nazwa-sklepu'
divLogoSklepu.className = 'logo-sklepu'
pMiasto.className = 'miasto'
pUlica.classList - 'ulica'
divKontakt.className = 'kontakt'
pEmail.classList = 'email'
pNumerTelefonu.classList = 'numer-telefonu'

divNazwaSklepu.textContent = sklep.nazwaSklepu
divLogoSklepu.src = sklep.logo2.src
divLogoSklepu.alt = sklep.logo.alt
divLokalizacja.textContent = 'Adres: '
pMiasto.textContent = sklep.lokalizacja.miasto
pUlica.textContent = sklep.lokalizacja.ulica
divKontakt.textContent = 'Kontakt: '
pEmail.textContent = sklep.kontakt.email
pNumerTelefonu.textContent = sklep.kontakt.numerTelefonu



divListaSklepow.appendChild(divLogoSklepu)
divListaSklepow.appendChild(divNazwaSklepu);
divListaSklepow.appendChild(divLokalizacja)
divLokalizacja.appendChild(pMiasto)
divLokalizacja.appendChild(pUlica)
divListaSklepow.appendChild(divKontakt)
divKontakt.appendChild(pEmail)
divKontakt.appendChild(pNumerTelefonu)

console.log(divNazwaSklepu)

console.log('script jest podpiety')