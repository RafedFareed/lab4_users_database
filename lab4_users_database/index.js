const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000

const UserRouter = require('./routes/UserRoute.js');

mongoose.connect('mongodb+srv://root:root@cluster0.qry26ic.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(UserRouter);

app.listen(PORT, () => { console.log('Server is running...') });