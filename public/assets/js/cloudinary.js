const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsd1od6hy/upload';
const CLOUDINARY_UPLOAD_PRESET = 'wwv8a4or';

fileUpload.addEventListener('change', function(event){
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then (function(res) {
        console.log(res);
    }).catch(function(err){
        console.error(err);

    });
});