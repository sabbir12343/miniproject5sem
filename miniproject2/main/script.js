const featuredStudents = document.getElementById("featured-students");

const students = [
    { name: "Sabbir", room: "101" },
    { name: "Kavya", room: "102" },
    { name: "Puja", room: "103" },
];

students.forEach(student => {
    const card = document.createElement("div");
    card.classList.add("student-card");
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p>Room: ${student.room}</p>
    `;
    featuredStudents.appendChild(card);
});
