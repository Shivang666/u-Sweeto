function checkAnswers() {
    const answer1 = document.getElementById("q1").value.toLowerCase();
    const answer2 = document.getElementById("q2").value.toLowerCase();
    const answer3 = document.getElementById("q3").value.toLowerCase();
    const answer4 = document.getElementById("q4").value.toLowerCase();
    const answer5 = document.getElementById("q5").value.toLowerCase();


    if (answer1 === "Mohinee Kharka Gupta" && answer2 === "19/03/2024" && answer3 === "Mohinee Kharka Gupta" && answer4 === "L" && answer5 === "Mohinee Kharka Gupta") {
        document.getElementById("questions-section").style.display = "none";
        document.getElementById("password-section").style.display = "block";
    } else {
        alert("Oops! Some answers are incorrect. Please try again.");
    }
}

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "I LOVE YOU") {
        document.getElementById("password-section").style.display = "none";
        document.getElementById("gift-section").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
