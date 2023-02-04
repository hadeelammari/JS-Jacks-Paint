function configureListeners() {
    let images = document.getElementsByTagName('img');


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
        // iterate over images and add mouseover event listeners      
    } 
}
// i'm not really sure if this part worked correctly, as i didn't notice the size of the color images changing.  I'm not sure if they were supposed to though
function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
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
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)        
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '$12.99'
            colorName = 'Med Brown'
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = '$11.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = '$14.99'
            colorName = 'Bright Red'
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = '$9.99'
            colorName = 'Solid White'
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = '$15.99'
            colorName = 'Solid Black'
            updatePrice(colorName, price)    
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = '$8.99'
            colorName = 'Med Blue'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = '$16.99'
            colorName = 'Light Purple'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = '$17.99'
            colorName = 'School Bus Yellow'
            updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        // select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
        // select element with corresponding id
        //display color name
    }
    
}
