import PizzaPreview from "../PizzaPreview";
import ToppingsList from "../ToppingsList";

const PizzaMaker = () => {
    return(
        <div>
            <div>
                <h1> Step 1. Choose Your Size</h1>
                <h1> Step 2. Choose Your Sauce</h1>
                <h1> Step 3. Choose Your Toppings</h1>
                    <ToppingsList/>
                <h1> Step 4. Verify your order</h1>
            </div>
            <div> 
                <PizzaPreview/>
            </div>
        </div>
    )
}

export default PizzaMaker;