const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit",event=>{
    event.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value
    if(document.getElementById('restaurantSearch').checked) {    
            fetch(`/api/photos/restaurant/${searchTerm}`,{
                method:"GET",
            }).then(res=>{
                if(res.ok){
                    res.json().then(photos => {
                        var photoDiv = document.querySelector(".rightCard")
                        photoDiv.innerHTML = ''
                        for (let i = 0; i < photos.length; i++) {
                            var displayDiv = document.createElement("div")
                            displayDiv.setAttribute('class',"foodCard pure-u-1 pure-u-sm-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4")
                            photoDiv.append(displayDiv)
                            link = document.createElement("a")
                            link.setAttribute("class", 'searchSpan')
                            displayDiv.append(link)
                            var user = document.createElement("h4")
                            user.textContent = photos[i].user.name
                            link.append(user)
                            var picture = document.createElement("img")
                            picture.setAttribute('src',photos[i].url)
                            link.append(picture)
                            description = document.createElement("span")
                            description.setAttribute("id", '')
                            description.textContent = photos[i].review
                            link.append(description)
                        }
                    })
                } else {
                    alert("error")
                }
            })
        }
        if(document.getElementById('foodSearch').checked) {    
            fetch(`/api/photos/food/${searchTerm}`,{
                method:"GET",
            }).then(res=>{
                if(res.ok){
                res.json().then(photos => {
                    var photoDiv = document.querySelector(".rightCard")
                    photoDiv.innerHTML = ''
                    for (let i = 0; i < photos.length; i++) {
                        var displayDiv = document.createElement("div")
                        displayDiv.setAttribute('class',"foodCard pure-u-1 pure-u-sm-1 pure-u-md-1-2 pure-u-lg-1-3 pure-u-xl-1-4")
                        photoDiv.append(displayDiv)
                        link = document.createElement("a")
                        link.setAttribute("class", 'searchSpan')
                        displayDiv.append(link)
                        var user = document.createElement("h4")
                        user.textContent = photos[i].user.name
                        link.append(user)
                        var picture = document.createElement("img")
                        picture.setAttribute('src',photos[i].url)
                        link.append(picture)
                        description = document.createElement("span")
                        description.setAttribute("id", '')
                        description.textContent = photos[i].review
                        link.append(description)
                    }
                    
                }
                    );
                } else {
                    alert("error")
                }
            })
        }
        })
