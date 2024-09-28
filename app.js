// const path = require('path');

const express = require('express');
// const bodyParser = require('body-parser');
const session = require('express-session')

const mongoose = require('mongoose')
// const mongoConnect = require('./util/database')
const MongoDbStore = require('connect-mongo')

const store = MongoDbStore.create({ collectionName: 'sessions', mongoUrl: 'mongodb+srv://goldcoinjatin:t6ADztqvDdhUoT8T@kaizokujg.t38uv.mongodb.net/?retryWrites=true&w=majority&appName=kaizokujg' })

// const errorController = require('./controllers/error');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/auth');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ store: store, secret: 'helo' }))
// app.use((req, res, next) => {
//   User.findById(1)
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(loginRoutes)


// app.use(errorController.get404);


mongoose.connect('mongodb+srv://goldcoinjatin12:jtQQfVAk1fpJFUpT@cluster0.nel1l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then((client) => {
    console.log('connected')
    // console.log(client)
    app.listen(3000, () => {
      console.log('connected to 3000')
    })
  })
  .catch(err => {
    console.log(err)
  })

