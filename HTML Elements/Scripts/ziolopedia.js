import { db, ref, get } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const dataRef = ref(db, 'ziola/mietaPieprzowa');
  get(dataRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        displayData(data);
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error('Error getting data:', error);
    });
});

function displayData(data) {
  const nameElement = document.querySelector('.ziolo-nazwa');
  const descriptionElement = document.querySelector('.ziolo-opis');
  const mainImageElement = document.querySelector('.ziolo-image');
  const galleryElement = document.querySelector('#galeria-zdjec');
  const propertiesElement = document.querySelector('.ziolo-wlasciwosci');

  // Wyświetlenie nazwy
  const name = document.createElement('h1');
  name.textContent = data.nazwa;
  nameElement.appendChild(name);

  // Wyświetlenie opisu
  descriptionElement.textContent = data.opis;

  // Wyświetlenie głównego zdjęcia
  mainImageElement.src = data.glowneZdjecie.src;
  mainImageElement.alt = data.glowneZdjecie.alt;

  // Wyświetlenie właściwości
  const propertiesList = document.createElement('ul');
  data.wlasciwosci.forEach(property => {
    const propertyItem = document.createElement('li');
    const propertyTitle = document.createElement('h3');
    const propertyDescription = document.createElement('p');
    
    propertyTitle.textContent = property.nazwa;
    propertyDescription.textContent = property.opis;
    
    propertyItem.appendChild(propertyTitle);
    propertyItem.appendChild(propertyDescription);
    propertiesList.appendChild(propertyItem);
  });
  propertiesElement.appendChild(propertiesList);

  // Wyświetlenie dodatkowych zdjęć
  data.zdjecia.forEach(photo => {
    const photoElement = document.createElement('img');
    photoElement.src = photo.src;
    photoElement.alt = photo.alt;
    photoElement.className = 'miniatura'
    galleryElement.appendChild(photoElement);
  });
}
