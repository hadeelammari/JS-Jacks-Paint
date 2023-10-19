function configureListeners() {
    //reaches into the html document and finds the elements with the "img"
    //this allows the html element to be edited and called in JavaScript
    let images = document.getElementsByTagName('img'); 

    //this for loop acts as a giant boolean statement that calls the "addOpacity" and "removeOpacity"
    //the "event listeners" are built in methods that wait for certain goals to be met before they activate
    //For each "color image", listen for the event  
     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)        
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)      
    } 
}

//function that when called wait for the users mouse to hover over the target color and "dim" to change the opacity
function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

//function that when called waits for the users mouse to stop hovering the target color to change the color back 
function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }
//placeholde/unneeded //This is actually needed to set the price to an empty string when the cursor moves out of the paint cell
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 
//prevents default propogation to prevent all elements being affected by one change
    event.preventDefault();    
}

//creates class with parameters which change depending on ht elementbeing selected //This is a function not a class 
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
//when switch case is used, the switch is called once, and case is used for every instance and runs when if it matched 
    switch (paintColor) {
        case 'pn1':           
            colorName = 'Lime Green';
            price = '$14.99'
            updatePrice(colorName, price)    
            break;           
        case 'pn2':
            colorName = 'Medium Brown';
            price = '$11.14'
            updatePrice(colorName, price)    
            break;            
        case 'pn3':
            colorName = 'Royal Blue';
            price = '$22.99'
            updatePrice(colorName, price)  
            break;   
        case 'pn4':
            colorName = 'Solid Red';
            price = '$13.42'
            updatePrice(colorName, price)  
            break;   
        case 'pn5':
            colorName = 'Solid White';
            price = '$21.98'
            updatePrice(colorName, price)       
            break;   
        case 'pn6':
            colorName = 'Solid Black';
            price = '$4.99'
            updatePrice(colorName, price)        
            break;   
        case 'pn7':
            colorName = 'Solid Cyan';
            price = '$8.22'
            updatePrice(colorName, price) 
            break;   
        case 'pn8':
            colorName = 'Solid Purple';
            price = '$11.99'
            updatePrice(colorName, price)   
            break;   
        case 'pn9':
            colorName = 'Solid Yellow';
            price = '$14.99'
            updatePrice(colorName, price) 
            break;   
          default:              
    }

    //function that finds and changes the html element with the matching id  //What does it change in the html element and which element?
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        //x.textContent is the tag that changes the text content on the html file
        colorPrice.textContent = price;
        
        let color =  document.getElementById('color-name')
        color.textContent = colorName;
    }
    
}
