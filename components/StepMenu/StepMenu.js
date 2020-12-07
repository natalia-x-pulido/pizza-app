
const StepMenu = () => {
    return(
        <nav className = "stepMenu">
            <ul className= "stepMenu__list">
                <li><a href = "#step1" className = "stepMenu__menuItem" >1. Size</a></li>
                <li><a href = "#step2" className = "stepMenu__menuItem" >2. Toppings</a></li>
                <li><a href = "#step3" className = "stepMenu__menuItem" >3. Verify</a></li>           
            </ul>
        </nav>
    )
}

export default StepMenu;