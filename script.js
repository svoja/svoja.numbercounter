let likeCount = 856;
let followerCount = 845;
let likeLimit = 420000; // Like count limit
let followerLimit = 360000; // Follower count limit

// Total duration in milliseconds
let duration = 60000; // 1 minute

// Calculate total increments needed
let likeIncrements = likeLimit - likeCount;
let followerIncrements = followerLimit - followerCount;
let totalIncrements = Math.max(likeIncrements, followerIncrements);

// Calculate interval to reach the limits within 1 minute
let interval = duration / totalIncrements;

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
        likeCount++;
        followerCount++;
        let formattedLikeCount = formatNumber(likeCount);
        let formattedFollowerCount = formatNumber(followerCount);
        document.getElementById("likeAndFollow").textContent = formattedLikeCount + " การกดถูกใจ • ผู้ติดตาม " + formattedFollowerCount + " คน";
    } else {
        alert("Maximum limits reached within 1 minute!");
        clearInterval(updateInterval); // Stop the interval if limits are reached
    }
}

// Call the function to start incrementing
let updateInterval = setInterval(increaseCounts, interval);
