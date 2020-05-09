//Crie uma função que dado o objeto a seguir:

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

//Retorne o seguinte conteúdo:
//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
//nº 1293.

function retornaEndereco(objeto) {
    var texto = "O usuário mora em " + objeto.rua + " / " + objeto.uf + ", no bairro " + objeto.bairro + ", na rua " + "\"" + objeto.rua + "\" com número " + objeto.numero;
    return texto;
}

console.log(retornaEndereco(endereco));