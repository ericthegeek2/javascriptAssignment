// Octokit.js
// https://github.com/octokit/core.js#readme


//const form = document.getElementById('form')
const btn = document.getElementById('btnSubmit')
const textInput = document.getElementById('search')

const url = `https://api.github.com/users/`
//const token = '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'


 

 btn.addEventListener('click', ()=>{
    // e.preventDefault()
   getQuery()
    
   })
  

  function getQuery(){
    const query = textInput.value
    alert(`you quered : ${query}`)

    
    fetchData(query).then((data) =>{
      alert(JSON.stringify(data));
   
     populateData(data)
    })
               .catch((err) =>{
                  alert('could not fetch data because: ' , err);
               })
  }



const fetchData = async (query) =>{

  try{
      const responsePromise = await fetch(url + query)
      return responsePromise.json() 
  }
    catch(Error){
      throw Error
    }              
}

function populateData(data){
   const image = document.getElementById('userimage')
   const name = document.getElementById('name')
   const repos = document.getElementById('repos')
   const location = document.getElementById('location')
   const bio = document.getElementById('bio')


   image.src = data.avatar_url
   name.textContent = data.name
   repos.textContent = data.public_repos
   location.textContent = data.location
   bio.textContent = data.bio
}
  

 


  
