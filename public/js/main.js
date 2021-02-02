import{calculer} from './calcul.js'

// LES CHIFFRES
let lesChiffres = document.querySelectorAll('.nombreBtn')
console.log(lesChiffres);

// CALCUL
let operations = document.querySelectorAll('.opBtn')
console.log(operations);

let egal = document.querySelectorAll('#egal')
console.log(clear);

// ECRAN
let ecran = document.querySelector('#Ecran>p')
console.log(ecran)
let ecranEnsemble = document.querySelector('#Container')
console.log(ecranEnsemble);

ecranEnsemble.addEventListener('click', (e) =>{
    let laTarget = e.target
    let contenuTarget = laTarget.innerText
    let chiffreEcran = ecran.innerText
    if (laTarget.matches('button')) {
        if (laTarget.value === 'add' || laTarget.value === 'subtract' || laTarget.value === 'multiply' || laTarget.value === 'divide') {
            ecranEnsemble.dataset.coucou = "salut"
            ecranEnsemble.dataset.firstNum = chiffreEcran
            ecranEnsemble.dataset.operateur = laTarget.value
        } else if (laTarget.value === 'calculate') {
            let firstNum = ecranEnsemble.dataset.firstNum
            let operateur = ecranEnsemble.dataset.operateur
            let secondNum = chiffreEcran
            ecran.innerText = calculer(firstNum,operateur,secondNum)
        } else if (laTarget.value === 'clear') {
            ecran.innerText = 0
            ecranEnsemble.removeAttribute('data-first-num');
            ecranEnsemble.removeAttribute('data-operateur');
        } else if (laTarget.value === 'virgule') {
            ecran.innerText = chiffreEcran + '.'
        } else {
            if (chiffreEcran === '0' || ecranEnsemble.dataset.coucou === "salut") {
                ecran.innerText = contenuTarget
                ecranEnsemble.removeAttribute('data-coucou')
            } else {
                ecran.innerText = chiffreEcran + contenuTarget
            }
        }
    }
})