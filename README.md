# Reutilização Dinâmica de Componentes no React

Aproveite a flexibilidade do React para reutilizar componentes dinamicamente com Props! Este projeto demonstra a aplicação de Props em um componente de lista de signos, permitindo a personalização dos valores em diferentes instâncias.

## Utilizando Props:

1. **Defina o Componente com Props:**
   ```jsx
   // Exemplo de Sintaxe
   const ItemLista = ({ signo, dataInicio, dataFim, imagem }) => {
     return (
       <div className="item-lista">
         <img src={imagem} alt={signo} />
         <p>{signo}</p>
         <p>{dataInicio} - {dataFim}</p>
       </div>
     );
   };
   ```

2. **Chame o Componente com Valores Diferentes:**
   ```jsx
   // Exemplo de Chamada
   <ItemLista
     signo="Aquário" dataInicio="21/01"
     dataFim="19/02" imagem="assets/aquario.jpg"/>
   ```
   Personalize o componente em qualquer parte da aplicação ajustando os valores das Props!

## Lógica de Funcionamento:

- O componente `ItemLista` recebe valores dinâmicos (Props) para exibir informações específicas.
- A Sintaxe de Props oferece uma maneira eficaz de personalizar componentes e promover a reutilização.

## Estrutura do Projeto:
- `ItemLista.js`: Componente reutilizável de item de lista com valores dinâmicos por meio de Props.
- `ListaDeSignos.js`: Exemplo de utilização do componente `ItemLista` para criar uma lista de signos.

**Nota:**
A abordagem de Props no React possibilita a criação de componentes versáteis e reutilizáveis. Experimente e ajuste conforme necessário para atender às necessidades específicas do seu projeto.
