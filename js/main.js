import showCatg from "./features/catgories.js";
import showProducts from "./features/products.js";
import {getManyRequests } from "./shares/api.js";


const requestsConfig =[
    {
        endPoint :'products/categories',
        success : (data) => showCatg(data)
    },
    {
        endPoint :'products/category/beauty',
        success : (data) => showProducts(data)
    }
]

getManyRequests(
    {
    startLoading: () =>{
        $('.loading-overlay').fadeIn('slow');
    },
    errorHandlle: (err) =>{
        console.log(err);
    },
    stopLoading: () =>{
        $('.loading-overlay').fadeOut('slow')
    },
},
    requestsConfig
)


// --------------------------------------------------------------------------------------------------
