const NumberedStep = props => {
    return(
        <div className = {`numberedStep__container ${props.pizzaSize == "" ? "disabled" : ""}`}>
            <h1 className = "numberedStep__number ">{props.num}</h1>
        </div>
    )
}

export default NumberedStep;