// import "../../public/static/imgs/basil-pieces.png"
const PizzaPreview = params => {
    return(
        <div className = "pizzaPreview">
            
            <div className = {`pizzaPreview__container ${params.pizzaSize}`}>
                <img className = "pizzaPreview__wooden-board" src = "/pizza-board.png"/>
                {params.pizzaSize != "" && <img className = {`pizzaPreview__pizza ${params.pizzaSize}`} src = "/pizza.png"></img>}
                {params.selectedTopping.includes("Chicken") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/Chicken-pieces.png"></img>}
                {params.selectedTopping.includes("Pepperoni") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/pepperoni-pieces.png"></img>}
                {params.selectedTopping.includes("Ham") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/ham-pieces.png"></img>}
                {params.selectedTopping.includes("Sausage") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/sausage-pieces.png"></img>}
                {params.selectedTopping.includes("Bell Peppers") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/bell-pepper-pieces.png"></img>}
                {params.selectedTopping.includes("Mushrooms") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/mushroom-pieces.png"></img>}
                {params.selectedTopping.includes("Pineapple") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/pineapple-pieces.png"></img>}
                {params.selectedTopping.includes("Pineapple") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/pineapple-pieces.png"></img>}
                {params.selectedTopping.includes("Tomato") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/tomato-pieces.png"></img>}
                {params.selectedTopping.includes("Basil") && <img className = {`pizzaPreview__topping ${params.pizzaSize}`} src = "/basil-pieces.png"></img>}
            </div>
           
        </div>
    )
}

export default PizzaPreview;