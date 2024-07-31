// const ziolo = {
//     id,
//     zdjecie,
//     opis: {
//         nazwa,
//         krotkiOpis,
//         wlasciwosci,
//         przeciwwskazania,
//         miejscaWystepowania,
//         zdjecia,
//     },
//     przepisy,
// }


const zdjecia = [
    {src: '../images/mietapieprzowa/mieta-pieprzowa.jpg', alt: 'Zdjecie 1'},
    {src: '../images/mietapieprzowa/Mięta-Pieprzowa-Mentha-Piperita-3.jpg', alt: 'Zdjecie 2'},
    {src: '../images/mietapieprzowa/pol_pl_Mieta-pieprzowa-Mentha-piperita-8245_3.jpg', alt: 'Zdjecie 3'}
]

function displayPhotos(photoArray) {
    const gallery = document.getElementById('galeria-zdjec');
    
    photoArray.forEach(zdjecie => {
        const img = document.createElement('img');
        img.src = zdjecie.src;
        img.alt = zdjecie.alt;
        img.className = 'miniatura';
        
        gallery.appendChild(img);
    });
}

displayPhotos(zdjecia)

console.log(zdjecia.length)