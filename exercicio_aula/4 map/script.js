- map

//demonstração 1
let minhaListaDeCompras = ["maçã", "abacate", "pitaia", "tamarindo", "banana", "cajá", "butiá", "melão"]

// parametros do map function (elemento, indice, lista)
const minhaLista2 = minhaListaDeCompras.map( 
    function (elemento, indice, lista){
   return `o elemento ${elemento } no indice ${indice} esta na lista ${lista}`
    }   
)


//demonstracao 2
const sobrinhosDaVivian = [
    {
      nome: 'Beyoncé',
      idade: 1,
      castrado: true,
      cor: ['amarelo', 'branco', 'marrom', 'dourado'],
      caracteristica: ['brincalhão', 'dengoso'],
    },
    {
      nome: 'Iza',
      idade: 1,
      castrado: true,
      cor: ['branco', 'preto'],
      caracteristica: ['fofinha', 'sociável'],
    }
  ];

  const sobrinhosNome = sobrinhosDaVivian.map(function(sobrinho){
    return console.log(sobrinho.nome);
  })



-filter 
const idades = [ 23, 50, 12, 65, 10, 5, 80]


//o nosso filter ele filtra . 
const maioresDeIdade = idades.filter(function(idade){
    return idade >= 18;
})

console.log(maioresDeIdade);

