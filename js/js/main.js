
import {getManyRequests } from "./shares/api.js";


const requestsConfig = [
    {
        endPoint: 'products/categories',
        success: async (data) => {
            const { default: showCatg } = await import('./features/catgories.js');
            showCatg(data);
        }
    },
    {
        endPoint: 'products/category/beauty',
        success: async (data) => {
            const { default: showProducts } = await import('./features/products.js');
            showProducts(data);
        }
    }
];

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
