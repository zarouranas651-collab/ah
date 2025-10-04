// Simple search functionality to filter research items by title or description
function searchResearch() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const researchItems = document.querySelectorAll('.research-item');

    // Filter the items based on the search input
    researchItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();

        // If the search input matches the title or description
        if (title.includes(searchInput) || description.includes(searchInput)) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

// Advanced search functionality to filter by category
function filterByCategory() {
    const categorySelect = document.getElementById('category-select').value.toLowerCase();
    const researchItems = document.querySelectorAll('.research-item');

    researchItems.forEach(item => {
        const category = item.getAttribute('data-category').toLowerCase();

        // If the category matches the selected one
        if (category === categorySelect || categorySelect === 'all') {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

// Function to toggle visibility of the advanced search options
function showAdvancedSearch() {
    const advancedSearchSection = document.getElementById('advanced-search');
    advancedSearchSection.classList.toggle('hidden');
}

// Redirect to another page after a short delay (optional feature)
function redirectToWebsite() {
    window.location.href = "https://www.124nah.com";

}
// Function to filter devices based on search input
function searchResearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const researchItems = document.querySelectorAll('.research-item');

    researchItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add a dynamic effect when clicking the "Read More" button
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const pageUrl = this.getAttribute('href');
            alert("You will be redirected to: " + pageUrl);
            window.location.href = pageUrl;
        });
    });
});

// Hover effect to scale up items smoothly
document.querySelectorAll('.research-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.1)";
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = "scale(1)";
    });
});
