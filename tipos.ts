//link de todos os tipos de TypeScript
//https://www.typescriptlang.org/docs/handbook/basic-types.html


// Boolean 
const contaPaga: boolean = false;

// Number

const idade: number = 12;

// String 

const nome: string = 'John';

// Array 

const idades: number[] = [12, 18 , 22];
const idades2: Array<number> = [15, 22, 72];

// Tuple

let jogadores: [string, string, string];
jogadores = ['John', 'Luan', 'Samin'];

// Enum

enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any

const retornoDaAPI: any[] = [123, 'john', false];
const retornoDaAPI2: any = {
    //.......
};

// Void 

function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined 

const u: undefined = undefined;
const n: null = null;

// Object 

function criar(Objecto: object) {
    // ...
}
criar({
    propriedade: 1,
})
// ciar('string') // Dá erro

// Never

function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Union Types

const nota: string | number = 5;
function exibirNota (nota: number | string) {
    console.log(`A nota é: ${nota}`);
}
exibirNota('10');
exibirNota(10);

// Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<string>;
const funcionarios: Funcionario[] = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()

}, {
    nome: 'Fulano',
    sobrenome: 'Farias',
    dataNascimento: new Date()

}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

// operador ? faz com que o termo possa ser null ou undefined exemplo:
let altura: number | null = 1.6
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: 'John',
    telefone1: '2891892819',
};

// Type Assertion

const minhaIdade: any = 23;
(minhaIdade as number).toString();

// const input = <HTMLInputElement>document.getElementById("numero1"); || outra maneira de fazer...
const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

//link de todos os tipos de TypeScript
//https://www.typescriptlang.org/docs/handbook/basic-types.html
