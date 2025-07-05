const knexfile = require("../knexfile")
const knex = require("knex")(knexfile)

const criarTabela = require("../src/criarTabela")

test("deve criar tabela", async ()=>{
    await criarTabela(knex)
    const tabelaExiste = await knex.schema.hasTable("livros")
    expect(tabelaExiste).toBe(true)
})