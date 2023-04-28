const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://fazal:fazal@cluster0.uhgzgkg.mongodb.net/mytestingwebsite?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});
