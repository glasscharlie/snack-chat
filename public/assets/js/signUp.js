const signUpForm = document.querySelector("#signUpInformation");
signUpForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const signUpObj={
        name:document.querySelector("#signUpName").value,
        username:document.querySelector("#signUpUserName").value,
        email:document.querySelector("#signUpEmail").value,
        password:document.querySelector("#signUpPassword").value,
    }
    fetch("/api/users",{
        method: "POST",
        body: JSON.stringify(signUpObj),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("successful sign up!")
            res.json().then(data=>{
                location.assign(`/profile/${data.id}`)
            })
        } else {
            alert("there was an error")
        }
    })

})