document.addEventListener('DOMContentLoaded', () => {
    let images = [
        { src: 'media.jpg', category: 'Media' },
        { src: 'travel.jpg', category: 'Travel' },
        { src: 'performance.jpg', category: 'Performance' },
        { src: 'food.jpg', category: 'Food' },
        { src: 'sport.jpg', category: 'Sport' },
        { src: 'media2.jpg', category: 'Media' },
        { src: 'travel2.jpg', category: 'Travel' },
        { src: 'performance2.jpg', category: 'Performance' },
        { src: 'food2.jpg', category: 'Food' },
        { src: 'sport2.jpg', category: 'Sport' },
        // Add more images as needed
    ];
    let currentIndex = 0; // Start with the first image
    let startTime = new Date(); // Start timing
    let timeSpentOnCategories = { Media: 0, Travel: 0, Performance: 0, Food: 0, Sport: 0 }; // Initialize time spent per category

    function changeImage() {
        let endTime = new Date();
        let timeSpent = (endTime - startTime) / 1000; // Time spent in seconds
        let currentCategory = images[currentIndex].category;
        timeSpentOnCategories[currentCategory] += timeSpent; // Aggregate time per category
        startTime = new Date(); // Reset start time for the next image

        if (currentIndex < images.length - 1) {
            currentIndex++;
            document.getElementById('imageToChange').src = images[currentIndex].src;
        } else {
            document.getElementById('nextButton').value = "Done";
            document.getElementById('nextButton').onclick = function() {
                // Store the results in localStorage before navigating
                localStorage.setItem('trackingResults', JSON.stringify(timeSpentOnCategories));
                window.location.href = 'result.html'; // Redirect to result.html
            };
        }
    }

    // Initial image setup
    document.getElementById('imageToChange').src = images[0].src;

    // Setup button click listener
    document.getElementById('nextButton').addEventListener('click', changeImage);
});
