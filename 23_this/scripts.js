let pessoa={
    nome:'hugo',
    idade:16,
    curso:'informatica',
    falar: function(){
        console.log('olá, tudo bem?')
    },
    fazerAniversario:function(){
        pessoa.idade+=1
    }
}


console.log(pessoa.idade);

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

console.log(pessoa.idade)