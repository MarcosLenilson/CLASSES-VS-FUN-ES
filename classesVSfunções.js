console.log('---------<<<<< VARIAVEL OBJETO 👇👇👇>>>>>>----------');

//     <<<<< VARIAVEL OBJETO >>>>>

const Livro = {
  nome: "As aventuras de Marcos",
  editora: "Casa do Marcos",
  paginas: 321,
  anunciar: function(){
    console.log(`A ${this.editora} indica o livro ` + this.nome + "!");
  }
}

Livro.anunciar()

console.log(" ----------<<<<< FUNÇÃO CONTRUTORA 👇👇👇 >>>>> ----------");

    <<<<< FUNÇÃO CONTRUTORA >>>>>

const Livro = function(nome, editora, paginas){
  gNome = nome,
  gEditora = editora,
  gPaginas = paginas

  this.getNome = function(){
    return gNome
  }

  this.getEditora = function(){
    return gEditora
  }

  this.getPaginas = function(){
    return gPaginas
  }
}

const GraphQL = new Livro ('GraphQL', 'Casa do Marcos', 321)

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());


console.log("                                                                             ");
console.log("                                                                             ");
console.log("                                                                             ");

console.log(" ----------<<<<< USANDO CLASSES 👇👇👇>>>>> ----------");

//<<<<< USANDO CLASSES 👇👇👇>>>>>

class Livro {
  constructor(nome, editora, paginas) {
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
  }

  // MÉTODOS
  anunciarTitulo() {
    console.log(`Titulo: ${this.nome}`);
  }

  // MÉTODOS
  descreverTitulo() {
    console.log(`${this.nome} é um livro muito bom da editora ${this.editora} e tem ${this.paginas} páginas`);
  }
}

const ver = new Livro('Primeiro vemos e depois ouvimos', 'Casa do Marcos', 124);
ver.anunciarTitulo()
ver.descreverTitulo()


console.log("                                                                             ");
console.log("                                                                             ");
console.log("                                                                             ");


console.log(" ----------<<<<< HERANÇA 👇👇👇>>>>> ----------");

//     <<<<< HERANÇA 👇👇👇>>>>>

class LivroColecao extends Livro {
  constructor(nome, nomeColecao, editora) {
    super(nome)
    this.nomeColecao = nomeColecao
    this.editora = editora
  }

  descreverColecao() {
    console.log(`O livro \"${this.nome}\" faz parte da coleção ${this.nomeColecao} da editora ${this.editora}`);
  }
}

const outro = new LivroColecao('Mais um livro para ouvir', 'Audiobook', 'Casa do Marcos');
outro.descreverColecao()
