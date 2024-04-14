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

window.addEventListener('scroll', function() {
    var main = document.getElementById('main');
    var mainPosition = main.getBoundingClientRect().top;
    var about = document.getElementById('about');
    var aboutPosition = about.getBoundingClientRect().top;
    var skill = document.getElementById('skills');
    var skillPosition = skill.getBoundingClientRect().top;
    var project = document.getElementById('projects');
    var projectPosition = project.getBoundingClientRect().top;
    var exp = document.getElementById('work-ex');
    var expPosition = exp.getBoundingClientRect().top;
    var edu = document.getElementById('edu');
    var eduPosition = edu.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    const allItems = document.querySelectorAll(".navmenu ul li a");

    // Remove active class from all navigation items
    for(var i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove('active');
    }

    // Check which section is in view and add active class to its corresponding navigation item
    if (mainPosition < windowHeight && mainPosition > 0) {
        allItems[0].classList.add("active");
    } else if (aboutPosition < windowHeight && aboutPosition > 0) {
        allItems[0].classList.add("active");
    } else if (skillPosition < windowHeight && skillPosition > 0) {
        allItems[1].classList.add("active");
    } else if (projectPosition < windowHeight && projectPosition > 0) {
        allItems[2].classList.add("active");
    } else if (expPosition < windowHeight && expPosition > 0) {
        allItems[3].classList.add("active");
    } else if (eduPosition < windowHeight && eduPosition > 0) {
        allItems[4].classList.add("active");
    }
});
