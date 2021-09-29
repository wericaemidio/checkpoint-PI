// Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. 
// Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, 
// Valor do Produto, Qualidade do Produto e Status.
// Criar uma variável com arrays de objetos
// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.

let produtos=[
        {
            nome: 'Samsung Smart Tv 50"',
            valor: 2800,
            qualidade: 9,
            status: true
        },

        {
            nome: 'Smartphone Samsung',
            valor: 1000,
            qualidade: 7,
            status: true
        },

        {
            nome: 'Smartphone Lg',
            valor: 800,
            qualidade: 8,
            status: false
        },

        {
            nome: 'Nescafé Dolce Gusto',
            valor: 490,
            qualidade: 10,
            status: true
        },

];

// Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. 
// Selecione todos os produtos que tenham:
    //Valor entre 482 e 1600;
    // Qualidade superior a 06;
    // Status como disponível.
// Criar uma variável, pegar os produtos, utilizar o filter com uma função callback



let filtro = produtos.filter((produto) => {
    return produto.valor >= 482 &&
           produto.valor <= 1600 && 
           produto.qualidade > 6 &&
           produto.status === true
            
  });

console.log(filtro);
  
  let valorDasCompras = filtro.reduce((acumulador, elemento) => {
    return  acumulador.valor + elemento.valor;

  });

  //O resultado do filtro deve ser armazenado na variável carrinho.

  let resumoCarrinho = filtro.map((item)=>{
  
    return (` ${item.nome} R$ ${item.valor}`);
  
  });
  
  //3.	Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, 
  //e no final um valor total, resultante da somatória de todos os produtos.
console.log(`Resumo da compra: ${resumoCarrinho} | Valor total: R$ ${valorDasCompras }`);




