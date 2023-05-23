menu = [
    {
        id: 1,
        title: "hamburger",
        category: 'lunch',
        price: 20,
        img: `./images/burger.jpg`,
        desc:`A beef burger with cheese, salad and pickles`,
    },
   
    {
        id: 2,
        title: "english breakfast",
        category: 'breakfast',
        price: 30,
        img: `./images/english-breakfast.jpg`,
        desc:`A classic English breakfast with sausages, hashbrowns, baked beans, mushrooms, grilled tomato and 2 slices of sourdough bread`,
    },
    {
        id: 3,
        title: "milkshake",
        category: 'drink',
        price: 8,
        img: `./images/milkshake.jpg`,
        desc:`chocolate, strawberry or vanilla with two scoops of icecream`,
    },
    {
        id: 4,
        title: "steak dinner",
        category: 'dinner',
        price: 45,
        img: `./images/steak-dinner.jpg`,
        desc:`400g steak, with chips and veg with a side salad`,
    },
    {
        id: 5,
        title: "chicken caesar salad",
        category: 'lunch',
        price: 20,
        img: `./images/caesar-salad.jpg`,
        desc:`chicken breast, with crisp cos lettuce, bacon, poached egg, and aioli dressing`,
    },
    {
        id: 6,
        title: "french toast",
        category: 'breakfast',
        price: 12,
        img: `./images/french-toast.jpg`,
        desc:`french toast topped with cinnnamon, berries banana and syrip`,
    },
    {
        id: 7,
        title: "orange juice",
        category: 'drink',
        price: 8,
        img: `./images/orange-juice.jpg`,
        desc:`locally sourced orange juice`,
    },
    {
        id: 8,
        title: "pancakes",
        category: 'breakfast',
        price: 10,
        img: `./images/pancakes.jpg`,
        desc:`home made fluffy pancakes topped with berries and syrip`,
    },
    {
        id: 9,
        title: "spaghettit bolognase",
        category: 'dinner',
        price: 30,
        img: `./images/spaghetti-bolognase.jpg`,
        desc:`italian spaghetti noodles with home made meatballs and sauce garnished with oregano and parmasan cheese`,
    },
]
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container")

// load items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu);
  displayMenuButtons();

});

function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        // console.log(item)
        return ` <article class="menu-item">
        <img class="photo" src=${item.img} alt=${item.title} />
        <header>
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
          </div>
          <div class="underline2"></div>
          <p>
          ${item.desc}
          </p>
          </article>
          </header>`
    }).join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
           values.push(item.category); 
        }
        return values;
    },
    ["all"]
    );
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    // filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                // console.log(menuItem.category)
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if(category === 'all'){
                displayMenuItems(menu)
            } else{
                displayMenuItems(menuCategory);
            }
        });
    });
};
