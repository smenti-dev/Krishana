document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check local storage or system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // --- Set Current Year in Footer ---
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = 'var(--shadow-md)';
        } else {
            nav.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // --- Populate Data ---
    if (typeof portfolioData !== 'undefined') {
        populateProfile(portfolioData.profile);
        populateResearch(portfolioData.research);
        populatePublications(portfolioData.publications);
        populateExperience(portfolioData.experience);
        populateCertifications(portfolioData.certifications);
        populateActivities(portfolioData.activities);
        populatePeerReview(portfolioData.peerReview);
    } else {
        console.error("portfolioData not found. Ensure data.js is loaded before script.js.");
    }
});

function populateProfile(profile) {
    document.getElementById('hero-name').textContent = profile.name;
    document.getElementById('hero-title').textContent = profile.title + " | " + profile.department;
    document.getElementById('hero-bio').textContent = profile.shortBio;
    
    document.getElementById('about-text').innerHTML = `<p>${profile.fullBio}</p>`;
    document.getElementById('about-dept').textContent = profile.department;
    document.getElementById('about-uni').textContent = profile.university;

    // Academic IDs
    if (document.getElementById('scopus-id')) document.getElementById('scopus-id').textContent = profile.scopusId;
    if (document.getElementById('researcher-id')) document.getElementById('researcher-id').textContent = profile.researcherId;

    // Stats banner
    if (profile.stats) {
        if (document.getElementById('stat-pubs')) document.getElementById('stat-pubs').textContent = profile.stats.publications;
        if (document.getElementById('stat-cites')) document.getElementById('stat-cites').textContent = profile.stats.citations;
        if (document.getElementById('stat-reads')) document.getElementById('stat-reads').textContent = profile.stats.reads;
    }

    document.getElementById('contact-email').textContent = profile.email;
    document.getElementById('contact-email-link').href = `mailto:${profile.email}`;
    document.getElementById('contact-linkedin-link').href = profile.linkedin;
    document.getElementById('contact-uni-link').href = profile.institutionUrl;
    if (document.getElementById('contact-rg-link') && profile.researchGate) {
        document.getElementById('contact-rg-link').href = profile.researchGate;
    }
}

function populateResearch(researchAreas) {
    const grid = document.getElementById('research-grid');
    grid.innerHTML = ''; // clear

    const icons = ['fa-dna', 'fa-microscope', 'fa-pills'];

    researchAreas.forEach((area, index) => {
        const iconClass = icons[index % icons.length];
        const tagsHtml = area.tools.map(tool => `<span class="tag">${tool}</span>`).join('');
        
        const html = `
            <div class="research-card">
                <div class="research-icon">
                    <i class="fas ${iconClass}"></i>
                </div>
                <h3>${area.title}</h3>
                <p class="text-muted">${area.description}</p>
                <div class="tools-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

function populatePublications(publications) {
    const list = document.getElementById('publications-list');
    
    // Function to render
    const renderList = (pubsToRender) => {
        list.innerHTML = '';
        if (pubsToRender.length === 0) {
            list.innerHTML = '<p>No publications found for this category.</p>';
            return;
        }

        pubsToRender.forEach(pub => {
            const isTop = pub.topPaper ? 'top-paper' : '';
            const topBadge = pub.topPaper ? '<span class="tag bg-primary text-white" style="font-size: 0.7rem;">Top Paper</span>' : '';
            
            const html = `
                <div class="pub-card ${isTop}">
                    <h3 class="pub-title">${pub.title}</h3>
                    <div class="pub-meta">
                        <span class="pub-journal">${pub.journal}</span>
                        <span>&bull;</span>
                        <span>${pub.year}</span>
                        <span>&bull;</span>
                        <span class="pub-type">${pub.type}</span>
                        <span class="pub-citations"><i class="fas fa-quote-right"></i> ${pub.citations} Citations</span>
                        ${topBadge}
                    </div>
                </div>
            `;
            list.insertAdjacentHTML('beforeend', html);
        });
    };

    // Initial render all
    renderList(publications);

    // Setup filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');
            
            let filtered = [];
            if (filterValue === 'all') {
                filtered = publications;
            } else if (filterValue === 'top') {
                filtered = publications.filter(p => p.topPaper);
            } else {
                filtered = publications.filter(p => p.type === filterValue);
            }

            renderList(filtered);
        });
    });
}

function populateExperience(experience) {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = '';

    experience.forEach(exp => {
        const html = `
            <div class="timeline-item">
                <div class="timeline-role">${exp.role}</div>
                <div class="timeline-meta">${exp.institution} | ${exp.period}</div>
                <p class="text-muted">${exp.description}</p>
            </div>
        `;
        timeline.insertAdjacentHTML('beforeend', html);
    });
}

function populateCertifications(certs) {
    const grid = document.getElementById('cert-grid');
    grid.innerHTML = '';

    certs.forEach(cert => {
        const html = `
            <div class="cert-card">
                <i class="fas fa-certificate cert-icon"></i>
                <div>
                    <h4 style="margin-bottom: 0.25rem;">${cert.title}</h4>
                    <span style="font-size: 0.85rem; color: var(--text-muted);">${cert.issuer}</span>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', html);
    });
}

function populateActivities(activities) {
    const list = document.getElementById('activities-list');
    list.innerHTML = '';

    activities.forEach(act => {
        const html = `<li>${act}</li>`;
        list.insertAdjacentHTML('beforeend', html);
    });
}

function populatePeerReview(reviews) {
    const grid = document.getElementById('peer-review-grid');
    if (!grid || !reviews) return;
    grid.innerHTML = '';

    reviews.forEach(r => {
        const html = `
            <div class="peer-review-card">
                <div class="pr-reviews">${r.reviews}</div>
                <div>
                    <div class="pr-journal">${r.journal}</div>
                    <div class="pr-years">${r.years}</div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', html);
    });
}
