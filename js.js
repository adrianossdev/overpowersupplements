/* Formulário de contato*/
class novoContato{
	constructor(nome, assunto, estado, descricao){
		this.nome = nome
		this.assunto = assunto
		this.estado = estado
		this.descricao = descricao
	}
}

/*Gravando os objetos no LocalStorage*/
class Bd{
	constructor(){
		let id = localStorage.getItem('id')

		if(id === null){
			localStorage.setItem('id', 0 )
		}
	}
	getProximoID(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) +1
	}
	gravar(d){
	
		let id = this.getProximoID()
		localStorage.setItem(id, JSON.stringify(d))
		localStorage.setItem('id', id)
	}
}

let bd = new Bd()

function enviarContato(){
		
		let nome = document.getElementById('nome')
		let assunto = document.getElementById('assunto')
		let estado = document.getElementById('estado')
		let descricao = document.getElementById('descricao')

		let contato = new novoContato(nome.value, assunto.value, estado.value, descricao.value)
		console.log(contato)
		bd.gravar(contato)
		nome.value=''
		assunto.value=''
		estado.value=''
		descricao.value=''

	}
		

/* Cadastro de produtos novos */
class produto{
	constructor(nome, tipo, marca, preco, descricao){
		this.nome = nome
		this.tipo = tipo
		this.marca = marca
		this.preco = preco
		this.descricao = descricao
	}
}

function cadastrarProdutoNovo(){

		let nome = document.getElementById('prod_nome')
		let tipo = document.getElementById('prod_tipo')
		let marca = document.getElementById('prod_marca')
		let preco = document.getElementById('prod_preco')
		let descricao = document.getElementById('prod_descricao')

		let produto = new novoContato(nome.value, tipo.value, marca.value, preco.value, descricao.value)
		console.log(produto)

		if(nome.value == ''  || tipo.value == '' || marca.value =='' || preco.value == '' || descricao.value == ''){
			alert('Campo em branco, por favor preencha todos os campos')
			
		}else{
		bd.gravar(produto)
		nome.value=''
		tipo.value=''
		marca.value=''
		preco.value=''
		descricao.value=''
		alert('Produto cadastrado com sucesso!')
		}
}

/* Exibindo produtos cadastrados*/

function exibirProdutosCadastrados(){

	

}