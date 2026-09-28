// Animated job titles
        const typed = new Typed(".typed-text", {
            strings: [
                "Java Developer",
                "Web Developer",
                "Student Developer",
                "Software Engineer"
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1200,
            loop: true
        });

        // Mobile navigation
        const menuButton = document.getElementById("menuButton");
        const mobileMenu = document.getElementById("mobileMenu");

        menuButton.addEventListener("click", function () {
            const isHidden = mobileMenu.classList.toggle("hidden");

            menuButton.setAttribute("aria-expanded", String(!isHidden));
            menuButton.innerHTML = isHidden
                ? '<i class="bx bx-menu"></i>'
                : '<i class="bx bx-x"></i>';
        });

        // Close mobile menu after clicking a link
        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("hidden");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.innerHTML = '<i class="bx bx-menu"></i>';
            });
        });

        // Highlight active navigation section
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(
            'header nav a[href^="#"]'
        );

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                }
            });
        }, {
            rootMargin: "-25% 0px -60% 0px"
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });

        // Current year
        document.getElementById("year").textContent =
            new Date().getFullYear();
