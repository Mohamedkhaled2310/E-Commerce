const detailsContainer = $('#container');
const reviews = $('#reviews');
const relatedContainer = $('#product-related'); 

const array = JSON.parse(localStorage.getItem('globalProductsData'));
const id = localStorage.getItem('id');

console.log('Retrieved Data:', { array, id });


function generateStars(rating) {
  const fullStar = '<i class="fas fa-star fa-sm text-warning"></i>';
  // const halfStar = '<i class="fas fa-star-half-alt fa-sm text-warning"></i>';
  const emptyStar = '<i class="far fa-star fa-sm text-warning"></i>';

  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += fullStar;
    } else {
      stars += emptyStar;
    }
  }

  return stars;
}

function checkBrand(brand){
    if(brand){
      return brand;
    }
    else{
      return "The brand is not known";
    }
}

detailsContainer.html(`
            <div class="d-flex flex-column h-100 align-items-center " id="product-container">
                <div class="container my-5">

                    <section>
                      
                      <div class="card rounded mb-4">
                        
                        <div class="row">
                  
                          <div class="col-md-6">
                            <img class="img-fluid rounded rounded-left" src="${array[id].images[0]}" alt="project image">
                          </div>
                  
                          <div class="col-md-6 p-5 align-self-center">
                  
                            <h5 class="font-weight-normal mb-3" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-down" data-mdb-animation-duration="1000">${array[id].title}</h5>
                  
                            <p class="text-muted" data-mdb-toggle="animation">
                            ${array[id].description}        
                            </p>
                  
                            <ul class="list-unstyled font-small mt-5 mb-0">
                              <li>
                                <p class="text-uppercase mb-2" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-down" data-mdb-animation-duration="1000"><strong>Stock</strong></p>
                                <p class="text-muted mb-4" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-up" data-mdb-animation-duration="1000">${array[id].stock}</p>
                              </li>
                  
                              <li>
                                <p class="text-uppercase mb-2" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-down" data-mdb-animation-duration="1000"><strong>Category</strong></p>
                                <p class="text-muted mb-4" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-up" data-mdb-animation-duration="1000">${array[id].category}</p>
                              </li>
                  
                              <li>
                                <p class="text-uppercase mb-2" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-down" data-mdb-animation-duration="1000"><strong>Brand</p>
                                <p class="text-muted mb-4" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-up" data-mdb-animation-duration="1000">${checkBrand(array[id].brand)}</p>
                              </li>
                  
                              <li>
                                <p class="text-uppercase mb-2" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-down" data-mdb-animation-duration="1000"><strong>Price</strong></p>
                                <a  data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-up" data-mdb-animation-duration="1000">$ ${array[id].price}</a>
                              </li>
                  
                              <li>
                                <p class="text-uppercase mt-4 mb-2" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-down" data-mdb-animation-duration="1000"><strong>Share</strong></p>
                                <div class="d-flex justify-content-start" data-mdb-toggle="animation"
                                    data-mdb-animation-start="onLoad" data-mdb-animation="slide-in-up" data-mdb-animation-duration="1000">
                                  <a class="text-muted pe-3" href="#"><i class="fab fa-facebook-f"></i></a>
                                  <a class="text-muted pe-3" href="#"><i class="fab fa-twitter"></i></a>
                                  <a class="text-muted pe-3" href="#"><i class="fab fa-instagram"></i></a>
                                  <a class="text-muted" href="#"><i class="fab fa-dribbble"></i></a>
                                </div>
                              </li>
                  
                            </ul>
                  
                          </div>
                  
                        </div>
                  
                      </div>
                  
                    </section>
                  
                  </div>
            </div>
`);


reviews.html(`
     <div class="row d-flex justify-content-center">
              <div class="col-md-10 col-xl-8 text-center">
                <h3 class="mb-4">Reviews</h3>
              </div>
            </div>
          
            <div class="row text-center">
              <div class="col-md-4 mb-5 mb-md-0">
                <div class="d-flex justify-content-center mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                </div>
                <h5 class="mb-3">Maria Smantha</h5>
                <h6 class="text-primary mb-3">${array[id].reviews[0].date}</h6>
                <p class="px-xl-3">
                  <i class="fas fa-quote-left pe-2"></i>${array[id].reviews[0].comment}
                </p>
                <ul class="list-unstyled d-flex justify-content-center mb-0">
              ${generateStars(array[id].reviews[0].rating)}
                </ul>
              </div>
              <div class="col-md-4 mb-5 mb-md-0">
                <div class="d-flex justify-content-center mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                </div>
                <h5 class="mb-3">Lisa Cudrow</h5>
                <h6 class="text-primary mb-3">${array[id].reviews[1].date}</h6>
                <p class="px-xl-3">
                  <i class="fas fa-quote-left pe-2"></i>${array[id].reviews[1].comment}
                </p>
                <ul class="list-unstyled d-flex justify-content-center mb-0">
              ${generateStars(array[id].reviews[1].rating)}
                </ul>
              </div>
              <div class="col-md-4 mb-0">
                <div class="d-flex justify-content-center mb-4">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    class="rounded-circle shadow-1-strong" width="150" height="150" />
                </div>
                <h5 class="mb-3">John Smith</h5>
                <h6 class="text-primary mb-3">${array[id].reviews[2].date}</h6>
                <p class="px-xl-3">
                  <i class="fas fa-quote-left pe-2"></i>${array[id].reviews[2].comment}
                </p>
                <ul class="list-unstyled d-flex justify-content-center mb-0">
               ${generateStars(array[id].reviews[2].rating)}
                </ul>
              </div>
            </div>
    `)



const relatedProducts = array.filter((product,index) => index != id);
// console.log(relatedProducts);
relatedContainer.html(relatedProducts.map((product)=>
 `
   <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div class="card card-detalis">
          <div class="img-container position-relative">
          <img src="${product.images[0]}"
            class="card-img-top" alt="${product.title}" />
          </div>

          <div class="card-body ">
            <div class="d-flex justify-content-between">
              <p class="small"><a href="#!" class="text-muted">${product.category}</a></p>
              <p class="small text-danger"><s>$${(product.price+product.discountPercentage).toFixed(2)}</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">${product.title}</h5>
              <h5 class="text-dark mb-0">$${product.price}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">${product.stock}</span></p>
              <div class="ms-auto text-warning">
                <div class="px-2 bg-danger bg-opacity-75 rounded-2">${product.rating}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
 `).join(""));
