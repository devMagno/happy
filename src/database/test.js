const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db => {
  await saveOrphanage(db, {
    lat: '-23.938663322436103',
    lng: '-46.36931061744691',
    name: 'Orfanato Luz Estelar',
    about: 'Presta assistência à crianças de 4 a 17 anos que se encontram em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '13991828585',
    images: [
      "https://images.unsplash.com/photo-1601272792584-e3707a8b3cd7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1601221780544-713899476f52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1601212173774-453efa102624?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1600728611365-b8fc376080a8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1601897186210-844903d75623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1601841448425-c4ab33930440?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    ].toString(),
    instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Das 7h até 21h',
    open_on_weekends: '1'
  })

  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)
})