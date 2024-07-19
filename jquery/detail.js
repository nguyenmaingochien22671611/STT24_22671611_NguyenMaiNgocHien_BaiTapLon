      
        var sp = JSON.parse(localStorage.getItem("detail"));
        let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.innerHTML = 
                `
                    <img src="${sp.image}">
                `
        document.querySelector(".ctn_product_img").appendChild(newItem)
        document.querySelector(".ctn_product_detail_name").innerHTML = `${sp.name}`;
        document.querySelector(".ctn_product_detail_price").innerHTML = `$${sp.price.toLocaleString()}`;
