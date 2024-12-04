var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
if (toggleButton && skills) {
    toggleButton.addEventListener('click', function () {
        var currentDisplay = window.getComputedStyle(skills).display;
        if (currentDisplay === 'none') {
            skills.style.display = 'block'; // Show element
        }
        else {
            skills.style.display = 'none'; // Hide element
        }
    });
}
