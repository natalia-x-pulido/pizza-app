import PizzaPreview from "../PizzaPreview";
import ToppingsList from "../ToppingsList";
import React, {useState} from "react";


const PizzaMaker = () => {

    const [selectedTopping, setTopping] = useState("");

    const handleToppingSelection = (selectedTopping) => {
        setTopping(selectedTopping)
    }
    
    return(
        <div className= "pizzaMaker">
            <div className = "pizzaMaker__steps">
                <h1 className = "pizzaMaker__step-title" id="step1"> 1. Choose Your Size</h1>
                    <div className = "pizzaMaker__size-container">
                        <div className = "pizzaMaker__size-selector--size">
                        <h4 className = "pizzaMaker__size-title">small</h4> 
                        <img className = "pizzaMaker__size-small" src = "/pizza.png"></img>
                        </div>
                        <div className = "pizzaMaker__size-selector--size">
                        <h4 className = "pizzaMaker__size-title">medium</h4> 
                        <img className = "pizzaMaker__size-medium" src = "/pizza.png"></img>
                        </div>
                        <div className = "pizzaMaker__size-selector--size">
                        <h4 className = "pizzaMaker__size-title">large</h4> 
                        <img className = "pizzaMaker__size-large" src = "/pizza.png"></img>
                        </div>
                    </div>
                <h1 className = "pizzaMaker__step-title" id="step2"> 2. Choose Your Toppings</h1>
                    <ToppingsList handleToppingSelection = {handleToppingSelection} />
                <h1 className = "pizzaMaker__step-title" id="step3"> 3. Verify your order</h1>
            </div>
            <div className = "pizzaMaker__preview"> 
                <PizzaPreview/>
            </div>
        </div>
    )
}

export default PizzaMaker;