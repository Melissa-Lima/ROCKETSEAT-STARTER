// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 4-6 anos: Avançado
// De 7 acima: Jedi Master

function experiencia(anos) {
    var level;
    if (anos >= 7) {
        level = "Jedi Master";
    } else if (anos >= 4) {
        level = "Avançado";
    } else if (anos > 1) {
        level = "Intermediário";
    } else {
        level = "Iniciante";
    }
    return level;
}

var anosEstudo1 = 7;
var anosEstudo2 = 6;
var anosEstudo3 = 5;
var anosEstudo4 = 4;
var anosEstudo5 = 3;
var anosEstudo6 = 2;
var anosEstudo7 = 1;

console.log(experiencia(anosEstudo1));
console.log(experiencia(anosEstudo2));
console.log(experiencia(anosEstudo3));
console.log(experiencia(anosEstudo4));
console.log(experiencia(anosEstudo5));
console.log(experiencia(anosEstudo6));
console.log(experiencia(anosEstudo7));