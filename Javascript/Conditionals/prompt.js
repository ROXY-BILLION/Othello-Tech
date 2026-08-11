const grade = document.getElementById("grade");

let student = Number(prompt("What's your number"));

if (student >= 80) {
    grade.textContent = "A";
} else if (student >= 70) {
    grade.textContent = "B";
} else if (student >= 60) {
    grade.textContent = "C";
} else if (student >= 50) {
    grade.textContent = "D";
} else if (student >= 40) {
    grade.textContent = "E";
} else {
    grade.textContent = "F";
}