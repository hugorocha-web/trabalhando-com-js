let pessoa={
    nome:'hugo',
    idade:16,
    curso:'informatica',
    falar: function(){
        console.log('olá,',this.nome,'tudo bem?')
    },
    fazerAniversario:function(){
        this.idade+=1
    }
}

pessoa.falar()
console.log(pessoa.idade);

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

console.log(pessoa.idade)