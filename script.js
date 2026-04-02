let studentName = "Ivan";
let courseName = "Frontend Development";
let year = 2026;

console.log(`Welcome ${studentName} to the ${courseName} course.`);

document.getElementById("changeTextBtn").onclick = function () {
    document.getElementById("heading").textContent = "JavaScript is controlling this page!";
};
document.getElementById("clickBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "You clicked the button!";
});
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = `
    Addition = ${num1 + num2} <br>
    Subtraction = ${num1 - num2} <br>
    Multiplication = ${num1 * num2} <br>
    Division = ${num1 / num2}
    `;

    document.getElementById("result").innerHTML = result;
}
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = function () {
        li.classList.toggle("completed");
    };
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}