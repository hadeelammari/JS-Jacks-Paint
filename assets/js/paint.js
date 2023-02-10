function configureListeners() {
    let images = document.getElementsByTagName('img')// select img elements  

// iterate over images and add mouseover event listeners  
     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity,false)  //Using the loop counter as an index to access each image
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity,false) //adding the mouseout event to reset the opacity
    } 
}
// add appropriate CSS class
function addOpacity(event) {
    if (!this.classList.contains('dim')){ //When the class list does NOT contain the class "dim", we add it
        this.classList.add('dim')
    getProductInfo(event.target.id);     
}
}
//remove appropriate CSS class
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
            price = '14.99'
            colorName = 'Lime Green' 
            updatePrice(colorName, price)// set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = '11.14'// set variables for price and color name and invoke a function to update the price    
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
            break;            
        case 'pn3':
            price = '22.99'// set variables for price and color name and invoke a function to update the price  
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn4':
            price = '4.99'// set variables for price and color name and invoke a function to update the price  
            color = 'Solid Black'
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            price = '8.22'// set variables for price and color name and invoke a function to update the price    
            color = 'Solid Cyan'   
            updatePrice(colorName, price)
            break;   
        case 'pn6':
            price = '11.99'// set variables for price and color name and invoke a function to update the price     
            color = 'Solid Purple'   
            updatePrice(colorName, price)
            break;   
        case 'pn7':
            price = '13.42'// set variables for price and color name and invoke a function to update the price 
            color = 'Solid Red'
            updatePrice(colorName, price)
            break; 
        case 'pn8':
           price = '21.98' // set variables for price and color name and invoke a function to update the price  
           color = 'Solid White' 
           updatePrice(colorName, price)
            break;   
        case 'pn9':
            price = '14.99'// set variables for price and color name and invoke a function to update the price 
            color = 'Solid Yellow'
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        colorPrice.textContent = price;// display price
        
        let color = document.getElementById('color-name');// select element with corresponding id
        color.textContent = colorName;//display color name
    }
    
}
