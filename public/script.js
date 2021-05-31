const form = document.getElementById("form");
const downloadBtn = document.getElementById("downloadBtn")

form.addEventListener("submit", submitForm);
downloadBtn.addEventListener("click", download);

/// submit files
function submitForm(e) {
    e.preventDefault();
    form.style.display = "none";
    const cover = document.getElementById("cover");
    const music = document.getElementById("music");
    const formData = new FormData();
    formData.append("cover", cover.files[0], 'cover.jpg');
    formData.append("music", music.files[0], 'music.mp3');
    fetch("/upload", {
        method: 'post',
        body: formData
    })
        .then(displayZipBtn())
        .catch((err) => ("Error occured", err));
}

function displayZipBtn (){
    downloadBtn.style.display = 'block';
}

//download zip
function download(e) {
    window.open("/download");
}