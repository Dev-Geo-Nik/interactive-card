console.log("eo")
/*
 1 check for empty inputs 
2 The card number, expiry date, or CVC fields are in the wrong format
3View the optimal layout depending on their device's screen size
See hover, active, and focus states for interactive elements on the page

- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state

*/


const addTextError = (targetElement, text ,action) => {
    const domElem = document.querySelector(targetElement);

    if (action === "insert") {
        domElem.textContent = text;
    }

    if (action === "remove") {
        domElem.textContent = "";
    }
};

const handlerClassChange = (targetElement,className,action) =>{
    const domElem = document.querySelector(targetElement);
    if (action === "add") {
        domElem.classList.add(className);
        
    }
    if (action === "remove") {
        domElem.classList.remove(className);
        
    }
}


// const  areInputsEmpty = (inputs) =>{
//     inputs.forEach(input => { 
//         if ( input.value.trim().length  === 0 ) {
//             console.log(input.className )
        
//             addTextError(`.${input.className}`,"Can't be blank");
//         }
//     });
// }


const handleSubmit = (e) => {
 e.preventDefault();
 console.log("click")

 const nameInputElem = document.querySelector(".input-name");
 const numberInputElem = document.querySelector(".input-number");
 const expiryMonthElem = document.querySelector(".input-month");
 const expiryYearElem = document.querySelector(".input-year");
 const cvcInputElem = document.querySelector(".input-cvc");

    const nameInputError = nameInputElem.value.trim().length  === 0 ?     addTextError(".name-error","Can't be blank","insert")  : null;
if (nameInputError === null ) {
    addTextError(".name-error","Can't be blank","remove") 
}

if ( numberInputElem.value.trim().length  === 0 ) {
    addTextError(".number-error","Can't be blank" ,"insert") 
    handlerClassChange(".number-error","number-error-active","add");
}else{
    handlerClassChange(".number-error","number-error-active","remove");
    addTextError(".number-error","Can't be blank" ,"remove") 
}


if( expiryMonthElem.value.trim().length  === 0 ){
    addTextError(".month-error","Can't be blank","insert")
    handlerClassChange(".month-error","month-error-active","add");
}else{
    handlerClassChange(".month-error","month-error-active","remove");
    addTextError(".month-error","Can't be blank","remove")
}


if( expiryYearElem.value.trim().length  === 0 ){
    addTextError(".year-error","Can't be blank","insert")
    handlerClassChange(".year-error","year-error-active","add");
}else{
    handlerClassChange(".year-error","year-error-active","remove");
    addTextError(".year-error","Can't be blank","remove")
 
}

 expiryYearElem.value.trim().length  === 0 ? addTextError(".year-error","Can't be blank") : null
  


}



const formElem = document.querySelector(".form");

formElem.addEventListener("submit",handleSubmit)
