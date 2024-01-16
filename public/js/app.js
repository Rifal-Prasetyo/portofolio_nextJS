const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('terlihat');

        } else {
            entry.target.classList.remove('terlihat');
        }
    });
});


const hiddenElements = document.querySelectorAll('.sembunyi');
hiddenElements.forEach((el) => observer.observe(el));

