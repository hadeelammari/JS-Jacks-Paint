function configureListeners() {
    let images = document.getElementsByTagName('img');


    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false);
        document.getElementById(images[i].id).addEventListener('mouseover', removeOpacity, false);
    }
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }

    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)
            break;
        case 'pn2':
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
            break;
        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            break;
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            break;
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            break;
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            break;
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = // select element with corresponding id
            // display price

            let color = // select element with corresponding id
        //display color name
    }

}
