import handleData from "./shares/api.js";
const sideBarList = $('#ul');
const endPoint = 'products/categories';
const navCategories = $('#navCategories');



handleData(
    endPoint,
    function(data){
        console.log(data);
        sideBarList.html(data.map(item => `<li id = '${item.slug}'>${item.name}</li>`).join(''));
        navCategories.html(data.map(item => `<li id = '${item.slug}'><a class="dropdown-item" href="#">${item.name}</a></li>`)
        .join(''));
    },
    function(errorr){
        console.log(errorr);
    },
    function(){
        console.log('start');
    },
    function(){
        console.log("end");
    }
)

    $(document).ready(function() {
        $('#toggleSidebar').on('click', function() {
            $('#categories').addClass('show');
        });
    
        $('#closeSidebar').on('click', function() {
            $('#categories').removeClass('show');
        });
    
        const $cartButton = $('#cartButton');
        const $closeCart = $('#closeCart');
        const $cart = $('#cart');
        const $addToCartButtons = $('.addToCartBtn');
        const $cartItems = $('#cartItems');
        const $cartTotal = $('#cartTotal');
    
        let total = 0;
    
        $cartButton.on('click', function() {
            $cart.toggleClass('show');
        });
    
        $closeCart.on('click', function() {
            $cart.removeClass('show');
        });
    
        $addToCartButtons.each(function() {
            $(this).on('click', function() {
                const $item = $(this).closest('.shadow');
                const title = $item.find('h1').text();
                const price = parseFloat($item.find('h3').text().replace('$', ''));
                total += price;
    
                const $li = $('<li></li>').addClass('d-flex justify-content-between border-bottom pb-2 mb-2');
                $li.html(`
                    <span>${title}</span>
                    <span>$${price.toFixed(2)}</span>
                `);
                $cartItems.append($li);
                $cartTotal.text(total.toFixed(2));
            });
        });
    });
    


