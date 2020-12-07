import PizzaPreview from "../PizzaPreview";
import ToppingsList from "../ToppingsList";

const PizzaMaker = () => {
    return(
        <div className= "pizzaMaker">
            <div className = "pizzaMaker__steps">
                <h1 className = "pizzaMaker__step-title" id="step1"> 1. Choose Your Size</h1>
                <h1 className = "pizzaMaker__step-title" id="step2"> 2. Choose Your Toppings</h1>
                    <ToppingsList/>
                <h1 className = "pizzaMaker__step-title" id="step3"> 3. Verify your order</h1>
            </div>
            <div className = "pizzaMaker__preview"> 
                <PizzaPreview/>
            </div>
        </div>
    )
}

export default PizzaMaker;