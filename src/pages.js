module.exports = {

  index(req, res){
    return res.render('index')
  },

  orphanages(req, res){
    return res.render('orphanages')
  },

  orphanage(req, res){
    return res.render('orphanage')
  },

  createOrphanage(req, res){
    return res.render('create-orphanage')
  }

}