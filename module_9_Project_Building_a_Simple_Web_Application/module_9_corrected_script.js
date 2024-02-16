
document.addEventListener('DOMContentLoaded', function() {
    const projectsList = document.getElementById('projects-list');
    const projects = ['Project 1', 'Project 2', 'Project 3'];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.textContent = project;
        projectsList.appendChild(projectElement);
    });
    
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
    });
});
