    // const { initializeApp } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
    // const { getDatabase, ref, get } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js');
    import { initializeApp } from "firebase/app";
    import { getDatabase, ref, get } from "firebase/database";

    const firebaseConfig = {
        apiKey: "AIzaSyDDPSSEaa_FfYE0l_5Tx9OTg0Kt6XUfZ9I",
        authDomain: "zioladookola-6e34c.firebaseapp.com",
        databaseURL: "https://zioladookola-6e34c-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "zioladookola-6e34c",
        storageBucket: "zioladookola-6e34c.appspot.com",
        messagingSenderId: "597086045944",
        appId: "1:597086045944:web:30b746b0c70da21f0ddd0d"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    function fetchZiolaData() {
        const ziolaRef = ref(db, 'ziola/mietaPieprzowa');
        get(ziolaRef).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                displayZiolaData(data);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    function displayZiolaData(data) {
        document.querySelector('.ziolo-nazwa').textContent = data.nazwa;
        document.querySelector('.ziolo-opis').textContent = data.opis;

        const propertiesContainer = document.querySelector('.ziolo-wlasciwosci');
        propertiesContainer.innerHTML = '<h2>Mięta pieprzowa - właściwości i działanie mięty</h2>';

        data.wlasciwosci.forEach(wlasciwosc => {
            const h3 = document.createElement('h3');
            h3.textContent = wlasciwosc.split(":")[0];
            const p = document.createElement('p');
            p.textContent = wlasciwosc.split(":")[1];
            propertiesContainer.appendChild(h3);
            propertiesContainer.appendChild(p);
        });

        displayPhotos(data.zdjecia);
    }

    function displayPhotos(photoArray) {
        const gallery = document.getElementById('galeria-zdjec');
        gallery.innerHTML = '';

        photoArray.forEach(zdjecie => {
            const img = document.createElement('img');
            img.src = zdjecie.src;
            img.alt = zdjecie.alt;
            img.className = 'miniatura';

            gallery.appendChild(img);
        });
    }

    fetchZiolaData();

