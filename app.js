var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    var workExperience = document.getElementById('workExperience').value;
    // Validation check
    if (name === '' || email === '' || skills === '' || workExperience === '') {
        alert('Please fill all mandatory fields.');
        return;
    }
    // Dynamically generate the resume with contenteditable sections
    resumeContainer.style.display = 'block';
    resumeContainer.innerHTML = "\n        <h2 contenteditable=\"true\">".concat(name, "</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Skills:</strong> <span contenteditable=\"true\">").concat(skills, "</span></p>\n        <p><strong>Work Experience:</strong> <span contenteditable=\"true\">").concat(workExperience, "</span></p>\n    ");
    // Add event listener to save changes when content is edited
    resumeContainer.querySelectorAll('[contenteditable]').forEach(function (element) {
        element.addEventListener('input', function () {
            console.log("".concat(element.textContent, " has been edited."));
        });
    });
});
