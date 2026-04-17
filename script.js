document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
        if (isDark) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('theme','light'); themeIcon.classList.replace('fa-sun','fa-moon'); }
        else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('theme','dark'); themeIcon.classList.replace('fa-moon','fa-sun'); }
    });

    // Mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    mobileBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('active')));

    // Navbar scroll shadow
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').style.boxShadow = window.scrollY > 50 ? '0 4px 12px rgba(0,0,0,.1)' : '0 1px 3px rgba(0,0,0,.06)';
    });

    // Footer year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Populate
    if (typeof portfolioData !== 'undefined') {
        populateProfile(portfolioData.profile);
        populateResearch(portfolioData.research);
        populateTopPapers(portfolioData.publications);
        populatePublications(portfolioData.publications);
        populateExperience(portfolioData.experience);
        populateCertifications(portfolioData.certifications);
        populateActivities(portfolioData.activities);
        populatePeerReview(portfolioData.peerReview);
    }
});

function populateProfile(p) {
    document.getElementById('hero-name') && (document.getElementById('hero-name').textContent = p.name);
    const ps = document.getElementById('positioning-statement');
    if (ps) ps.textContent = p.positioningStatement || '';
    document.getElementById('about-text').innerHTML = `<p>${p.fullBio}</p>`;
    document.getElementById('about-dept').textContent = p.department;
    document.getElementById('about-uni').textContent = p.university;
    document.getElementById('scopus-id').textContent = p.scopusId;
    document.getElementById('researcher-id').textContent = p.researcherId;
    document.getElementById('contact-email').textContent = p.email;
    document.getElementById('contact-email-link').href = `mailto:${p.email}`;
    document.getElementById('contact-linkedin-link').href = p.linkedin;
    document.getElementById('contact-uni-link').href = p.institutionUrl;
    const rg = document.getElementById('contact-rg-link');
    if (rg && p.researchGate) rg.href = p.researchGate;
    const gs = document.getElementById('contact-scholar-link');
    if (gs && p.googleScholar) gs.href = p.googleScholar;
    const orcid = document.getElementById('contact-orcid-link');
    if (orcid && p.orcid) orcid.href = p.orcid;
}

function populateResearch(areas) {
    const icons = ['fa-dna', 'fa-microscope', 'fa-pills'];
    const grid = document.getElementById('research-grid');
    grid.innerHTML = areas.map((a, i) => `
        <div class="research-card">
            <div class="research-icon"><i class="fas ${icons[i % icons.length]}"></i></div>
            <h3>${a.title}</h3>
            <div class="research-problem"><i class="fas fa-question-circle"></i> The Problem</div>
            <div class="research-answer">${a.problem}</div>
            <div class="research-answer" style="margin-bottom:.5rem">${a.whyMatters}</div>
            <div class="research-methods-label"><i class="fas fa-cogs"></i> Methods</div>
            <div class="research-methods">${a.methods}</div>
            <div class="tools-tags">${a.tools.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>`).join('');
}

function populateTopPapers(pubs) {
    const top = pubs.filter(p => p.topPaper).sort((a, b) => b.citations - a.citations);
    const grid = document.getElementById('top-papers-grid');
    grid.innerHTML = top.map(p => `
        <div class="top-paper-card">
            <div class="tp-citations"><i class="fas fa-quote-right"></i> ${p.citations} Citations</div>
            <div class="tp-title">${p.title}</div>
            <div class="tp-journal">${p.journal}, ${p.year}</div>
        </div>`).join('');
}

function populatePublications(pubs) {
    const list = document.getElementById('publications-list');
    const sorted = [...pubs].sort((a, b) => b.year - a.year);

    const render = (items) => {
        list.innerHTML = items.length === 0
            ? '<p style="color:var(--text-muted)">No publications in this category.</p>'
            : items.map((p, idx) => `
                <div class="pub-card">
                    <div class="pub-card-header">
                        <div class="pub-title">${idx + 1}. ${p.title}</div>
                        <div class="pub-right">
                            <span class="pub-year">${p.year}</span>
                            ${p.citations > 0 ? `<span class="pub-citations"><i class="fas fa-quote-right"></i> ${p.citations}</span>` : ''}
                        </div>
                    </div>
                    <div class="pub-bottom">
                        <span class="pub-journal">${p.journal}</span>
                        <span class="pub-type-badge">${p.type}</span>
                        ${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" class="pub-doi-link"><i class="fas fa-external-link-alt"></i> DOI</a>` : ''}
                    </div>
                </div>`).join('');
    };

    render(sorted);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const f = e.target.dataset.filter;
            const filtered = f === 'all' ? sorted : sorted.filter(p => p.type === f);
            render(filtered);
        });
    });
}

function populateExperience(exp) {
    document.getElementById('experience-timeline').innerHTML = exp.map(e => `
        <div class="timeline-item">
            <div class="timeline-role">${e.role}</div>
            <div class="timeline-meta">${e.institution} &nbsp;|&nbsp; ${e.period}</div>
            <div class="timeline-desc">${e.description}</div>
        </div>`).join('');

    // Render courses
    const cg = document.getElementById('courses-grid');
    if (cg) {
        const allCourses = exp.flatMap(e => e.courses || []);
        cg.innerHTML = allCourses.map(c =>
            `<div class="course-item"><i class="fas fa-angle-right"></i>${c}</div>`
        ).join('');
    }
}

function populateCertifications(certs) {
    document.getElementById('cert-grid').innerHTML = certs.map(c => `
        <div class="cert-card">
            <i class="fas fa-certificate cert-icon"></i>
            <div><h4>${c.title}</h4><span>${c.issuer}</span></div>
        </div>`).join('');
}

function populateActivities(acts) {
    document.getElementById('activities-list').innerHTML = acts.map(a => `<li>${a}</li>`).join('');
}

function populatePeerReview(reviews) {
    const grid = document.getElementById('peer-review-grid');
    if (!grid || !reviews) return;
    grid.innerHTML = reviews.map(r => `
        <div class="peer-review-card">
            <div class="pr-reviews">${r.reviews}</div>
            <div>
                <div class="pr-journal">${r.journal}</div>
                <div class="pr-years">${r.years}</div>
            </div>
        </div>`).join('');
}
