// import "../../public/static/imgs/basil-pieces.png"
const PizzaPreview = params => {
    return(
        <div className = "pizzaPreview">
            <div className = "pizzaPreview__container">
                <img className = "pizzaPreview__pizza" src = "/pizza.png"></img>
                {params.selectedTopping.includes("Chicken") && <img className = "pizzaPreview__topping" src = "/Chicken-pieces.png"></img>}
                {params.selectedTopping.includes("Pepperoni") && <img className = "pizzaPreview__topping" src = "/pepperoni-pieces.png"></img>}
                {params.selectedTopping.includes("Ham") && <img className = "pizzaPreview__topping" src = "/ham-pieces.png"></img>}
                {params.selectedTopping.includes("Sausage") && <img className = "pizzaPreview__topping" src = "/sausage-pieces.png"></img>}
                {params.selectedTopping.includes("Bell Peppers") && <img className = "pizzaPreview__topping" src = "/bell-pepper-pieces.png"></img>}
                {params.selectedTopping.includes("Mushrooms") && <img className = "pizzaPreview__topping" src = "/mushroom-pieces.png"></img>}
                {params.selectedTopping.includes("Pineapple") && <img className = "pizzaPreview__topping" src = "/pineapple-pieces.png"></img>}
                {params.selectedTopping.includes("Pineapple") && <img className = "pizzaPreview__topping" src = "/pineapple-pieces.png"></img>}
                {params.selectedTopping.includes("Tomato") && <img className = "pizzaPreview__topping" src = "/tomato-pieces.png"></img>}
                {params.selectedTopping.includes("Basil") && <img className = "pizzaPreview__topping" src = "/basil-pieces.png"></img>}
            </div>
           
        </div>
    )
}

export default PizzaPreview;