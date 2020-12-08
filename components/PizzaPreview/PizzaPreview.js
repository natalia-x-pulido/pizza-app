// import "../../public/static/imgs/basil-pieces.png"
const PizzaPreview = params => {
    return(
        <div className = "pizzaPreview">
            
            <div className = {`pizzaPreview__container ${params.pizzaSize}  ${params.pizzaSize}`}>
                <img className = {`pizzaPreview__surface ${params.isPizzaReady == true ? "box": "wooden-board" }`} src = {`${params.isPizzaReady == true ? "/pizza-box-open.png":"/pizza-board.png"}`}/>
                {params.pizzaSize == "" && <img className = {`pizzaPreview__dough ${params.pizzaSize}`} src = "/dough.png"></img>}
                {params.pizzaSize != "" && <img className = {`scale-up ${params.pizzaSize} ${params.isPizzaReady == true ? "pizzaPreview__pizza-in-box": "pizzaPreview__pizza" } `} src = "/pizza.png"></img>}
                {params.selectedTopping.includes("Chicken") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping" }`} src = "/Chicken-pieces.png"></img>}
                {params.selectedTopping.includes("Pepperoni") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping" }`} src = "/pepperoni-pieces.png"></img>}
                {params.selectedTopping.includes("Ham") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/ham-pieces.png"></img>}
                {params.selectedTopping.includes("Sausage") && <img className = {` fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/sausage-pieces.png"></img>}
                {params.selectedTopping.includes("Bell Peppers") && <img className = {` fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping" }`} src = "/bell-pepper-pieces.png"></img>}
                {params.selectedTopping.includes("Mushrooms") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/mushroom-pieces.png"></img>}
                {params.selectedTopping.includes("Pineapple") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/pineapple-pieces.png"></img>}
                {params.selectedTopping.includes("Pineapple") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/pineapple-pieces.png"></img>}
                {params.selectedTopping.includes("Tomato") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/tomato-pieces.png"></img>}
                {params.selectedTopping.includes("Basil") && <img className = {`fade-in ${params.pizzaSize} ${params.isPizzaReady != false ? "pizzaPreview__topping-in-box": "pizzaPreview__topping " }`} src = "/basil-pieces.png"></img>}
            </div>           
        </div>
    )
}

export default PizzaPreview;