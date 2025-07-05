const knexfile = require("../knexfile")
const knex = require("knex")(knexfile)


await knex.schema.createTable("livros", (tabela)=>{
    tabela.increments("id").primary();
    tabela.string("titulo");
    tabela.string("autor");
    tabela.smallint("edicao");
    tabela.float("preco");
})  