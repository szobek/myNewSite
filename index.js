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
document.addEventListener('DOMContentLoaded', function () {
    writeSkillList();
});


function writeSkillList() {
    const skilldiv = document.getElementById('skills');
    let text = ``;
    for(let skill of skills){
        text += `<div class="d-flex align-items-center">`;
        for(let box of Array.from({length:skill.full})){
            text += `<div class="skill-box full"></div>`;
        }
        for(let box of Array.from({length:skill.empty})){
            text += `<div class="skill-box empty"></div>`;
        }
        text += `<div>${skill.name}</div>`;
        text += `</div>`;
        
    }
    skilldiv.innerHTML = text;

}