const knexfile = require("../knexfile")
const teste = require("../src/teste")
const knex = require("knex")(knexfile)

test("deve criar tabela", async () => {
    await teste(knex)
    const tabelaExiste = await knex.schema.hasTable("livros")
    expect(tabelaExiste).toBe(true)
})

afterAll(() =>{
    knex.destroy()
});