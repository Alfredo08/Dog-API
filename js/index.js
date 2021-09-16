
function fetchDogs( num ){
    let url = `https://dog.ceo/api/breeds/image/random/${num}`;
    let settings = {
        method: "GET"
    }

    fetch( url, settings )
        .then( function(response){
            return response.json();
        })
        .then( function(data){
            console.log( data );
            let results = document.querySelector( '.results' );
            results.innerHTML = "";

            for( let i = 0; i < data.message.length; i ++ ){
                results.innerHTML += `
                    <div>
                        <img src="${data.message[i]}" class="size"/>
                    </div>
                `;
            }
        });
}

async function fetchInfo( num ){
    let url = `https://dog.ceo/api/breeds/image/random/${num}`;
    let settings = {
        method: "GET"
    }

    let response = await fetch( url, settings );
    let data = await response.json();

    console.log( data );
    let results = document.querySelector( '.results' );
    results.innerHTML = "";

    for( let i = 0; i < data.message.length; i ++ ){
        results.innerHTML += `
            <div>
                <img src="${data.message[i]}" class="size"/>
            </div>
        `;
    }
}

function grabInfo( event ){
    event.preventDefault();

    let currentNum = event.target.numOfDogs.value;
    fetchInfo( currentNum );
}

let dogForm = document.querySelector( '#dogForm' );
dogForm.addEventListener( 'submit', grabInfo );