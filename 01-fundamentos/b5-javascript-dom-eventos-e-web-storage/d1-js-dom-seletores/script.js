//Q01
function changingTag() {
    let tagsP = document.getElementsByTagName('p');
        tagsP[0].innerHTML = 'Desejo estar trabalhando, avançando na carreira a cada dia, buscando vencer os desafios, acumular conhecimento para crescimento pessoal e profissional, no caminho para me tornar um desenvolvedor nível pleno, depois sênior.';
        tagsP[1].innerHTML = '';
        tagsP[2].innerHTML = '';
}
changingTag();

//Q02
function changeColor() {
    let colorBg = document.getElementsByClassName('main-content');
        colorBg[0].style.backgroundColor = 'rgb(76,164,109)';
}
changeColor();

//Q03
function colorBgCenter() {
    let changeBgCenter = document.getElementsByClassName('center-content');
        changeBgCenter[0].style.backgroundColor = 'white';
}
colorBgCenter();

//Q04
function correctText() {
    let text = document.getElementsByClassName('title');
        text[0].innerHTML = 'Exercício 5.1 - JavaScript';
}
correctText();

//Q05
function upperCase() {
    let upperC = document.getElementsByTagName('p');
        upperC[0].style.textTransform = 'UpperCase';
        upperC[0].style.textAlign = 'center'
}
upperCase();

//Q06
function print() {
    let displayTheContent = document.getElementsByTagName('p');
    console.log(displayTheContent);
}
print();