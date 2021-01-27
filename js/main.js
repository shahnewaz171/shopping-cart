//For Product Increment
const productIncrement = document.getElementById('increment');
productIncrement.addEventListener('click', function(){
    // console.log('hello');
    //for product quantity
    const productQuantity = document.getElementById('quantity').value;
    const quantityNumber = parseFloat(productQuantity);
    const totalQuantity = quantityNumber + 1;
    // console.log(totalQuantity);
    document.getElementById('quantity').value = totalQuantity;

    //for product price
    const itemsPrice = document.getElementById('productPrice').innerText;
    const itemsPriceNumber = parseFloat(itemsPrice);
    const totalPrice = itemsPriceNumber + 1219;
    document.getElementById('productPrice').innerText = totalPrice;

    //for subTotal
    const subTotal = document.getElementById('sub-total').innerText;
    const subTotalNumber = parseFloat(subTotal);
    const subTotalPrice = subTotalNumber + 1219;
    document.getElementById('sub-total').innerText = subTotalPrice;

    //for tax
    const taxPrice = document.getElementById('tax').innerText;
    const taxPriceNumber = parseFloat(taxPrice);
    const totalTax = taxPriceNumber + 1;
    document.getElementById('tax').innerText = totalTax;

    //for Total
    const total = document.getElementById('total').innerText;
    const totalNumber = parseFloat(total);
    const totalAmount = totalNumber + 1219 + 1;
    document.getElementById('total').innerText = totalAmount;
});

//For Product Decrement
const productDecrement = document.getElementById('decrement');
productDecrement.addEventListener('click', function(){
    const productQuantity = document.getElementById('quantity').value;
    const quantityNumber = parseFloat(productQuantity);
    const totalQuantity = quantityNumber - 1;
    // console.log(totalQuantity);
    if(totalQuantity > 0){
        document.getElementById('quantity').value = totalQuantity;
    }
    else if(totalQuantity <= 0){
        return false;
    }
    
    //for product price
    const itemsPrice = document.getElementById('productPrice').innerText;
    const itemsPriceNumber = parseFloat(itemsPrice);
    const totalPrice = itemsPriceNumber - 1219;
    document.getElementById('productPrice').innerText = totalPrice;

    //for subTotal
    const subTotal = document.getElementById('sub-total').innerText;
    const subTotalNumber = parseFloat(subTotal);
    const subTotalPrice = subTotalNumber - 1219;
    document.getElementById('sub-total').innerText = subTotalPrice;

    //for tax
    const taxPrice = document.getElementById('tax').innerText;
    const taxPriceNumber = parseFloat(taxPrice);
    const totalTax = taxPriceNumber - 1;
    document.getElementById('tax').innerText = totalTax;

    //for Total
    const total = document.getElementById('total').innerText;
    const totalNumber = parseFloat(total);
    const totalAmount = totalNumber - 1219 - 1;
    document.getElementById('total').innerText = totalAmount;
});


//For successfully Shopping
const checkBtn = document.getElementById('check-btn');
checkBtn.addEventListener('click', function(){
    const productSec = document.getElementById('product');
    productSec.style.display = 'none';
    const successful = document.getElementById('successful');
    successful.style.display = 'block';
});