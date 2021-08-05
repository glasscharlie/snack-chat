document.addEventListener("submit",e=>{
    if(e.target.matches("#searchForm")){
        e.preventDefault();
        if(document.getElementById("userSearch").checked = true) {
       const searchObj= {
           body:e.target.children[0].value,
           postId:e.target.children[1].value
       }

       fetch("/api/users",{
           method:"POST",
           body:JSON.stringify(commentObj),
           headers:{
               "Content-Type":"application/json"
           }
        
       }).then(res=>{
           if(res.ok){
               location.reload()
           } else {
              alert("sad dog")
           }
       })
    }
}
})