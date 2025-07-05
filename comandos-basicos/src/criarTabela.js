module.exports = async (conexao) => {
    if(conexao.schema.hasTable("livros")){
        return
    }
    await conexao.schema.createTable("livros", (tabela)=>{
        tabela.increments("id").primary();
        tabela.string("titulo");
        tabela.string("autor");
        tabela.smallint("edicao");
        tabela.float("preco");
    })
}