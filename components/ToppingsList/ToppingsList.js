const meatToppings = ["Chicken", "Pepperoni", "Ham", "Sausage"];
const vegToppings = ["Bell Peppers", "Mushrooms", "Pineapple", "Tomato", "Basil"];

 function setToppingSelected (item, selectedTopping, setTopping ) {
    if(selectedTopping.includes(item)){
        setTopping( selectedTopping.filter(items => items!=item) );
    }
    else{
        setTopping( selectedTopping.concat(item) );
    }
}


const ToppingsList = params => {
    return(
        <div className = "toppingsList__container">
            <h2 className = {`toppingsList__list-title ${params.pizzaSize == "" ? "disabled" : ""}`}> Meats</h2>
                {meatToppings.map((item, index) => (
                    <div className = "toppingsList__list-item" key={`mt-${index}`}>
                        <label className = "toppingsList__list-item-group">
                            <input type="checkbox" name = "meatToppings" id={`meat-topping-${item}`} disabled = {`${params.pizzaSize == "" ? "disabled" : ""}`} onClick = {() => setToppingSelected(item, params.selectedTopping, params.setTopping)}  />
                            <div className = {`toppingsList__list-item-label ${params.pizzaSize == "" ? "disabled" : ""}`}>{item}</div>
                        </label>
                    </div>
                ))}
                
            <h2 className = {`toppingsList__list-title ${params.pizzaSize == "" ? "disabled" : ""}`}> Vegetables</h2>
                {vegToppings.map((item, index) => (
                    <div className = "toppingsList__list-item" key={`mt-${index}`}>
                        <label className = "toppingsList__list-item-group" >
                            <input type="checkbox" name = {item} id={`veg-topping-${item}`} disabled = {`${params.pizzaSize == "" ? "disabled" : ""}`} onClick = {() => setToppingSelected(item, params.selectedTopping, params.setTopping)} />
                            <div className = {`toppingsList__list-item-label ${params.pizzaSize == "" ? "disabled" : ""}`} >{item}</div>
                        </label>
                    </div>
                ))}
        </div>  
    )
}

export default ToppingsList;