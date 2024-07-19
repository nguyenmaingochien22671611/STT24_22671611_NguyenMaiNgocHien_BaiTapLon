     var totalPrice = 0;
     var cart = [];
     window.onload = function(){
       
        cart = JSON.parse(localStorage.getItem("myCart"));
        cart.forEach((value, key)=>{
            
            if(value != null){
                
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.innerHTML = 
                `
                <div class="image">
                    <img src="${value.image}">
                </div>
                <div class="name">
                ${value.name}
                </div>
                <div class="quantity">
                    ${value.quantity}
                </div>
                <div class="totalPrice">${value.price},000 VND</div>
                
            `
            
             totalPrice = value.price+totalPrice;
            
            ;
                    document.querySelector(".listCart").appendChild(newItem);
                
            }
              
        }
            
        )
        document.querySelector(".sum").innerHTML = totalPrice+",000 VND";
     }   
        
        
        function checkOut(){
            if(cart==null){
                alert("No item");
            }
            else{
                localStorage.setItem("totalPrice",totalPrice);
                window.location.href = '../html/checkout.html'
            }
        }
        
      
            
       