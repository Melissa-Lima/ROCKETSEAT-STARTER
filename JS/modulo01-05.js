// Dado o seguinte vetor de objetos:

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    },
    {
        nome: "Melissa",
        habilidades: ["Javascript", "HTML5", "CSS3"]
    }
];

//Escreva uma função que produza o seguinte resultado:

// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
// A Melissa possui as habilidades: Javascript, HTML5, CSS3

function skills(object) {
    var elements;
    var texto = "";
    for (let pessoa of object) {
        elements = pessoa.habilidades.join(', ');
        texto += "O/A " + pessoa.nome + " possui as habilidades: " + elements + "\n";
    }

    return texto;
}

console.log(skills(usuarios));