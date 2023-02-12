function configureListeners() {
    let images = document.getElementsByTagName("img")


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners     
       document.getElementByIld(images[i].id)addEventLister("mouseover", addOpacity, false)
        document.getElementByIld(images[i].id)addEventLister("mouseout", removeOpacity, false)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
  if(!this.classList.contains('dim')){
    this.classlist.add('dim')
  }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
if (this.classList.contains('dim')){
  this.classList.remove('dim')
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
        color: "19.99"
        colorName: "Lime Green"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
         price: "12.99"
        colorName: "Medium Brown"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
         price: "11.99"
        colorName:"Royal Blue"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
         price:"14.99"
        colorName:"Bright Red"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
         price:"9.99"
        colorName:"Soild White"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
         price:"15.99"
        colorName:"Soild Black"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
         price: "8.99"
        colorName:"Medium Blue"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
         price:"16.99"
        colorName: "Light Purple"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
         price: "17.99"
        colorName:"Bright Yellow"
        updatePrice(colorName, price)
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementId('color-price')// select element with corresponding id
        // display price
      colorPrice.textContent = price;
        
        let color = document.getElementId('color-name')// select element with corresponding id
        //display color name
      color.textContent = colorName;
    }
    
}
