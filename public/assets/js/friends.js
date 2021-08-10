const searchForm = document.querySelector("#searchForm");
// const unfollow = document.querySelector(".unfollowForm");

searchForm.addEventListener("submit",event=>{
    event.preventDefault()
    const searchTerm = document.getElementById('friendSearchInput').value
    fetch(`/api/users/getusername/${searchTerm}`,{
      method:"GET",
    }).then(res=>{
      if(res.ok){
        console.log("Request complete! response:", res.body)
        res.json().then(user => {
          console.log(user.id)
          obj = {follow:user.id}
          data = JSON.stringify(obj)
          console.log(data)
          fetch(`/api/users/follow`,{
            method:"POST",
            body: data,
            headers:{
              "Content-Type":"application/json"
          }
          }).then(follow => {
            console.log('followed')
            location.assign(`/friends`)
          })
        })
          }else {
            alert("error")
        }
    })
  })

//   unfollow.addEventListener("submit",event=>{
//     event.preventDefault()
//     location.assign(`/friends.handlebars`)
// })

