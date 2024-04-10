const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/MinigCompany', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

module.exports = connection;