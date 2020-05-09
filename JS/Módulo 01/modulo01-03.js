//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não
function temHabilidade(skills) {
    for (var i = 0; i<skills.length; i++) {
        if (skills[i] == "Javascript") {
            return true;
        }
    }
    return false;
}

//Outra alternativa usando indexOf

function temHabilidade2(skills) {
    var elem = skills.indexOf("Javascript");
    return (elem > -1) ? true : false;
}

var skills1 = ["Javascript", "ReactJS", "React Native"];
var skills2 = ["Python", "Django", "Flask"];

console.log(temHabilidade(skills1)); // true ou false
console.log(temHabilidade(skills2)); // true ou false
console.log(temHabilidade2(skills1)); // true ou false
console.log(temHabilidade2(skills2)); // true ou false
