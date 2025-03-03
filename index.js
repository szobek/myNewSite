skills = [
    { name: 'HTML', empty: 0, full: 5 },
    { name: 'JavaScript', empty: 0, full: 5 },
    { name: 'Angular', empty: 1, full: 4 },
    { name: 'TypeScript', empty: 1, full: 4 },
    { name: 'SCSS', empty: 0, full: 5 },
    { name: 'SEO', empty: 2, full: 3 },
    { name: 'PHP', empty: 2, full: 3 },
    { name: 'MySQL', empty: 2, full: 3 },
    { name: 'WordPress', empty: 2, full: 3 },
    { name: 'Java', empty: 3, full: 2 },
    { name: 'Docker', empty: 3, full: 2 },
];
works = [
    {
        title: "Létezz könnyedén",
        description: "Az egész oldalt én csináltam Angularral a megrendelő ötlete szerint készült a design.",
        image: "./assets/létezz_könnyedén_logo.png",
        logos: ["assets/angular_logo.png"]
    },
    
    {
        title: "BME Környezetgazdaság tanszék",
        description: "A backendet is én csináltam (Laravel ) és a frontendet a bladek jelenítik meg (SSR).",
        image: "./assets/bme_logo.png",
        logos: ["assets/laravel_logo.png","assets/mysql_logo.png"]
    },
    {
        title: "Zöldséges",
        description: "A frontendet csináltam ebben a projektben, együtt működve az UI csapattal és backendes csapattal",
        image: "./assets/zoldseges_logo.png",
        logos: ["assets/angular_logo.png"]
    },
    {
        title: "Futárom",
        description: "A frontendet csináltam ebben a projektben, együtt működve az UI csapattal és backendes csapattal",
        image: "./assets/futarom_logo.png",
        logos: ["assets/JS_logo.png"]
    },
    {
        title: "Pimpa",
        description: "A backendet is én csináltam ( Laravel ) és a frontendet a bladek jelenítik meg (SSR).",
        image: "./assets/pimpa_logo.png",
        logos: ["assets/laravel_logo.png","assets/mysql_logo.png"]
    },
    {
        title: "Ammarna",
        description: "A frontendet ( Angular ) csináltam ebben a projektben, együtt működve az UI csapattal és backendes csapattal",
        image: "./assets/ammarna_logo.png",
        logos: ["assets/angular_logo.png"]
    },

]
document.addEventListener('DOMContentLoaded', function () {
    writeSkillList();
    writeWorkList();
});


function writeSkillList() {
    const skilldiv = document.getElementById('skills');
    let text = ``;
    for (let skill of skills) {
        text += `<div class="d-flex align-items-center">`;
        for (let box of Array.from({ length: skill.full })) {
            text += `<div class="skill-box full"></div>`;
        }
        for (let box of Array.from({ length: skill.empty })) {
            text += `<div class="skill-box empty"></div>`;
        }
        text += `<div>${skill.name}</div>`;
        text += `</div>`;

    }
    skilldiv.innerHTML = text;

}
function writeWorkList() {
    const workdiv = document.getElementById('works');
    let text = ``;
    for (let work of works) {
        text += `<div class="work">`;
        text += `<h3>${work.title}</h3>`;
        text += `<p>${work.description}</p>`;
        text += `<img src="${work.image}" class="site_logo" alt="${work.title}">`;
        text += `<div class="dev-logo-wrapper">`;
        for (let logo of work.logos) {
            text += `<img src="${logo}" class="dev_logo" alt="${work.title}">`;
        }
        text += `</div>`;
        text += `</div>`;
    }
    workdiv.innerHTML = text;
}