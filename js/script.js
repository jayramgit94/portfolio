
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    const body = document.body;
    const toggleButton = this;

    // Toggle dark mode
    body.classList.toggle('dark-mode');

    // Update button text
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode'; // Opposite of dark mode
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        toggleButton.textContent = 'Dark Mode'; // Opposite of light mode
        localStorage.setItem('dark-mode', 'disabled');
    }
});

        // Check for saved user preference and apply it
        window.onload = function () {
            if (localStorage.getItem('dark-mode') === 'enabled') {
                document.body.classList.add('dark-mode');
            }
        };


        /* ----- NAVIGATION BAR FUNCTION ----- */
        function myMenuFunction() {
            var menuBtn = document.getElementById("myNavMenu");

            if (menuBtn.className === "nav-menu") {
                menuBtn.className += " responsive";
            } else {
                menuBtn.className = "nav-menu";
            }
        }

        /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
        window.onscroll = function () { headerShadow() };

        function headerShadow() {
            const navHeader = document.getElementById("header");

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

                navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
                navHeader.style.height = "70px";
                navHeader.style.lineHeight = "70px";

            } else {

                navHeader.style.boxShadow = "none";
                navHeader.style.height = "90px";
                navHeader.style.lineHeight = "90px";

            }
        }


        /* ----- TYPING EFFECT ----- */
        var typingEffect = new Typed(".typedText", {
            strings: ["Analytical Coder", "Developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000
        })


        /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1000,
            reset: true
        })

        /* -- HOME -- */
        sr.reveal('.featured-text-card', {})
        sr.reveal('.featured-name', { delay: 100 })
        sr.reveal('.featured-text-info', { delay: 200 })
        sr.reveal('.featured-text-btn', { delay: 200 })
        sr.reveal('.social_icons', { delay: 200 })
        sr.reveal('.featured-image', { delay: 300 })


        /* -- PROJECT BOX -- */
        sr.reveal('.project-box', { interval: 200 })

        /* -- HEADINGS -- */
        sr.reveal('.top-header', {})

        /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

        /* -- ABOUT INFO & CONTACT INFO -- */
        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 1500,
            reset: true
        })

        srLeft.reveal('.about-info', { delay: 100 })
        srLeft.reveal('.contact-info', { delay: 100 })

        /* -- ABOUT SKILLS & FORM BOX -- */
        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 1500,
            reset: true
        })

        srRight.reveal('.skills-box', { delay: 100 })
        srRight.reveal('.form-control', { delay: 100 })



        /* ----- CHANGE ACTIVE LINK ----- */

        const sections = document.querySelectorAll('section[id]')
        function scrollActive() {
            const scrollY = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 50,
                    sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

                } else {

                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

                }
            })
        }

        window.addEventListener('scroll', scrollActive)



        document.getElementById('contactForm').addEventListener('submit', async function (e) {
            e.preventDefault(); // Prevent default form submission

            // Get form data
            const formData = new FormData(this);

            // Submit form using fetch
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Clear form fields on successful submission
                this.reset();
                alert('Your message has been sent successfully!');
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        });

