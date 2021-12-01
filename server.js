const express = require('express');
var cors = require('cors')
const models = require('./models/index');
var nodemailer = require('nodemailer');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())



var transporter = nodemailer.createTransport({
  host: 'mail.barucvilla.cl',
  port: 465,
  auth: {
    user: 'me@barucvilla.cl',
    pass: 'Scuatsh6969!'
  }
});




const port = process.env.PORT || 5000;




app.get('/', (req, res) => {
  res.send("Hello Worlderferfer");
});

app.post('/api/v1/users/login', (req, res) => {

  console.log(req.body)
  res.send('Data received');
})

app.get('/api/v1/users', async (req, res) => {
  const users = await models.user.findAll();
  res.send(users)
});

app.get('/api/v1/users/:id', async (req, res) => {
  const user = await models.user.findAll({
    where: {
      id: req.params.id
    }
  });
  res.send(user)
});

app.delete('/api/v1/users/delete/:id', async (req, res) => {
  const user = await models.user.destroy({
    where: {
      id: req.params.id
    }
  })
  res.send('200')
});

app.post('/api/v1/users/create', async (req, res) => {
  const user = await models.user.create({
    email: req.body.email,
    password: req.body.password
  });
  sendEmail(req.body.email)
  res.send(user)
})

app.post('/api/v1/users/update', async (req, res) => {
  const user = await models.user.update(req.body, {
    where: { email: req.body.email }
  });
  res.send(user)
})

const sendEmail = (email) => {
  var mailOptions = {
    from: 'app@gmail.com',
    to: email,
    subject: 'Registro App',
    text: 'Felicitaciones te has registrado correctamente'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});