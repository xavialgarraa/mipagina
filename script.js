// script.js
function loadYouTubeVideo() {
    var link = document.getElementById("youtube-link").value;
    var iframe = document.getElementById("youtube-frame");
    var videoId = link.split("/live/")[1];
    if (videoId) {
        var queryStringPosition = videoId.indexOf("?");
        if (queryStringPosition !== -1) {
            videoId = videoId.substring(0, queryStringPosition);
        }
        iframe.src = "https://www.youtube.com/embed/" + videoId;
    }
}
