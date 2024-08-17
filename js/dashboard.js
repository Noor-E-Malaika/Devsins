function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById(sectionId).style.display = 'block';
}

// Example student data
let students = [];
let editIndex = -1;

function addStudent() {
    const name = document.getElementById('studentName').value;
    const course = document.getElementById('studentCourse').value;

    if (name && course) {
        const student = {
            name,
            course,
            profilePic: '../assets/download.jpeg'
        };

        if (editIndex === -1) {
            students.push(student);
        } else {
            students[editIndex] = student;
            editIndex = -1;
        }

        renderStudents();
        clearForm();
    } else {
        alert('Please fill out all fields.');
    }
}

function renderStudents() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${student.profilePic}" alt="Profile Picture"></td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>
                <button class="edit" onclick="editStudent(${index})">Edit</button>
                <button class="delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function editStudent(index) {
    const student = students[index];

    document.getElementById('studentName').value = student.name;
    document.getElementById('studentCourse').value = student.course;

    editIndex = index;
    document.getElementById('addButton').style.display = 'none';
    document.getElementById('updateButton').style.display = 'inline';
}

function updateStudent() {
    addStudent();
    document.getElementById('addButton').style.display = 'inline';
    document.getElementById('updateButton').style.display = 'none';
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentCourse').value = '';
}

// Initialize default section visibility
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});
