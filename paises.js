function buscarPaises() {

    buscar = document.querySelector('#buscar');

    

    let url = "https://restcountries.com/v3.1/all";

    fetch(url)
        .then(paises => paises.json())
        .then(paises => {
            console.log(paises);
            let html = "";
            for (let i = 0; i < paises.length; i++) {
                const pais = paises[i];
                let card_padrao = `
            
                        <div class="col-4">
                            <div class="card shadow mb-5" style="width: 18rem;">
                                <img src="${pais.flags.png}" class="card-img-top" style="height: 180px; object-fit: cover;" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${pais.name.common}</h5>
                                <p class="card-text">Continente: ${pais.continents[0]}</p>
            
                                </div>
                            </div>
                        </div>
            `;
                html += card_padrao;
            }

            document.getElementById('linha').innerHTML = html;
        })
}

buscarPaises();