module.exports = async(conexao) => {
    const dados = await conexao.insert({
        titulo: "Algum livro",
        autor: "Fulano",
        edicao: 2,
        preco: 29.99
    }).into("livros")

    return dados
}