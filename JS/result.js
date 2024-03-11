document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('categoryResults');
    const results = JSON.parse(localStorage.getItem('trackingResults')) || {};

    Object.entries(results).forEach(([category, timeSpent]) => {
        const resultElement = document.createElement('p');
        resultElement.textContent = `${category}: ${timeSpent.toFixed(2)} seconds`;
        resultsContainer.appendChild(resultElement);
    });
});
