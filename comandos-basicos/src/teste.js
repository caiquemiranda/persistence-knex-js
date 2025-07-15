module.exports = async (conexao) =>{
    await conexao.schema.createTable("livros", (tabela)=>{
        tabela.increments("id").primary();
        tabela.string("titulo");
        tabela.string("autor");
        tabela.smallint("edicao");
        tabela.float("preco");
    })
}