// Welcome message when the website opens
window.onload = function () {
    alert("Welcome to EduLearn!");
};

// Display a welcome message
function showMessage() {
    alert("Thank you for visiting EduLearn.");
}

// Show today's date
function showDate() {
    const dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.innerHTML = "Today's Date: " + new Date().toDateString();
    }
}

// Change the heading color
function changeColor() {
    const heading = document.getElementById("heading");
    if (heading) {
        heading.style.color = "blue";
    }
}

// Display available courses
function showCourses() {
    const courses = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python"
    ];

    alert("Available Courses:\n\n" + courses.join("\n"));
}

// Thank you message
function thankYou() {
    alert("Thank you for learning with EduLearn!");
}
