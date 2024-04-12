document.addEventListener("DOMContentLoaded", function() {
    // Fetch the content of the source file
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Find the destination container
            var destinationContainer = document.getElementById("navbar_content");
            // Set the fetched content to the destination container
            destinationContainer.innerHTML = data;

            var scripts = destinationContainer.querySelectorAll('script');
            scripts.forEach(script => {
                eval(script.innerHTML);
            });
        })
        .catch(error => console.error('Error fetching source content:', error));
});
