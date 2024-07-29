const detailsContainer = $('#product-container');

const array = JSON.parse(localStorage.getItem('globalProductsData'));
const id = localStorage.getItem('id');

console.log('Retrieved Data:', { array, id });




detailsContainer.html(`
            <div class="col-12 col-sm-6 col-md-4">
                <div class="mb-2 card shadow rounded-3 p-3" id='${id}'>
                    <img class="w-100 img-fluid" src="${array[id].images[0]}" alt="image">
                    <h1>${array[id].title}</h1>
                    <p>${array[id].description}</p>
                    <div class="d-flex justify-content-between">
                        <h3>${array[id].price}</h3>
                        <button class="btn btn-danger mb-3 addToCartBtn" >Add To Cart</button>
                    </div>
                </div>
            </div>
    <div class="d-flex justify-content-center h-100 align-items-center mt-5">
        <a onclick="parent.history.back();" class="btn btn-outline-danger">Back To Home</a>
    </div>
`);