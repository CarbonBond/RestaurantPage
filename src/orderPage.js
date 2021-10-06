
function loadMenu() {
    const bodyContent = document.querySelector('.bodyContent');
    const order = document.querySelector('.tabOrder');
    order.classList.add('underline');

    const orderContainer = document.createElement('div');
    orderContainer.classList.add('orderContainer', "shadowCover", "shadowText");

    bodyContent.appendChild(orderContainer);


    const orderSelection = document.createElement('div');
    orderSelection.classList.add('orderSelection');
    const orderPizza = document.createElement('div');
    orderPizza.classList.add('orderPizza');

    orderContainer.appendChild(orderPizza);

    //Pizza Size
    const pizzaSizes = {Kid: '6"', Small: '10"', Medium: '14"', Large: '18"'}

    const pizzaSize = document.createElement('div');
    pizzaSize.classList.add('pizzaOption');
    orderPizza.appendChild(pizzaSize);
    const pizzaSizeTitle = document.createElement('p');
    pizzaSizeTitle.textContent = "Size";
    pizzaSize.appendChild(pizzaSizeTitle);
    const pizzaSizeSel = document.createElement('div');
    pizzaSizeSel.classList.add('pizza');
    pizzaSize.appendChild(pizzaSizeSel);

    for(const pizza in pizzaSizes){
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('pizzaDiv',  'pizzaSize')
        pizzaDiv.textContent = `${pizza}: ${pizzaSizes[pizza]}`
        pizzaSizeSel.appendChild(pizzaDiv);
    }
    const pizzaSizeList = document.querySelectorAll('.pizzaSize');
    pizzaSizeList.forEach(item => {
        item.addEventListener('click', () => {
            pizzaSizeList.forEach(oldItem => {
                oldItem.classList.remove('pizzaSelected');
            })
            item.classList.toggle('pizzaSelected');
        })
    })


    //Pizza Type
    const pizzaTypes = {Classic: "Classic", CheeseCrust: "Cheesy Crust", Desert: "Desert"};
    const pizzaType = document.createElement('div');
    pizzaType.classList.add('pizzaOption');
    orderPizza.appendChild(pizzaType);
    const pizzaTypeTitle = document.createElement('p');
    pizzaTypeTitle.textContent = "Type";
    pizzaType.appendChild(pizzaTypeTitle);
    const pizzaTypeSel = document.createElement('div');
    pizzaTypeSel.classList.add('pizza');
    pizzaType.appendChild(pizzaTypeSel); 


    for(const pizza in pizzaTypes){
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('pizzaDiv',  'pizzaType')
        pizzaDiv.textContent = `${pizzaTypes[pizza]}`
        pizzaTypeSel.appendChild(pizzaDiv);
    }
    const pizzaTypeList = document.querySelectorAll('.pizzaType');
    pizzaTypeList.forEach(item => {
        item.addEventListener('click', () => {
            pizzaTypeList.forEach(oldItem => {
                oldItem.classList.remove('pizzaSelected');
            })
            item.classList.toggle('pizzaSelected');
        })
    })

    const pizzaTopping = document.createElement('div');
    pizzaTopping.classList.add('pizzaOption');
    orderPizza.appendChild(pizzaTopping);
    const pizzaToppingTitle = document.createElement('p');
    pizzaToppingTitle.textContent = "Toppings";
    pizzaTopping.appendChild(pizzaToppingTitle);
    const pizzaToppingSel = document.createElement('div');
    pizzaToppingSel.classList.add('pizzaTopping');
    pizzaTopping.appendChild(pizzaToppingSel);


    const toppingList = {Pepperoni: 0, Sausage: 0, Pineapple: 0, Jalapeno: 0}

    for(const toppingItem in toppingList){
        const toppingContainer = document.createElement('div');
        toppingContainer.classList.add('toppingContainer');
        const toppingAdd = document.createElement('div');
        toppingAdd.classList.add('toppingMod', 'add');
        toppingAdd.textContent = "+";
        const topping = document.createElement('div');
        topping.classList.add('topping', `${toppingItem}`);
        topping.textContent = `${toppingItem}: ${toppingList[toppingItem]}x`;
        const toppingSub = document.createElement('div');
        toppingSub.classList.add('toppingMod', 'sub');
        toppingSub.textContent = "-";

        toppingAdd.addEventListener('click', () => {
            const top = toppingAdd.previousElementSibling;
            toppingList[(top.classList[1])] += 1;
            top.textContent = `${toppingItem}: ${toppingList[toppingItem]}x`;
        })

        toppingSub.addEventListener('click', () => {
            const top = toppingSub.nextElementSibling;
            if(toppingList[(top.classList[1])]){
                toppingList[(top.classList[1])] -= 1;
            }
            top.textContent = `${toppingItem}: ${toppingList[toppingItem]}x`;
        })
    
        toppingContainer.appendChild(toppingSub);
        toppingContainer.appendChild(topping);
        toppingContainer.appendChild(toppingAdd);
    
        pizzaToppingSel.appendChild(toppingContainer);
    }


};

export default loadMenu;