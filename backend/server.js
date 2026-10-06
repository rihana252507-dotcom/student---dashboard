const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Student data

const students = {

    STU001: {
        password: "1234",

        name: "Nafisa",
        department: "B.Tech AIML",
        year: "2nd Year",

        overallMarks: 82,
        attendance: 91,
        assignments: "8 / 10",
        risk: "Low",

        subjects: {
            Python: 88,
            Java: 79,
            DBMS: 84,
            Mathematics: 77,
            AI: 82
        },

        analysis:
            "Student is performing well. Strong performance is seen in Python and AI. Mathematics needs more attention.",

        studyPlan: [
            "Practice Mathematics daily",
            "Revise Java",
            "Complete assignments",
            "Practice Python",
            "Take weekly mock test"
        ]
    },


    STU002: {
        password: "5678",

        name: "Ayesha",
        department: "B.Tech AIML",
        year: "2nd Year",

        overallMarks: 68,
        attendance: 76,
        assignments: "7 / 10",
        risk: "Medium",

        subjects: {
            Python: 72,
            Java: 65,
            DBMS: 70,
            Mathematics: 66,
            AI: 68
        },

        analysis:
            "Student should improve attendance and Mathematics performance.",

        studyPlan: [
            "Improve attendance",
            "Practice Mathematics",
            "Revise Java",
            "Complete assignments"
        ]
    }

};


// LOGIN API

app.post("/api/login", (req, res) => {

    const { studentId, password } = req.body;

    const student =
        students[studentId.toUpperCase()];

    if (!student) {

        return res.status(401).json({
            message: "Student not found"
        });

    }

    if (student.password !== password) {

        return res.status(401).json({
            message: "Incorrect password"
        });

    }


    // Don't send password to frontend

    const studentData = {
        name: student.name,
        department: student.department,
        year: student.year,
        overallMarks: student.overallMarks,
        attendance: student.attendance,
        assignments: student.assignments,
        risk: student.risk,
        subjects: student.subjects,
        analysis: student.analysis,
        studyPlan: student.studyPlan
    };


    res.json({
        message: "Login successful",
        student: studentData
    });

});


app.get("/", (req, res) => {

    res.send("Student Dashboard Backend is Running");

});


app.listen(5000, () => {

    console.log(
        "Server running on http://localhost:5000"
    );

});