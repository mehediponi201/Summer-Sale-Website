
let previousValue=0;
// 1st card
function getFirstCardName() {
    const firstCardName = getInputName('first-card-name');
    setElementInnerText('first-item', 1.+'. '+firstCardName);
    const previousValue = document.getElementById('total-price');
    const previousPrice = parseFloat(previousValue.innerText);
    const firstElementPrice = priceOfEveryElement('first-price'); 
    setPrice('total-price',firstElementPrice + previousPrice); 
    const priceValue = firstElementPrice + previousPrice;
    console.log(priceValue);
    const makeButton = document.getElementById('make-purchase');
    if(priceValue>0){
     // makeButton.disabled = false;
     makeButton.removeAttribute('disabled');
      makeButton.style.backgroundColor='pink';
    } 
     
   // 1st condition 
   document.getElementById('myButton').addEventListener('click', function () { 
    const button = document.getElementById('input-field');
    const buttonValue = button.value;
    const buttonTest = document.getElementById("myButton");
    if (priceValue>=200 && buttonValue == 'SELL200') { 
        buttonTest.disabled = false;
        buttonTest.style.backgroundColor='pink';
        const valueDiscount = document.getElementById('discount');
        const discount = parseFloat(valueDiscount.innerText);
        const totalDiscount = priceValue*0.2;
        //console.log(totalDiscount); 
        setDiscountValue('discount',totalDiscount);
        const lestTotal = document.getElementById('total'); 
        const bakiTotal = parseFloat(lestTotal.innerText);
        const bakiValue = priceValue - totalDiscount;
        setTotalValue('total',bakiValue); 
    }
    else {
        buttonTest.disabled = true;
    }
});  
} 

 // 2nd card
