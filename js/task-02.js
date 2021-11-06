const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')
const elOfIngredients = ingredients.map(ingredient => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    item.textContent = ingredient;

    return item;

});
ingredientsEl.append(...elOfIngredients);