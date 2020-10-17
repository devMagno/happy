const Database = require('./db.js')

Database.then(async db => {
  await db.run(`
    INSERT INTO orphanages (
      lat,
      lng,
      name,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends
    ) VALUES (
      "-23.938663322436103",
      "-46.36931061744691",
      "Lar das Meninas",
      "Presta assistência à crianças de 4 a 17 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
      "https://images.unsplash.com/photo-1601950293362-651f3b3cc35f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      "Das 6h até 18h",
      "0"
    );
  `)


})