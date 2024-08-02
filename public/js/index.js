document.getElementById('menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        mobileMenu.style.maxHeight = '0';
    }
});

document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const review = document.getElementById('review').value;

    if (!name) {
        document.getElementById('name-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('name-error').classList.add('hidden');
    }

    if (!rating) {
        document.getElementById('rating-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('rating-error').classList.add('hidden');
    }

    if (!review) {
        document.getElementById('review-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('review-error').classList.add('hidden');
    }

    if (isValid) {
        const reviewHTML = `
            <div class="review-card">
                <div class="review-header">
                    <span class="name">${name}</span>
                    <div class="stars">${'★'.repeat(rating.value)}${'☆'.repeat(5 - rating.value)}</div>
                </div>
                <p class="text-gray-600">${review}</p>
            </div>
        `;
        document.getElementById('submitted-reviews').insertAdjacentHTML('beforeend', reviewHTML);

        // Clear form
        document.getElementById('review-form').reset();
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name) {
        document.getElementById('contact-name-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('contact-name-error').classList.add('hidden');
    }

    if (!email || !validateEmail(email)) {
        document.getElementById('email-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('email-error').classList.add('hidden');
    }

    if (!message) {
        document.getElementById('message-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('message-error').classList.add('hidden');
    }

    if (isValid) {
        alert('Pesan telah terkirim!');
        // Clear form
        document.getElementById('contact-form').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
