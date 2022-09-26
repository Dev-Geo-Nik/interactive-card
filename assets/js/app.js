
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

const domTextHandler = (targetElement, text, action) => {
  const domElem = document.querySelector(targetElement);

  if (action === "insert") {
    domElem.textContent = text;
  }

  if (action === "remove") {
    domElem.textContent = "";
  }
};

const handlerClassChange = (targetElement, className, action) => {
  const domElem = document.querySelector(targetElement);
  if (action === "add") {
    domElem.classList.add(className);
  }
  if (action === "remove") {
    domElem.classList.remove(className);
  }
};


const arePositiveNumbers = (input) => {
  const numbers = /^[+]?[0-9]+$/;
  if (input.match(numbers)) {
    return true;
  } else {
    return false;
  }
};

const areOnlyCharacter = (input) => {
  const characters = /^[A-Za-z]*$/;
  if (input.match(characters)) {
    return true;
  } else {
    return false;
  }
};





const checkForPositiveNumbers = (element,targetErrorElement)=>{
  if (!arePositiveNumbers(element.value.trim())) {
    domTextHandler(targetErrorElement, "Wrong format,numbers only", "insert");
    handlerClassChange(targetErrorElement, "number-error-active", "add");
    return  true;
  } else{
    handlerClassChange(targetErrorElement, "number-error-active", "remove");
    domTextHandler(targetErrorElement, "Can't be blank", "remove");
    return  false;
  }
}



const checkIfInputIsEmpty = (targetElement,targetErrorElem,errorTargetElement) => {
  const domElem = document.querySelector(targetElement);
  
  if (domElem.value.trim().length === 0) {
    domTextHandler(targetErrorElem, "Can't be blank", "insert");
    handlerClassChange(targetErrorElem, errorTargetElement, "add");
    return true;
  }else{
    handlerClassChange(targetElement, errorTargetElement,"remove");
    domTextHandler(targetElement, "Can't be blank", "remove");
    return false
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
 

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

  if (nameInputElem.value.trim().length === 0) {
    domTextHandler(".name-error", "Can't be blank", "insert");
    nameInputError = true;
  } else {
    nameInputError = false;
    domTextHandler(".name-error", "Can't be blank", "remove");
  }

  if (nameInputError === false) {
    if (!areOnlyCharacter(nameInputElem.value.trim())) {
      domTextHandler(".name-error", "Wrong format,only characters", "insert");
      nameInputError = true;
    } else {
      nameInputError = false;
      domTextHandler(".name-error", "Can't be blank", "remove");
    }
  }



  numberInputError =  checkIfInputIsEmpty(".input-number",".number-error","number-error-active")
  
  if (numberInputError === false) {
    numberInputError =  checkForPositiveNumbers(numberInputElem,".number-error")
  }


  expiryMonthError =  checkIfInputIsEmpty(".input-month",".month-error","month-error-active")

  if (expiryMonthError === false) {
    expiryMonthError =  checkForPositiveNumbers(expiryMonthElem,".month-error")
  }

  expiryYearError =  checkIfInputIsEmpty(".input-year",".year-error","year-error-active")

  if (expiryYearError === false) {
    expiryYearError =  checkForPositiveNumbers(expiryYearElem,".year-error")
  }


  expiryCvcError =  checkIfInputIsEmpty(".input-cvc",".cvc-error","cvc-error-active")

  if (expiryYearError === false) {
    expiryCvcError =  checkForPositiveNumbers(cvcInputElem,".cvc-error")
  }






  if (
    nameInputError === false &&
    numberInputError === false &&
    expiryMonthError === false &&
    expiryYearError === false &&
    expiryCvcError === false
  ) {
   
    const formEl = document.querySelector(".form");
    formEl.style.display = "none";
    const modalSuccess = document.querySelector(".modal-success");
    modalSuccess.style.display = "block";

    domTextHandler(".text-card-number","9591 6489 6389 1011","insert");
    domTextHandler(".text-card-name","Felicia leire","insert");
    domTextHandler(".text-card-expiring","09/26","insert");
    domTextHandler(".text-cvc","123","insert");

    const btnSuccess = document.querySelector(".btn-success");
    btnSuccess.addEventListener("click", () => {
      nameInputElem.value = "";
      numberInputElem.value = "";
      expiryMonthElem.value = "";
      expiryYearElem.value = "";
      cvcInputElem.value = "";
      window.location.reload();
    });
  }
};

const formElem = document.querySelector(".form");

formElem.addEventListener("submit", handleSubmit);
