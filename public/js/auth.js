const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user={
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("success")
            res.json().then(data=>{
                location.assign(`/profile`)
            })
        } else {
            alert("error!")
        }
    })
})
