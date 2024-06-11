// script.js
function loadYouTubeVideo() {
    var link = document.getElementById("youtube-link").value;
    var iframe = document.getElementById("youtube-frame");
    var videoId = link.split("v=")[1];
    var ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    iframe.src = "https://www.youtube.com/embed/" + videoId;
}