function getSecondCardName(){
    const secondCardName = getInputName('second-card-name');
    setElementInnerText('second-item',2.+'. '+secondCardName); 
    const previousValue = document.getElementById('total-price');
    const previousPrice = parseFloat(previousValue.innerText);
    const secondElementPrice = priceOfEveryElement('second-price'); 
    setPrice('total-price',secondElementPrice+previousPrice); 
    const priceValue = secondElementPrice+previousPrice;
    const makeButton = document.getElementById('make-purchase');
        if(priceValue>0){
          makeButton.disabled = false;
          makeButton.style.backgroundColor='pink';
        } 
        else{
            makeButton.disabled = true; 
        } 
    // 1st condition
   document.getElementById('myButton').addEventListener('click', function () { 
    const button = document.getElementById('input-field');
    const buttonValue = button.value;
    const buttonTest = document.getElementById("myButton");
    if (priceValue>=200 && buttonValue == 'SELL200') { 
        buttonTest.disabled = false;
        buttonTest.style.backgroundColor='pink';
        const valueDiscount = document.getElementById('discount');
        const discount = parseFloat(valueDiscount.innerText);
        const totalDiscount = priceValue*0.2;
        //console.log(totalDiscount); 
        setDiscountValue('discount',totalDiscount);
        const lestTotal = document.getElementById('total'); 
        const bakiTotal = parseFloat(lestTotal.innerText);
        const bakiValue = priceValue - totalDiscount;
        setTotalValue('total',bakiValue); 
    }
    else {
        buttonTest.disabled = true;
    }
});  
    
} 
// 3rd card
function getThirdCardName(){
    const thirdCardName = getInputName('third-card-name');
    setElementInnerText('third-item',3.+'. '+thirdCardName);
    const previousValue = document.getElementById('total-price');
    const previousPrice = parseFloat(previousValue.innerText);
    const thirdElementPrice = priceOfEveryElement('third-price');
    setPrice('total-price',thirdElementPrice+previousPrice); 
    const priceValue = thirdElementPrice+previousPrice; 
    console.log(priceValue);
    // 3rd card e Button disable theke enable korer code
    const makeButton = document.getElementById('make-purchase');
    if(priceValue>0){
        makeButton.disabled = false;
        makeButton.style.backgroundColor='pink';
      } 
      else{
          makeButton.disabled = true; 
      } 
     // 1st condition
   document.getElementById('myButton').addEventListener('click', function () { 
    const button = document.getElementById('input-field');
    const buttonValue = button.value;
    const buttonTest = document.getElementById("myButton");
    if (priceValue>=200 && buttonValue == 'SELL200') { 
        buttonTest.disabled = false;
        buttonTest.style.backgroundColor='pink';
        const valueDiscount = document.getElementById('discount');
        const discount = parseFloat(valueDiscount.innerText);
        const totalDiscount = priceValue*0.2;
        //console.log(totalDiscount); 
        setDiscountValue('discount',totalDiscount);
        const lestTotal = document.getElementById('total'); 
        const bakiTotal = parseFloat(lestTotal.innerText);
        const bakiValue = priceValue - totalDiscount;
        setTotalValue('total',bakiValue); 
    }
    else {
        buttonTest.disabled = true;
    }
});  
} 
// 4th card 
function getFourthCardName(){
    const fourthCardName = getInputName('fourth-card-name');
    setElementInnerText('fourth-item',4.+'. '+fourthCardName); 
    const previousValue = document.getElementById('total-price');
    const previousPrice = parseFloat(previousValue.innerText);
    const fourthElementPrice = priceOfEveryElement('fourth-price');
    setPrice('total-price',fourthElementPrice+previousPrice);
    const priceValue = fourthElementPrice+previousPrice; 
    const makeButton = document.getElementById('make-purchase');
    if(priceValue>0){
      makeButton.disabled = false;
      makeButton.style.backgroundColor='pink';
    } 
    else{
        makeButton.disabled = true; 
    } 
    // 1st condition
   document.getElementById('myButton').addEventListener('click', function () { 
    const button = document.getElementById('input-field');
    const buttonValue = button.value;
    const buttonTest = document.getElementById("myButton");
    if (priceValue>=200 && buttonValue == 'SELL200') { 
        buttonTest.disabled = false;
        buttonTest.style.backgroundColor='pink';
        const valueDiscount = document.getElementById('discount');
        const discount = parseFloat(valueDiscount.innerText);
        const totalDiscount = priceValue*0.2;
        //console.log(totalDiscount); 
        setDiscountValue('discount',totalDiscount);
        const lestTotal = document.getElementById('total'); 
        const bakiTotal = parseFloat(lestTotal.innerText);
        const bakiValue = priceValue - totalDiscount;
        setTotalValue('total',bakiValue); 
    }
    else {
        buttonTest.disabled = true;
    }
});  

} 
//5th card 
function getFifthCardName(){
    const fifthCardName = getInputName('fifth-card-name');
    setElementInnerText('fifth-item',5.+'. '+fifthCardName);
    const previousValue = document.getElementById('total-price');
    const previousPrice = parseFloat(previousValue.innerText);
    const fifthElementPrice = priceOfEveryElement('fifth-price');
    setPrice('total-price',fifthElementPrice+previousPrice);
    const priceValue = fifthElementPrice+previousPrice;
    const makeButton = document.getElementById('make-purchase');
        if(priceValue>0){
          makeButton.disabled = false;
          makeButton.style.backgroundColor='pink';
        } 
        else{
            makeButton.disabled = true; 
        } 
    // 1st condition
   document.getElementById('myButton').addEventListener('click', function () { 
    const button = document.getElementById('input-field');
    const buttonValue = button.value;
    const buttonTest = document.getElementById("myButton");
    if (priceValue>=200 && buttonValue == 'SELL200') { 
        buttonTest.disabled = false;
        buttonTest.style.backgroundColor='pink';
        const valueDiscount = document.getElementById('discount');
        const discount = parseFloat(valueDiscount.innerText);
        const totalDiscount = priceValue*0.2;
        //console.log(totalDiscount); 
        setDiscountValue('discount',totalDiscount);
        const lestTotal = document.getElementById('total'); 
        const bakiTotal = parseFloat(lestTotal.innerText);
        const bakiValue = priceValue - totalDiscount;
        setTotalValue('total',bakiValue); 
    }
    else {
        buttonTest.disabled = true;
    }
});  

} 
// 6th Card 
function getSixthCardName(){
    const sixthCardName = getInputName('sixth-card-name');
    setElementInnerText('sixth-item',6.+'. '+sixthCardName);
    const previousValue = document.getElementById('total-price');
    const previousPrice = parseFloat(previousValue.innerText);
    const sixthElementPrice = priceOfEveryElement('sixth-price');
    setPrice('total-price',sixthElementPrice+previousPrice);
    const priceValue = sixthElementPrice+previousPrice; 
    const makeButton = document.getElementById('make-purchase');
    if(priceValue>0){
      makeButton.disabled = false;
      makeButton.style.backgroundColor='pink';
    } 
    else{
        makeButton.disabled = true; 
    } 
    // 1st condition
   document.getElementById('myButton').addEventListener('click', function () { 
    const button = document.getElementById('input-field');
    const buttonValue = button.value;
    const buttonTest = document.getElementById("myButton");
    if (priceValue>=200 && buttonValue == 'SELL200') { 
        buttonTest.disabled = false;
        buttonTest.style.backgroundColor='pink';
        const valueDiscount = document.getElementById('discount');
        const discount = parseFloat(valueDiscount.innerText);
        const totalDiscount = priceValue*0.2;
        //console.log(totalDiscount); 
        setDiscountValue('discount',totalDiscount);
        const lestTotal = document.getElementById('total'); 
        const bakiTotal = parseFloat(lestTotal.innerText);
        const bakiValue = priceValue - totalDiscount;
        setTotalValue('total',bakiValue); 
    }
    else {
        buttonTest.disabled = true;
    }
});  

}


// reUsable Function to get cardName 
function getInputName(inputName) {
    const cardName = document.getElementById(inputName);
    const card = cardName.innerText;
    return card;
}
// reUsable setValue function
function setElementInnerText(elementId, name) {
    const element = document.getElementById(elementId);
    element.innerText = name;
}

// reUsable function to get price of every element 
function priceOfEveryElement(priceId){ 
    const price = document.getElementById(priceId);
    const priceValue = parseFloat(price.innerText);
    return priceValue;
} 
// reUsable function to set the totalPrice 
function setPrice(priceId,elementPrice){ 
    const setTotal = document.getElementById(priceId);
    const setTotalPrice = Number(setTotal.innerText);
    setTotal.innerText = elementPrice;
} 
// reUsable Function for Discount
function setDiscountValue(elementId,discountElement){
    const element = document.getElementById(elementId);
    element.innerText = discountElement;
} 
// reUsable function for Total value 
function setTotalValue(elementId,lestTotal){
  const element = document.getElementById(elementId); 
  element.innerText = lestTotal;
}
