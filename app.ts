const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resume') as HTMLElement;

form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;


    if (name === '' || email === '' || skills === '' || workExperience === '') {
        alert('Please fill all mandatory fields.');
        return;
    }

  
    resumeContainer.style.display = 'block';
    resumeContainer.innerHTML = `
        <h2 contenteditable="true">${name}</h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Skills:</strong> <span contenteditable="true">${skills}</span></p>
        <p><strong>Work Experience:</strong> <span contenteditable="true">${workExperience}</span></p>
    `;

    resumeContainer.querySelectorAll('[contenteditable]').forEach(element => {
        element.addEventListener('input', () => {
            console.log(`${element.textContent} has been edited.`);
        });
    });
});
