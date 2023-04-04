function configureListeners() {
    let images = document.getElementsByClassName('images');
    images.innerHTML.append(images)// select img elements  


     for (var i = 0; i < images.length; i++) {        
        pn4.addEventListener('mouseover', function() {
            console.log('mouseover');
        }, false);// iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    addOpacity.style.color = white;// add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

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
            console.log('14.99, Lime Green')// set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            console.log('11.14, Medium Brown')// set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            console.log('22.99, Royal Blue')// set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            console.log('13.42, Solid Red')// set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            console.log('21.98, Solid White')// set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            console.log('4.99, Solid Black')// set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            console.log('8.22, Solid Cyan')// set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            console.log('11.99, Solid Purple')// set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            console.log('14.99, Solid Yellow')// set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
