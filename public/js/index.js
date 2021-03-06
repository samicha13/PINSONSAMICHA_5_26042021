let url = 'http://localhost:3000/api/teddies';
fetch(url) //recherche et récupération dans l'URL 
    .then((response) => {
        response.json().then((elements) => {
            const main = document.getElementById('teddies');
            const row = document.createElement('div');
            row.className = "row";
            main.appendChild(row);
            //recherche les  infos des ours dans l'API
            elements.forEach(element => {
                // structure HTML 
                //div col
                const divCol = document.createElement("div");
                divCol.className = 'col-12 col-md-6 col-lg-3 text-center';
                row.appendChild(divCol);
                //carte
                const card = document.createElement('div')
                card.className = 'card m-3 shadow-sm rounded-3';
                divCol.appendChild(card);
                //image 
                const cardImg = document.createElement('img');
                cardImg.src = element.imageUrl;
                cardImg.alt = "photo de l'ours " + element.name;
                card.appendChild(cardImg);
                //caractéristiques ( nom+prix)
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                card.appendChild(cardBody);
                //Nom de l'ours
                const cardName = document.createElement('p');
                cardName.className = 'card-title m-1';
                cardBody.appendChild(cardName);
                cardName.innerHTML = element.name;
                //Prix de l'ours
                const cardPrice = document.createElement('p');
                cardPrice.className = 'card-text m-1';
                cardBody.appendChild(cardPrice);
                cardPrice.innerHTML = element.price;
                cardPrice.textContent = element.price / 100 + ' ' + '€';
                //Bouton 
                const cardBtn = document.createElement('a');
                //lien pour récupérer l'id du produit
                cardBtn.href = "product.html?id=" + element._id;
                cardBtn.className = 'btn btn-dark m-1';
                cardBtn.textContent = 'Voir le produit';
                cardBody.appendChild(cardBtn);
            });
        })
    })
    .catch(function (error) { // message d'erreur en cas de rejet de la promesse avec fetch
        let errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger';
        errorMessage.setAttribute('role', 'alert');
        errorMessage.textContent = 'Oups! Il y a eu un problème... Veuillez réessayer plus tard.';
        main.appendChild(errorMessage);
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });