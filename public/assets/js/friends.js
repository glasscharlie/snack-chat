const searchForm = document.querySelector("#friendSearchForm");

searchForm.addEventListener("submit",event=>{
    event.preventDefault()
    const searchTerm = document.getElementById('friendSearch').value
    fetch(`/api/users/`,{
      method:"POST",
      body: 11
    }).then(res=>{
      if(res.ok){
        console.log("Request complete! response:", res)
          }else {
            alert("error")
        }
    })
  })
