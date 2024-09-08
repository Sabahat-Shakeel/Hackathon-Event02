var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    if (name === '' || email === '' || education === '' || skills === '' || workExperience === '') {
        alert('Please fill all mandatory fields.');
        return;
    }
    resumeContainer.style.display = 'block';
    resumeContainer.innerHTML = "\n        <h2 contenteditable=\"true\">".concat(name, "</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n           <p><strong>Education:</strong> <span contenteditable=\"true\">").concat(education, "</span></p>\n        <p><strong>Skills:</strong> <span contenteditable=\"true\">").concat(skills, "</span></p>\n        <p><strong>Work Experience:</strong> <span contenteditable=\"true\">").concat(workExperience, "</span></p>\n    ");
    resumeContainer.querySelectorAll('[contenteditable]').forEach(function (element) {
        element.addEventListener('input', function () {
            console.log("".concat(element.textContent, " has been edited."));
        });
    });
});
var downloadBtn = document.getElementById('downloadBtn');
downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener('click', function () {
    // File URL
    var fileUrl = 'resume.pdf'; // Apni PDF file ka naam ya URL dalain
    // Creating an invisible link element
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume.pdf'; // File ka download naam
    document.body.appendChild(a);
    a.click(); // Automatically link ko click karna
    document.body.removeChild(a); // Link ko remove karna
});
