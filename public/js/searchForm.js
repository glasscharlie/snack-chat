const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit",event=>{
        event.preventDefault();
            fetch("/api/photos/Bobs Burgers",{
                method:"GET",
            }).then(res=>{
                if(res.ok){
                    console.log(res.body[0])
                } else {
                    alert("error")
                }
            })
        })
