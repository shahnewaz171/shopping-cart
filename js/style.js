//Another way use function
//Use function
// document.getElementById('increment').addEventListener('click', function(){
//     handleProductChange(true);
// });

// document.getElementById('decrement').addEventListener('click', function(){
//     handleProductChange(false);
// });


function handleProductChange(product, isIncrement){
    const productQuantity = document.getElementById(product + '-quantity');
    const productQuantityNumber = parseInt(productQuantity.value);
    // const totalQuantity = productQuantityNumber - 1;
    let totalQuantity = productQuantityNumber;
    if(isIncrement == true){
        totalQuantity = productQuantityNumber + 1;
    }
    if(isIncrement == false && totalQuantity > 0){
        totalQuantity = productQuantityNumber - 1;
    }
    productQuantity.value = totalQuantity;
    //For product Price
    // const totalProductPrice = totalQuantity * 59;
    let totalProductPrice = 0;
    if(product == 'phone'){
        totalProductPrice = totalQuantity * 1219;
    }
    if(product == 'case'){
        totalProductPrice = totalQuantity * 59;
    }
    document.getElementById(product + '-price').innerText = totalProductPrice;
    
    calculateTotal();
}

function calculateTotal(){
    // const phoneInput = document.getElementById('phone-quantity');
    // const phoneInputNumber = parseInt(phoneInput.value);
    const phoneInputNumber = getInputValue('phone');
    const caseInputNumber = getInputValue('case');
    
    const subTotalPrice = phoneInputNumber * 1219 + caseInputNumber * 59;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const total = subTotalPrice + tax;
    document.getElementById('total-amount').innerText = total;
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-quantity');
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;

}


// //Use function
// document.getElementById('product-increment').addEventListener('click', function(){
//     handleProductChange(true);
// });

// document.getElementById('product-decrement').addEventListener('click', function(){
//     handleProductChange(false);
// });

// function handleProductChange(isIncrement){
//     const productQuantity = document.getElementById('phone-quantity');
//     const productQuantityNumber = parseInt(productQuantity.value);
//     // const totalQuantity = productQuantityNumber - 1;
//     let totalQuantity = productQuantityNumber;
//     if(isIncrement == true){
//         totalQuantity = productQuantityNumber + 1;
//     }
//     if(isIncrement == false && totalQuantity > 0){
//         totalQuantity = productQuantityNumber - 1;
//     }
//     productQuantity.value = totalQuantity;
//     //For Product Price
//     const totalProductPrice = totalQuantity * 1219;
//     document.getElementById('phone-price').innerText = totalProductPrice;
// }



// //For Increment
// document.getElementById('product-increment').addEventListener('click', function(){
//     const productQuantity = document.getElementById('phone-quantity');
//     const productQuantityNumber = parseInt(productQuantity.value);
//     const totalQuantity = productQuantityNumber + 1;
//     productQuantity.value = totalQuantity;
//     //For Product Price
//     const totalProductPrice = totalQuantity * 1219;
//     document.getElementById('phone-price').innerText = totalProductPrice;
// });

// //For Decrement
// document.getElementById('product-decrement').addEventListener('click', function(){
//     const productQuantity = document.getElementById('phone-quantity');
//     const productQuantityNumber = parseInt(productQuantity.value);
//     const totalQuantity = productQuantityNumber - 1;
//     productQuantity.value = totalQuantity;
//     //For Product Price
//     const totalProductPrice = totalQuantity * 1219;
//     document.getElementById('phone-price').innerText = totalProductPrice;
// });
