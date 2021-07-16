"use strict";
//link de todos os tipos de TypeScript
//https://www.typescriptlang.org/docs/handbook/basic-types.html
// Boolean 
var contaPaga = false;
// Number
var idade = 12;
// String 
var nome = 'John';
// Array 
var idades = [12, 18, 22];
var idades2 = [15, 22, 72];
// Tuple
var jogadores;
jogadores = ['John', 'Luan', 'Samin'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'john', false];
var retornoDaAPI2 = {
//.......
};
// Void 
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined 
var u = undefined;
var n = null;
// Object 
function criar(Objecto) {
    // ...
}
criar({
    propriedade: 1,
});
// ciar('string') // Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9: " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<string>;
var funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// operador ? faz com que o termo possa ser null ou undefined exemplo:
var altura = 1.6;
altura = null;
var contato = {
    nome: 'John',
    telefone1: '2891892819',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
// const input = <HTMLInputElement>document.getElementById("numero1"); || outra maneira de fazer...
var input = document.getElementById("numero1");
console.log(input.value);
//link de todos os tipos de TypeScript
//https://www.typescriptlang.org/docs/handbook/basic-types.html
