document.addEventListener("DOMContentLoaded", () => {
    // Course Data Array
    let courses = [];
    let editingCourseId = null;

    const courseTableBody = document.getElementById('course-table-body');
    const courseModal = document.getElementById('course-modal');
    const closeModalButton = document.querySelector('.close-button');
    const addCourseButton = document.getElementById('add-course-button');
    const courseForm = document.getElementById('course-form');

    // Open the modal for adding a new course
    addCourseButton.addEventListener('click', () => {
        editingCourseId = null;
        courseForm.reset();
        courseModal.style.display = 'flex';
    });

    // Close modal event
    closeModalButton.addEventListener('click', () => {
        courseModal.style.display = 'none';
    });

    // Handle form submission for adding or editing a course
    courseForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const courseName = document.getElementById('course-name').value;
        const courseCategory = document.getElementById('course-category').value;
        const courseTags = document.getElementById('course-tags').value;
        const courseDescription = document.getElementById('course-description').value;

        if (editingCourseId === null) {
            // Adding a new course
            const course = {
                id: Date.now(),
                name: courseName,
                category: courseCategory,
                tags: courseTags.split(',').map(tag => tag.trim()),
                description: courseDescription
            };
            courses.push(course);
        } else {
            // Editing existing course
            const course = courses.find(c => c.id === editingCourseId);
            course.name = courseName;
            course.category = courseCategory;
            course.tags = courseTags.split(',').map(tag => tag.trim());
            course.description = courseDescription;
        }

        courseModal.style.display = 'none';
        renderCourses();
    });

    // Render courses in the table
    function renderCourses() {
        courseTableBody.innerHTML = '';
        courses.forEach(course => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.name}</td>
                <td>${course.category}</td>
                <td>${course.tags.join(', ')}</td>
                <td>${course.description}</td>
                <td>
                    <button onclick="editCourse(${course.id})">Edit</button>
                    <button onclick="deleteCourse(${course.id})">Delete</button>
                </td>
            `;
            courseTableBody.appendChild(row);
        });
    }

    // Edit course
    window.editCourse = function(id) {
        editingCourseId = id;
        const course = courses.find(c => c.id === id);

        document.getElementById('course-name').value = course.name;
        document.getElementById('course-category').value = course.category;
        document.getElementById('course-tags').value = course.tags.join(', ');
        document.getElementById('course-description').value = course.description;

        courseModal.style.display = 'flex';
    };

    // Delete course
    window.deleteCourse = function(id) {
        courses = courses.filter(c => c.id !== id);
        renderCourses();
    };

    // Quiz Logic
    const submitQuizButton = document.getElementById('submitQuiz');
    submitQuizButton.addEventListener('click', () => {
        const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
        let score = 0;

        selectedAnswers.forEach(answer => {
            if (answer.value === "correct") {
                score++;
            }
        });

        const progress = document.getElementById('progress');
        progress.textContent = `Course Progress: ${(score / 2) * 100}%`;

        alert(`You scored ${score}/2!`);
    });

    // Certificate Logic
    const generateCertificateButton = document.getElementById('generateCertificate');
    generateCertificateButton.addEventListener('click', () => {
        const certificateContainer = document.getElementById('certificateContainer');
        certificateContainer.innerHTML = `<h3>Congratulations!</h3><p>You have successfully completed the course.</p>`;
    });
});
