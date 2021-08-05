const loginForm = document.querySelector("#loginInformation");
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const loginObj={
        email:document.querySelector("#emailLogin").value,
        password:document.querySelector("#passwordLogin").value,
    }
    fetch("/api/users/login",{
        method: "POST",
        body: JSON.stringify(loginObj),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("successful login")
        } else {
            alert("there was an error")
        }
    })

})

const signUpForm = document.querySelector("#signUpInformation");
signUpForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const signUpObj={
        email:document.querySelector("#signUpEmail").value,
        username:document.querySelector("#signUpUserName").value,
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
        } else {
            alert("there was an error")
        }
    })

})