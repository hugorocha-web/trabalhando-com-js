let pessoa={
    nome:'hugo',
    idade:16,
    curso:'informatica',
    falar: function(){
        console.log('olá, tudo bem?')
    },
    soma: function(a, b){
        return a+b
    }
}

pessoa.falar()

console.log(pessoa.soma(219,321))