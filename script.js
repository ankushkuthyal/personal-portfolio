var typed = new Typed(".typing", {
	strings:["", "Web Designer", "Ankush Kuthyal"],
	typeSpeed:200,
	Backspeed:200,
	loop:true,
	showCursor: false
})

// Get all links and sections
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

// Function to show the clicked section and hide others
function showSection(event) {
    event.preventDefault();

    // Hide all sections by removing active class
    sections.forEach((section) => {
        section.classList.remove("active");
        section.style.opacity = 0;
    });

    // Remove active class from all links
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });

    // Add active class to the clicked link
    event.currentTarget.classList.add("active");

    // Get the target section's ID from the href attribute
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Use a short delay to allow fade-out before showing the new section
    setTimeout(() => {
        targetSection.classList.add("active");
        targetSection.style.opacity = 1;
    }, 100);
}

// Show only the home section initially
document.getElementById("home").classList.add("active");

// Add click event listeners to all navigation links
navLinks.forEach((link) => {
    link.addEventListener("click", showSection);
});


function openModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10); // Show modal with animation
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show'); // Remove the show class to trigger fade out
    setTimeout(() => {
        modal.style.display = 'none'; // Hide modal after animation completes
    }, 300); // Match the animation duration to ensure smooth closing
}

document.getElementById("closeBtn").onclick = closeModal;

document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', openModal);
});

//Project 1
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

// Modal close function
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 2
function openModal2(projectId) {
    const modal = document.getElementById('projectModal2');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal2() {
    const modal = document.getElementById('projectModal2');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}


//Project 3
function openModal3(projectId) {
    const modal = document.getElementById('projectModal3');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal3() {
    const modal = document.getElementById('projectModal3');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 4
function openModal4(projectId) {
    const modal = document.getElementById('projectModal4');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal4() {
    const modal = document.getElementById('projectModal4');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 5
function openModal5(projectId) {
    const modal = document.getElementById('projectModal5');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal5() {
    const modal = document.getElementById('projectModal5');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 6
function openModal6(projectId) {
    const modal = document.getElementById('projectModal6');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal6() {
    const modal = document.getElementById('projectModal6');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 7
function openModal7(projectId) {
    const modal = document.getElementById('projectModal7');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal7() {
    const modal = document.getElementById('projectModal7');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 8
function openModal8(projectId) {
    const modal = document.getElementById('projectModal8');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal8() {
    const modal = document.getElementById('projectModal8');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}

//Project 9
function openModal9(projectId) {
    const modal = document.getElementById('projectModal9');
    modal.style.display = 'flex'; // Modal ko dikhana
    setTimeout(() => {
        modal.classList.add('show'); // Animation class add karna
    }, 10);

    // Project-specific content ko dikhana
    const allContents = document.querySelectorAll('.modalDetails');
    allContents.forEach(content => content.style.display = 'none'); // Sabhi content ko hide karna

    const currentContent = document.getElementById(`modalContent${projectId}`);
    if (currentContent) {
        currentContent.style.display = 'block'; // Current project content ko dikhana
    }
}

function closeModal9() {
    const modal = document.getElementById('projectModal9');
    modal.classList.add('hide'); // Animation ke liye class add karna
    setTimeout(() => {
        modal.classList.remove('show', 'hide'); // Classes ko remove karna
        modal.style.display = 'none'; // Modal ko hide karna
    }, 300); // Animation duration ke saath match karna
}
