// Task
// You are given one person's profile and two callbacks: one to swipe to the left and another one to swipe to the right. If the person mentions your favorite programming language in their bio, then you want to give your friendship a chance and swipe to the right. Otherwise you swipe to the left.

// Note: Your favorite programming language is assumed to be the one, you're solving this kata in. So if you're solving this kata in Javascript, you should look out for JavaScript in the profile text. See the examples matching and non-matching profiles.

// Profile Structure
// Each profile has the following fields:

// name (string)
// age (int)
// bio (string)

const rateProfile = (profile, swipeLeft, swipeRight) => {
    // TODO: implement function
    profile.bio.includes('JavaScript') ? swipeRight() : swipeLeft()
};