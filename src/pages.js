const orphanages = require('./database/fake-data.js')

module.exports = {

  index(req, res){
    return res.render('index')
  },

  orphanages(req, res){
    return res.render('orphanages', { orphanages })
  },

  orphanage(req, res){
    return res.render('orphanage')
  },

  createOrphanage(req, res){
    return res.render('create-orphanage')
  }

}