form = document.getElementById('submitReview')


form.addEventListener("submit",event=>{
    event.preventDefault()

    photoObj = {
            user_id:document.querySelector("#user_id").value,
            review:document.querySelector("#review").value,
            url:document.querySelector("#url").value,
            restaurant:document.querySelector("#restaurant").value
    }
    console.log(photoObj)
    fetch(`/api/photos`,{
        method:"POST",
        body: JSON.stringify(photoObj),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(res=>{
      if(res.ok){
        console.log("Request complete! response:", res.body)
        res.json().then(data=>{
            location.assign(`/profile/${document.querySelector("#user_id").value}`)
        })
          }else {
            alert("error")
        }
    })
  })
