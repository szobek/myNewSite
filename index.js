import {data } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    writeSkillList();
    writeWorkList();
});


function writeSkillList() {
    const skilldiv = document.getElementById('skills');
    let text = ``;
    for (let skill of data.skills) {
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
    for (let work of data.works) {
        text += `<div class="work">`;
        text += `<h3>${work.title}</h3>`;
        text += `<p class="work-description">${work.description}</p>`;
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