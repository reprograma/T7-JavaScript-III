const createItens = (item) => {
    return (
        `
        <div class="card">
        <img class="imagem" src=${item.imagem} alt="img" />
        <div>
        <h2>${item.titulo}</h5>
            <p class="ingredientes">
                <strong>Ingredients: </strong>
                ${item.ingredientes}
            </p>
        </div>
        </div>
        `
    )
};