const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit",event=>{
        event.preventDefault();
        // if(document.getElementById("restaurantSearch").checked = true) {
            fetch("/api/photos",{
                method:"GET",
                body:JSON.stringify(''),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>{
                if(res.ok){
                    location.reload()
                } else {
                    alert("error")
                }
            })
            // }
        })
