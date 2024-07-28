const sideBarList = $('#ul');
const navCategories = $('#navCategories');

 export default function showCatg(categories) {
    console.log(categories);
    sideBarList.html(categories.map(item => 
        `<li id='car_element'><a href="#" class='categories-list' id='${item.slug}'>${item.name}</a></li>`
    ).join(''));
    navCategories.html(categories.map(item => `<li id='${item.slug}'><a class="dropdown-item " href="#">${item.name}</a></li>`).join(''));
}