const Database = require('./database/db.js')
const saveOrphanage = require('./database/saveOrphanage.js')

module.exports = {

  index(req, res){
    return res.render('index')
  },

  async orphanages(req, res){
    try {
      const db = await Database
      const orphanages = await db.all("SELECT * FROM orphanages")
      return res.render('orphanages', { orphanages })
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!')
    }
  },

  orphanage(req, res){
    return res.render('orphanage')
  },

  createOrphanage(req, res){
    return res.render('create-orphanage')
  }

}