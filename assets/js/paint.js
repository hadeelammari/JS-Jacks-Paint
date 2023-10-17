function configureListeners() {
    var images = document.getElementsByTagName('img');  

//when the mouse goes over or leaves the square it add's or removes opacity from squares  
    for (var i = 0; i < images.length; i++) {        
       
        images[i].addEventListener("mouseover", addOpacity, false);
        images[i].addEventListener("mouseout", removeOpacity, false);


    } 
}
//adds class from styles.css file. dims opacity
function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }    
    getProductInfo(event.target.id);     
}
//when the mouse leaves the square changes opacity back to normal
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
//added price and color acorrding to the index.html file along with price
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
        price = '$14.99'
        colorName = 'Lime Green'
        updatePrice(colorName,price)   
            break;  

        case 'pn2':
            price = '$11.14'  
            colorName = 'Medium Brown'
            updatePrice(colorName,price)
            break;   

        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName,price) 
            break;  

        case 'pn4':
            price = '$13.42'
            colorName = 'Solid Red'
            updatePrice(colorName,price)
            break;

        case 'pn5':
            price = '$21.98'
            colorName = 'Solid White'
            updatePrice(colorName,price)      
            break;

        case 'pn6':
            price = '$4.99'
            colorName = 'Solid Black'
            updatePrice(colorName,price)        
            break; 

        case 'pn7':
            price = '$8.22'
            colorName ='Solid Cyan'
            updatePrice(colorName,price) 
            break;  

        case 'pn8':
            price = '$11.99'
            colorName = 'Solid Purple'
            updatePrice(colorName,price)   
            break; 

        case 'pn9':
            price = '$14.99'
            colorName = 'Yellow Paint'
            updatePrice(colorName,price)
            break;   
        default:              
    }
//calls elements by color and price
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName;
    }
    
    



}
