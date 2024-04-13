let likeCount = 856;
let followerCount = 845;
let likeLimit = 420000; // like limit
let followerLimit = 360000; // follower limit

// total durations in milliseconds
let duration = 15000; // 15 seconds

// caculated
let likeIncrement = (likeLimit - likeCount) / duration;
let followerIncrement = (followerLimit - followerCount) / duration;

function formatNumber(number) {
    if (number >= 1000 && number < 10000) {
        return (number / 1000).toFixed(1) + " พัน";
    } else if (number >= 10000 && number < 100000) {
        return (number / 10000).toFixed(1) + " หมื่น";
    } else if (number >= 100000) {
        return (number / 100000).toFixed(1) + " แสน";
    } else {
        return number;
    }
}

function increaseCounts() {
    if (likeCount < likeLimit && followerCount < followerLimit) {
        // Increment like and follower counts
        likeCount += likeIncrement;
        followerCount += followerIncrement;
        let formattedLikeCount = formatNumber(Math.floor(likeCount)); // Round down to integer
        let formattedFollowerCount = formatNumber(Math.floor(followerCount)); // Round down to integer
        document.getElementById("likeAndFollow").textContent = "การกดถูกใจ " + formattedLikeCount + " • ผู้ติดตาม " + formattedFollowerCount + " คน";
    } else {
        clearInterval(updateInterval); // Stop the interval if limits are reached
    }
}

// Call the function to start incrementing
let updateInterval = setInterval(increaseCounts, 1); // Update every millisecond

// Code by Phanu, CAMT CMU
