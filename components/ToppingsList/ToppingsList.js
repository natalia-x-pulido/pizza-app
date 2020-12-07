const meatToppings = ["Chicken", "Pepperoni", "Ham", "Sausage"];
const vegToppings = ["Bell Peppers", "Mushrooms", "Pineapple", "Tomato", "Basil"];

 function setToppingSelected (item, selectedTopping, setTopping ) {
    console.log("The selected item is: ", item);
    var newArr = selectedTopping
    if(newArr.includes(item)){
        // newArr.pop(item);
        // console.log( "remove: ", selectedTopping.pop(item) )
        setTopping( selectedTopping.filter(items => items!=item) );
    }
    else{
        // selectedTopping.concat(item);
        // console.log( "concat", selectedTopping.concat(item) )
        setTopping( selectedTopping.concat(item) );
    }
    
}


const ToppingsList = params => {
    return(
        <div>
            <h2 className = "toppingsList__list-title"> Meats</h2>
                {meatToppings.map((item, index) => (
                    <div className = "toppingsList__list-item" key={`mt-${index}`}>
                        <label className = "toppingsList__list-item-group">
                            <input type="checkbox" name = "meatToppings" id={`meat-topping-${item}`} onClick = {() => setToppingSelected(item, params.selectedTopping, params.setTopping)} />
                            <div className = "toppingsList__list-item-label">{item}</div>
                        </label>
                    </div>
                ))}
                
            <h2 className = "toppingsList__list-title"> Vegetables</h2>
                {vegToppings.map((item, index) => (
                    <div className = "toppingsList__list-item" key={`mt-${index}`}>
                        <label className = "toppingsList__list-item-group" >
                            <input type="checkbox" name = {item} id={`veg-topping-${item}`} onClick = {() => setToppingSelected(item, params.selectedTopping, params.setTopping)} />
                            <div className = "toppingsList__list-item-label">{item}</div>
                        </label>
                    </div>
                ))}
        </div>  
    )
}

export default ToppingsList;