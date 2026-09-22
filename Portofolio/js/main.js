// ========== TYPING EFFECT ==========
const typingText = document.getElementById('typing-text');
const names = ['Riton Stefano', 'Web Developer', 'Mahasiswa'];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
    const currentName = names[nameIndex];
    if (isDeleting) {
        typingText.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
    }
    // Delay
    let delay = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentName.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        delay = 500;
    }
    setTimeout(typeEffect, delay);
}
// Start typing effect
typeEffect();
// ========== GENERATE PROJECT CARDS ==========
const projects = [
    {
        title: 'Website Profil',
        desc: 'Website profil pribadi dengan HTML & CSS',
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Profil'
    },
    {
        title: 'Kalkulator',
        desc: 'Kalkulator interaktif dengan JavaScript',
        image:
            'https://via.placeholder.com/300x200/2563eb/fff?text=Kalkulator'
    },
    {
        title: 'Form Pendaftaran',
        desc: 'Form interaktif dengan validasi',
        image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Form'
    }
];
const projectGrid = document.getElementById('project-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
<img src="${project.image}" alt="${project.title}">
<h3>${project.title}</h3>
<p>${project.desc}</p>
`;
    // Click event
    card.addEventListener('click', function () {
        alert(`Anda memilih proyek: ${project.title}`);
    });
    projectGrid.appendChild(card);
});
// ========== SMOOTH SCROLL NAV ==========
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Hanya untuk anchor links (jika ada)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
// ========== ACTIVE NAV LINK ==========
// Highlight nav based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// =========================================================
// ABOUT & CONTACT JAVASCRIPT
// =========================================================


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const charCount = document.getElementById('char-count');
    const formStatus = document.getElementById('form-status');


    // ================================
    // CHARACTER COUNTER
    // ================================

    if (messageInput && charCount) {

        messageInput.addEventListener('input', function () {

            const currentLength = messageInput.value.length;

            charCount.textContent =
                `${currentLength}/500`;

        });

    }


    // ================================
    // CLEAR ERROR
    // ================================

    function clearFormErrors() {

        document.querySelectorAll('.error-message')
            .forEach(function (error) {

                error.textContent = '';

            });

        formStatus.className = '';
        formStatus.textContent = '';

    }


    // ================================
    // FORM SUBMIT
    // ================================

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        clearFormErrors();

        let valid = true;


        // ================================
        // NAME
        // ================================

        if (nameInput.value.trim() === '') {

            document.getElementById('name-error')
                .textContent = 'Nama wajib diisi.';

            valid = false;

        }


        // ================================
        // EMAIL
        // ================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === '') {

            document.getElementById('email-error')
                .textContent = 'Email wajib diisi.';

            valid = false;

        } else if (!emailPattern.test(emailInput.value)) {

            document.getElementById('email-error')
                .textContent = 'Format email tidak valid.';

            valid = false;

        }


        // ================================
        // SUBJECT
        // ================================

        if (subjectInput.value.trim() === '') {

            document.getElementById('subject-error')
                .textContent = 'Subjek wajib diisi.';

            valid = false;

        }


        // ================================
        // MESSAGE
        // ================================

        if (messageInput.value.trim() === '') {

            document.getElementById('message-error')
                .textContent = 'Pesan wajib diisi.';

            valid = false;

        } else if (messageInput.value.trim().length < 10) {

            document.getElementById('message-error')
                .textContent =
                'Pesan minimal 10 karakter.';

            valid = false;

        }


        // ================================
        // RESULT
        // ================================

        if (valid) {

            formStatus.className = 'success';

            formStatus.textContent =
                '✓ Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.';

            contactForm.reset();

            if (charCount) {
                charCount.textContent = '0/500';
            }

        } else {

            formStatus.className = 'error';

            formStatus.textContent =
                'Silakan periksa kembali data yang Anda masukkan.';

        }

    });

}
