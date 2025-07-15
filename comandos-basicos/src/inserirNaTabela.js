module.exports = async(conexao) => {
    await conexao.schema.insert({
        titulo: "Algum livro",
        autor: "Fulano",
        edicao: 2,
        preco: 29.99
    }).into("livros")
}