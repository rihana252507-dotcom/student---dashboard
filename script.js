// ===============================
// LOGIN WITH BACKEND
// ===============================

async function login() {

    const studentId = document.getElementById("studentId").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    try {

        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                studentId: studentId,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {

            // Hide login page
            document.getElementById("loginPage").style.display = "none";

            // Show dashboard
            document.getElementById("dashboard").style.display = "block";

            // Load student data
            loadStudent(data.student);

        } else {

            error.innerText = data.message || "Invalid credentials";
        }

    } catch (err) {

        error.innerText =
            "Backend connect nahi ho raha. Server check karo.";

        console.log(err);
    }
}


// ===============================
// LOAD STUDENT DATA
// ===============================

function loadStudent(student) {

    document.getElementById("studentName").innerText = student.name;

    document.getElementById("studentIdDisplay").innerText =
        student.id;

    document.getElementById("score").innerText =
        student.score + "%";

    document.getElementById("attendance").innerText =
        student.attendance + "%";

    document.getElementById("assignments").innerText =
        student.assignments;

    document.getElementById("streak").innerText =
        student.streak;

    document.getElementById("risk").innerText =
        student.risk;

    // Subjects
    document.getElementById("math").innerText =
        student.subjects.Mathematics + "%";

    document.getElementById("python").innerText =
        student.subjects.Python + "%";

    document.getElementById("ai").innerText =
        student.subjects.AI + "%";

    document.getElementById("dbms").innerText =
        student.subjects.DBMS + "%";

    // Analysis
    document.getElementById("strengths").innerText =
        student.strengths;

    document.getElementById("weaknesses").innerText =
        student.weaknesses;

    // Study Plan
    document.getElementById("studyPlan").innerText =
        student.studyPlan;
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    document.getElementById("dashboard").style.display = "none";

    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("studentId").value = "";
    document.getElementById("password").value = "";
}


// ===============================
// SIDEBAR
// ===============================

function showSection(section) {

    alert(section.toUpperCase() + " section selected");
}