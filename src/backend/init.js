const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Подключение к MongoDB успешно'))
.catch(err => console.error('Ошибка подключения к MongoDB:', err));