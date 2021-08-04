function pickPic() {
    document.getElementById("splashImage").className = 'splash';
    const randomNum = Math.ceil(Math.random() * 6);
    const splashURL = '../assets/images/splash0' + randomNum + '.jpg';
    console.log(splashURL);
    document.getElementById("splashImage").src = splashURL;
  }

pickPic();