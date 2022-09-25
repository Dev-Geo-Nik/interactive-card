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
const arePositiveNumbers = (input) => {
    const numbers = /^[+]?[0-9]+$/;
    if (input.match(numbers)) {
        return true;
    }else{
        return false;
    }

};

const areOnlyCharacter = (input)=>{
        const characters =  /^[A-Za-z]*$/;
        if (input.match(characters)) {
            return true;
        }else{
            return false;
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

let nameInputError = null;
let numberInputError = null;
let expiryMonthError = null;
let expiryYearError = null;
let expiryCvcError = null;

    if ( nameInputElem.value.trim().length  === 0 ) {
        addTextError(".name-error","Can't be blank","insert");
        nameInputError = true
      
    }else{
        nameInputError = false;
        addTextError(".name-error","Can't be blank","remove") 
    }

    if (nameInputError === false) {
            if (!areOnlyCharacter(nameInputElem.value.trim())) {
                addTextError(".name-error","Wrong format,only characters","insert");
                nameInputError = true
            }else{
                nameInputError = false;
                addTextError(".name-error","Can't be blank","remove") 
            }
    }



if ( numberInputElem.value.trim().length  === 0 ) {
    addTextError(".number-error","Can't be blank" ,"insert") 
    handlerClassChange(".number-error","number-error-active","add");
    numberInputError = true;
}else{
    numberInputError = false;
    handlerClassChange(".number-error","number-error-active","remove");
    addTextError(".number-error","Can't be blank" ,"remove") 
}

if (numberInputError === false) {
   
    if (!arePositiveNumbers(numberInputElem.value.trim())) {
        addTextError(".number-error","Wrong format,numbers only" ,"insert") 
        handlerClassChange(".number-error","number-error-active","add");
        numberInputError = true;
    }else{
        numberInputError = false;
        handlerClassChange(".number-error","number-error-active","remove");
        addTextError(".number-error","Can't be blank" ,"remove") 

    }
}








if( expiryMonthElem.value.trim().length  === 0 ){
    addTextError(".month-error","Can't be blank","insert")
    handlerClassChange(".month-error","month-error-active","add");
    expiryMonthError = true;
}else{
    expiryMonthError = false;
    handlerClassChange(".month-error","month-error-active","remove");
    addTextError(".month-error","Can't be blank","remove")
}

if (expiryMonthError === false) {
  
    if (!arePositiveNumbers(expiryMonthElem.value.trim())) {
     
        addTextError(".month-error","Wrong format,numbers only","insert");
        handlerClassChange(".month-error","month-error-active","add");
        expiryMonthError = true
    }else{
        expiryMonthError = false;
        handlerClassChange(".month-error","month-error-active","remove");
        addTextError(".month-error","Can't be blank","remove")
    }
}


if( expiryYearElem.value.trim().length  === 0 ){
    addTextError(".year-error","Can't be blank","insert")
    handlerClassChange(".year-error","year-error-active","add");
    expiryYearError = true;
}else{
    handlerClassChange(".year-error","year-error-active","remove");
    addTextError(".year-error","Can't be blank","remove")
    expiryYearError = false;
}


if (expiryYearError === false) {
   
    if (!arePositiveNumbers(expiryYearElem.value.trim())) {
     
        addTextError(".year-error","Wrong format,numbers only","insert");
        handlerClassChange(".year-error","year-error-active","add");
        expiryYearError = true
    }else{
        expiryYearError = false;
        handlerClassChange(".year-error","year-error-active","remove");
        addTextError(".year-error","Can't be blank","remove")
    }
}


if( cvcInputElem.value.trim().length  === 0 ){
    addTextError(".cvc-error","Can't be blank","insert")
    handlerClassChange(".cvc-error","cvc-error-active","add");
    expiryCvcError = true;
}else{
    handlerClassChange(".cvc-error","year-error-active","remove");
    addTextError(".cvc-error","Can't be blank","remove")
    expiryCvcError = false;
}


if (expiryCvcError === false) {
  
    if (!arePositiveNumbers(cvcInputElem.value.trim())) {
        addTextError(".cvc-error","Wrong format,numbers only","insert");
        handlerClassChange(".cvc-error","year-error-active","add");
        expiryYearError = true
    }else{
        expiryYearError = false;
        handlerClassChange(".cvc-error","year-error-active","remove");
        addTextError(".cvc-error","Can't be blank","remove")
    }
}


    console.log(nameInputError,numberInputError,expiryMonthError,expiryYearError,expiryCvcError)


    if(nameInputError === false && numberInputError ===  false  && expiryMonthError === false && expiryYearError === false && expiryCvcError === false){
        console.log("first")
        const formEl = document.querySelector(".form");
        formEl.style.display = "none";
        const modalSuccess =  document.querySelector(".modal-success");
        modalSuccess.style.display = "block";
        const btnSuccess = document.querySelector(".btn-success");
        btnSuccess.addEventListener("click",()=>{
            nameInputElem.value =""
             numberInputElem.value = ""
             expiryMonthElem.value = ""
             expiryYearElem.value = ""
             cvcInputElem.value = ""
            window.location.reload();
        })
    }

}



const formElem = document.querySelector(".form");

formElem.addEventListener("submit",handleSubmit)
