function frameStory(template, words) {
    // Split the template into its constituent parts
    const parts = template.split(' ');

    // Split the words into individual words
    const wordList = words.split(' ');

    // Create an array to hold the parts of speech and words
    const storyParts = [];

    // Map each part in the template to its corresponding word
    for (let part of parts) {
        if (part === "noun" || part === "verb" || part === "adjective" || part === "article") {
            // Use the next word from the list of words
            storyParts.push(wordList.shift());
        } else {
            // If it's not a placeholder, keep it as it is
            storyParts.push(part);
        }
    }

    // Construct and return the story by joining the parts
    return storyParts.join(' ');
}

// Test the function with the given input
const template = "The noun verb the adjective cat.";
const words = "dog chased big cat";

console.log(frameStory(template, words)); 
// Expected Output: "The dog chased the big cat."
