document.getElementById("calculatorBtnSection").addEventListener('click', function( event ) 
{
    if ( event.target.classList.contains("operation-btn") ) 
        {

        const operationBtns = document.getElementsByClassName("operation-btn");

        for ( let i  = 0; i < operationBtns.length; i++ ) 
        {
            const currentActiveBtn = document.querySelector(".active-btn");
            currentActiveBtn.classList.remove("active-btn");
            event.target.classList.add("active-btn");
        }
    }
})

document.getElementById("resultBtn").addEventListener('click', function() 
{
    const firstNumberInputValue = document.getElementById("firstNumber").value;
    const lastNumberInputValue = document.getElementById("lastNumber").value;

    const firstNumberFloatValue = parseFloat( document.getElementById("firstNumber").value );
    const lastNumberFloatValue = parseFloat( document.getElementById("lastNumber").value );

    if ( firstNumberInputValue === "" || lastNumberInputValue === "" ) 
    {
        alert("Input value can't be empty!!!");
    } 
    else if ( isNaN( firstNumberFloatValue ) || isNaN( lastNumberFloatValue ) ) 
    {
        alert("Input value most be a number");
    } 
    else 
    {
        // Input fields all condition passed

        const operation = document.querySelector(".active-btn").value;
        // Now we have operation sign, by this we can use if else condition or switch condition.
        let result;
        
        switch( operation ) 
        {
            case "+":
                result = firstNumberFloatValue + lastNumberFloatValue;
                break;
            case "-":
                result = firstNumberFloatValue - lastNumberFloatValue;
                break;
            case "*":
                result = firstNumberFloatValue * lastNumberFloatValue;
                break;
            case "/":
                result = firstNumberFloatValue / lastNumberFloatValue;
                break;
            case "%":
                result = firstNumberFloatValue % lastNumberFloatValue;
                break;
        }
        document.getElementById("calculatorDisplay").value = result;
    }
});