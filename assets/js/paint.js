// The first thing i did was the easy part which was declaring the colorName and Price variables for each case and invoking the updatePrice() function found at the bottom of the file

// next i configured the event listeners

// finally i set up the opacity functions by using the classList property and .add .contain .remove methods in order to modify the classes

function configureListeners() {
    // this creates an array of images
    let images = document.getElementsByTagName('img');
    // here we are looping through the array of images and adding an event listener to each
    for (var i = 0; i < images.length; i++) {
         // event listeners can take three parameters 1.event 2.function 3.boolean value
        images[i].addEventListener('mouseover', addOpacity, false);
        images[i].addEventListener('mouseout', removeOpacity, false);
    }
}

function addOpacity(event) {
    // this if statement is using the classList property to check if it does not (!) .contains 'dim'
    if (!this.classList.contains('dim')) {
        // if it does not (!) then .add 'dim'
        this.classList.add('dim');
    }
    // this function adds the text we see which displays the color and price
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    // this function is similar but it removes dim
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }
    let element = document.getElementById('color-price');
    // this creates an empty string for the price and color info to disappear when 'mouseout'
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            // This is where i started
            // we can inspect the HTML to know that pn1 is the id associated with the lime green box
            // we assign the variables and then pass them through the updatePrice() function for each case
            price = '$14.99';
            colorName = 'Lime Green';
            updatePrice(colorName, price);
            break;
        case 'pn2':
            price = '$11.14';
            colorName = 'Medium Brown';
            updatePrice(colorName, price);
            break;
        case 'pn3':
            price = '$22.99';
            colorName = 'Royal Blue';
            updatePrice(colorName, price);
            break;
        case 'pn4':
            price = '$4.99';
            colorName = 'Solid Black';
            updatePrice(colorName, price);
            break;
        case 'pn5':
            price = '$8.22';
            colorName = 'Solid Cyan';
            updatePrice(colorName, price);
            break;
        case 'pn6':
            price = '$11.99';
            colorName = 'Solid Purple';
            updatePrice(colorName, price);
            break;
        case 'pn7':
            price = '$13.42';
            colorName = 'Solid Red';
            updatePrice(colorName, price);
            break;
        case 'pn8':
            price = '$21.98';
            colorName = 'Solid White';
            updatePrice(colorName, price);
            break;
        case 'pn9':
            price = '$14.99';
            colorName = 'Solid Yellow';
            updatePrice(colorName, price);
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;

        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
}
