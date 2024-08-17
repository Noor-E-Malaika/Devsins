let currentQuizIndex = -1;
const quizzes = [];
const answers = [];
const totalQuizzes = 10; // Number of quizzes

// Add a quiz
function addQuiz() {
    const title = document.getElementById('quizTitle').value;
    const description = document.getElementById('quizDescription').value;

    if (title && description) {
        const tableBody = document.getElementById('quizTable').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();
        
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td>
                <button onclick="editQuiz(this)">Edit</button>
                <button onclick="deleteQuiz(this)">Delete</button>
            </td>
        `;

        // Clear form fields
        document.getElementById('quizTitle').value = '';
        document.getElementById('quizDescription').value = '';

        // Add quiz to quizzes array
        quizzes.push({ title, description });
        answers.push(null); // Initialize answers array
    }
}

// Edit a quiz
function editQuiz(button) {
    const row = button.parentNode.parentNode;
    const title = row.cells[0].innerText;
    const description = row.cells[1].innerText;

    document.getElementById('quizTitle').value = title;
    document.getElementById('quizDescription').value = description;
    currentQuizIndex = Array.from(row.parentNode.children).indexOf(row);
}

// Update a quiz
function updateQuiz() {
    const title = document.getElementById('quizTitle').value;
    const description = document.getElementById('quizDescription').value;

    if (currentQuizIndex > -1 && title && description) {
        const tableBody = document.getElementById('quizTable').getElementsByTagName('tbody')[0];
        const row = tableBody.children[currentQuizIndex];

        row.cells[0].innerText = title;
        row.cells[1].innerText = description;

        quizzes[currentQuizIndex] = { title, description };

        // Clear form fields
        document.getElementById('quizTitle').value = '';
        document.getElementById('quizDescription').value = '';
        currentQuizIndex = -1;
    }
}

// Delete a quiz
function deleteQuiz(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    const index = Array.from(row.parentNode.children).indexOf(row);
    quizzes.splice(index, 1);
    answers.splice(index, 1);
}

// Add a video
function addVideo() {
    const title = document.getElementById('videoTitle').value;
    const url = document.getElementById('videoURL').value;

    if (title && url) {
        const tableBody = document.getElementById('videoTable').getElementsByTagName('tbody')[0];
        const newRow = tableBody.insertRow();
        
        newRow.innerHTML = `
            <td>${title}</td>
            <td><a href="${url}" target="_blank">${url}</a></td>
            <td>
                <button onclick="deleteVideo(this)">Delete</button>
            </td>
        `;

        // Clear form fields
        document.getElementById('videoTitle').value = '';
        document.getElementById('videoURL').value = '';
    }
}

// Delete a video
function deleteVideo(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Submit answers and calculate results
function submitQuiz() {
    // Example of grading quizzes
    let correctAnswers = 0;

    // Assuming you have a way to get the correct answers, compare with user answers
    for (let i = 0; i < totalQuizzes; i++) {
        // This is just a placeholder for actual answer validation
        if (answers[i] === correctAnswers[i]) {
            correctAnswers++;
        }
    }

    const percentage = (correctAnswers / totalQuizzes) * 100;
    document.getElementById('resultMessage').innerText = `You ${correctAnswers === totalQuizzes ? 'Passed' : 'Failed'}`;
    document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
}
