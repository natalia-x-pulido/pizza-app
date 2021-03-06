import PizzaPreview from "../PizzaPreview";
import ToppingsList from "../ToppingsList";
import NumberedStep from "../NumberedStep";
import React, {useState} from "react";


const PizzaMaker = () => {

    const [selectedTopping, setTopping] = useState([]);
    const [pizzaSize, setPizzaSize] = useState("");
    var [isPizzaReady, setPizzaReady] = useState(false);


    return(
        <div className= "pizzaMaker">
            <div className = "pizzaMaker__steps">
                <div className = {`${isPizzaReady != false ? "pizzaMaker__hide" : ""}`}>
                    <div className = "pizzaMaker__step-container">
                        <div className = "pizzaMaker__step-title--container">
                            <NumberedStep num= "1"  pizzaSize = "."/>
                            <h1 className = "pizzaMaker__step-title" >Choose Your Size</h1>
                        </div>
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
                    </div>
                    <div className = "pizzaMaker__step-container">
                        <div className = "pizzaMaker__step-title--container">
                            <NumberedStep num= "2" pizzaSize = {pizzaSize}/>
                            <h1 className = {`pizzaMaker__step-title ${pizzaSize == "" ? "disabled" : ""}`}>Choose Your Toppings</h1>
                        </div>
                        <ToppingsList setTopping = {setTopping} selectedTopping = {selectedTopping} pizzaSize = {pizzaSize} />
                    </div>
                    <div className = "pizzaMaker__step-title--container">
                            <NumberedStep num= "3" pizzaSize = {pizzaSize}/>
                            <h1 className = {`pizzaMaker__step-title ${pizzaSize == "" ? "disabled" : ""}`}>Confirm Your Order</h1>
                    </div>
                    {/* <h1 className = {`pizzaMaker__step-title ${pizzaSize == "" ? "disabled" : ""}`} id="step3"> 3. Confirm your order</h1> */}
                </div>
                    {isPizzaReady != false && pizzaSize != "" && <p className = "pizzaMaker__your_order"> You ordered a {pizzaSize} pizza {`${selectedTopping.length >= 1 ? "with" : "with no toppings"}`} {selectedTopping.map( (item,index) => ( `${index == (selectedTopping.length-1) ? "& " : ", " } ${item } `))}</p>}
                    {isPizzaReady != false && pizzaSize != "" && <p className = "pizzaMaker__next_steps"> You're order is set! If you'd like to make any changes, select the button below. Otherwise, enjoy!</p>}
                    {isPizzaReady != true &&<button className = {`pizzaMaker__make-pizza--button ${pizzaSize == "" ? "disabled": ""}`} disabled = {`${pizzaSize == "" ? "true": ""}`} onClick={() => setPizzaReady(true) }>Make my pizza </button>}
                    {isPizzaReady != false && <button className = "pizzaMaker__make-pizza--edit-button" onClick={() => setPizzaReady(false) }> Edit pizza </button>}
            </div>
            <div className = "pizzaMaker__preview"> 
                <PizzaPreview selectedTopping = {selectedTopping} pizzaSize = {pizzaSize} isPizzaReady = {isPizzaReady}/>
            </div>
        </div>
    )
}

export default PizzaMaker;