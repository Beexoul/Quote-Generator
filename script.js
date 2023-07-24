const quotes = [
    {
        text: "Be yourself; everyone else is already taken. - Oscar Wilde",
        image: "images/image1.jpg"
    },
    {
        text: "The only way to do great work is to love what you do. - Steve Jobs",
        image: "images/image2.jpg"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        image: "images/image3.jpg"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        image: "images/image4.jpg"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        image: "images/image5.jpg"
    }
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");
const twitterBtn = document.getElementById("twitter-btn");
const body = document.body;


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});




// Function to get a random quote from the array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display the random quote and change background image
function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote.text;

    // Set the Twitter share URL with the quote text
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuote.text)}`;

    // Change background image
    body.style.backgroundImage = `url(${randomQuote.image})`;
}

// Event listener for the "Generate Quote" button
generateBtn.addEventListener("click", displayRandomQuote);

// Initial quote display on page load
displayRandomQuote();

