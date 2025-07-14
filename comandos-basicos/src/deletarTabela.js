module.exports = async(conexao)=>{
    await conexao.shema.dropTable("livros")

}