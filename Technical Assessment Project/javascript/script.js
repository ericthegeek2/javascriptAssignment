



 


const arrayData2 = [{'id': 1, 'product': 'shirt', 'size': 'small', 'price': '$100', 'quantity': 1, "imageUrl": "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},

                    {'id': 2, 'product': 'trouser', 'size': 'large', 'price': '$50', 'quantity': 1, "imageUrl": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                    {'id': 3, 'product': 'jacket', 'size': 'small', 'price': '$150', 'quantity': 1, "imageUrl": "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                    {'id': 4, 'product': 'short', 'size': 'xlarge', 'price': '$60', 'quantity': 1, "imageUrl": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
                    {'id': 5, 'product': 'socks', 'size': 'small', 'price': '$10', 'quantity': 1, "imageUrl": "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
]

const arrayData =[...arrayData2]

console.log(arrayData[3]);



 

 async function fetchData(){
    try{
        await populateCards()
    }catch(error){
       console.log('could not fetch data');
    }
    
 }


 const mainContainer = document.createElement('main')
 document.body.appendChild(mainContainer)



 fetchData()
 
const cartProducts = []
 function populateCards(){

   
  

   const divCont =  arrayData.map((elem) =>{
        
     
    const container = document.createElement('div')
     mainContainer.appendChild(container)

      //create inner elements

      const image = document.createElement('img')
      container.appendChild(image)
      image.src = `${elem.imageUrl}`

        const product = document.createElement('p')
        container.appendChild(product)
        product.textContent = `name: ${elem.product}`

        
        console.log(product.textContent);


        const size = document.createElement('p')
        container.appendChild(size)
        size.textContent = `size: ${elem.size}`


        
        console.log(product.textContent);



        const price = document.createElement('p')
        container.appendChild(price)
        price.textContent = `price: ${elem.price}`

        
        console.log(product.textContent);

        const quantity = document.createElement('p')
        container.appendChild(quantity)
        quantity.textContent = `quantity: ${elem.quantity}`

        
        console.log(product.textContent);

        const btn = document.createElement('button')
        container.appendChild(btn)
        btn.textContent = 'Add to cart'
        btn.dataset.id = elem.id   //store the data in a data attribute


        
        
        //add event listener to the attribute
        btn.addEventListener('click',  () =>{
          alert(`button ${elem.product} clicked!`)
          
          const productId = btn.dataset.id//event.target.dataset.productId;
          cartProducts.push(elem)
          addToCart(productId)
        }
      )
      return elem
    })
  return divCont  
}



cartProducts
function addToCart(productId){
  try{
   if(productId >= 0 && cartProducts.length !== 0){
     populateCart(productId)
   }
  }catch(error){
    console.log('productId is null or cartProducts array is empty');
  }
}


var cartSum = 0
function populateCart(productId){


    
    cartSum =+ cartSum + 1

    console.log(cartSum);

    heading.textContent = `Cart products:  ${cartSum}`

    cartProducts.map((elem) =>{

  
    if(elem.id == productId){


   
    const Section = document.createElement('section')
    mainContainer.appendChild(Section)


    const image = document.createElement('img')
    Section.appendChild(image)
    image.src = `${elem.imageUrl}`

      const product = document.createElement('p')
      Section.appendChild(product)
      product.textContent = `name: ${elem.product}`

      
      console.log(product.textContent);


      const size = document.createElement('p')
      Section.appendChild(size)
      size.textContent = `size: ${elem.size}`


      
      console.log(product.textContent);



      const price = document.createElement('p')
      Section.appendChild(price)
      price.textContent = `price: ${elem.price}`

      
      console.log(product.textContent);

      const quantity = document.createElement('p')
      Section.appendChild(quantity)
      quantity.textContent = `quantity: ${elem.quantity}`

      
      console.log(product.textContent); 
      }
    return elem
})





    

}
const heading = document.createElement('h3')
mainContainer.appendChild(heading)




   

 
   



  
 