let likeCount = 856;
let followerCount = 845;
let interval = 10; // Initial interval in milliseconds

function increaseCounts() {
    if (likeCount < 300000 && followerCount < 300000) {
        likeCount++;
        followerCount++;
        document.getElementById("likeAndFollow").textContent = likeCount + " การกดถูกใจ • ผู้ติดตาม " + followerCount + " คน";
        interval -= 5; // Decrease the interval even more aggressively
        if (interval < 1) {
            interval = 1; // Minimum interval to avoid excessive load
        }
        setTimeout(increaseCounts, interval); // Repeat with updated interval
    } else {
        alert("Maximum limit reached!");
    }
}

// Call the function to start incrementing
increaseCounts();
