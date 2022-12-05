# Utilizando Props no React

Prop é um valor que passamos para um componente, aonde conseguimos reutilizar um mesmo componente em outro arquivo e somente mudar seus valores pelos atributos.<br>
Realizei um projeto aonde fiz um card e somente mudei seus valores de atributos ao chama-lo em outro componente.

## Lógica

No componente nos parâmetros() colocamos chaves e o valor que iremos reutilizar, funciona como uma variável aonde depois podemos atribuir um valor a ela na propiá tag do componente em outro arquivo JSX, nos parâmetros podemos tanto chamar o somente (props) ou já chamar com o nome da variável encapsulado entre chaves -> <strong> ({nome, idade, salario}) </strong>.<br>

- Sintax Prop: const Pessoa = ({nome, idade, salario }) => {
	return(
		<div>
			<p>Nome: {nome} idade: {idade} salario: {salario}</p>
		</div>
	);
}

- Chamando o prop em outro componente pela tag: < Pessoa nome="Gabriel" idade="22" salario="9999"/>
