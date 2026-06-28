// Welcome message when the website opens
alert("Welcome to EduLearn!");

// Display a welcome message
function showMessage() {
    alert("Thank you for visiting EduLearn.");
}

// Show today's date
function showDate() {
    document.getElementById("date").innerHTML =
        "Today's Date: " + new Date().toDateString();
}

// Change the heading color
function changeColor() {
    document.getElementById("heading").style.color = "blue";
}

// Display available courses
function showCourses() {
    let courses = "HTML\nCSS\nJavaScript\nPython";
    alert("Available Courses:\n\n" + courses);
}

// Thank you message
function thankYou() {
    alert("Thank you for learning with EduLearn!");
}
