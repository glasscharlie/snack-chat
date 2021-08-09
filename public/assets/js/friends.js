const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit",event=>{
    event.preventDefault()
    const searchTerm = document.getElementById('friendSearchInput').value
    fetch(`/api/users/getusername/${searchTerm}`,{
      method:"GET",
    }).then(res=>{
      if(res.ok){
        console.log("Request complete! response:", res.body)
        res.json().then(user => {
          fetch(`/api/users/follow`,{
            method:"POST",
            body: user.id
          }).then(follow => {
            console.log(follow)
          })
        })
          }else {
            alert("error")
        }
    })
  })
