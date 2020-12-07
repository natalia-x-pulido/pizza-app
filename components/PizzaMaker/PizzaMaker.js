import PizzaPreview from "../PizzaPreview";
import ToppingsList from "../ToppingsList";
import React, {useState} from "react";


const PizzaMaker = () => {

    const [selectedTopping, setTopping] = useState([]);
    const [pizzaSize, setPizzaSize] = useState("");
    return(
        <div className= "pizzaMaker">
            <div className = "pizzaMaker__steps">
                <h1 className = "pizzaMaker__step-title" id="step1"> 1. Choose Your Size</h1>
                    <div className = "pizzaMaker__size-container">
                        <button className = "pizzaMaker__size-selector--size" onClick = {() => setPizzaSize("small")}>
                            <h4 className = "pizzaMaker__size-title">Small</h4> 
                            <img className = "pizzaMaker__size-small" src = "/pizza.png"></img>
                        </button>
                        <button className = "pizzaMaker__size-selector--size" onClick = {() => setPizzaSize("medium")}>
                            <h4 className = "pizzaMaker__size-title">Medium</h4> 
                            <img className = "pizzaMaker__size-medium " src = "/pizza.png"></img>
                        </button>
                        <button className = "pizzaMaker__size-selector--size" onClick = {() => setPizzaSize("large")}>
                            <h4 className = "pizzaMaker__size-title">Large</h4> 
                            <img className = "pizzaMaker__size-large" src = "/pizza.png"></img>
                        </button>
                    </div>
                <h1 className = "pizzaMaker__step-title" id="step2"> 2. Choose Your Toppings</h1>
                    <ToppingsList setTopping = {setTopping} selectedTopping = {selectedTopping} />
                <h1 className = "pizzaMaker__step-title" id="step3"> 3. Verify your order</h1>
            </div>
            <div className = "pizzaMaker__preview"> 
                <PizzaPreview selectedTopping = {selectedTopping} pizzaSize = {pizzaSize}/>
            </div>
        </div>
    )
}

export default PizzaMaker;