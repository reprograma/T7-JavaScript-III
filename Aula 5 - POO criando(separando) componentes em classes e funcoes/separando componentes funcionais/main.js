let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];


let getNav = document.querySelector('nav');
getNav.innerHTML += createNavbar();

let sectionCards = document.querySelector('.cards');
resultados.map((result) => {
    sectionCards.innerHTML += createItens(result);
});
