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

app.post('/api/v1/users/login', async (req, res) => {

  const user = await models.user.findAll({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then((response) => {
    if (response?.[0]?.dataValues?.email === undefined) {
      res.json({
        "message": 'Email o contraseña no se coinciden o el usuario no se encuentra registrado'
      });
    } else {
      res.json({
        "message": response?.[0]?.dataValues?.email
      });
    }

  }).catch((err) => {
    console.log(err)
    res.json({
      "message": err?.errors?.[0]?.message
    });
  });
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

app.post('/api/v1/users/create', (req, res) => {
  const user = models.user.create({
    email: req.body.email,
    password: req.body.password
  }).then((response) => {
    sendEmail(req.body.email)
    res.json({
      "message": "Usuario creado correctamente"
    });
  }).catch((err) => {
    res.json({
      "message": err?.errors?.[0]?.message
    });
  });
})

app.post('/api/v1/users/changepass', async (req, res) => {
  const user = await models.user.findAll({
    where: {
      email: req.body.email,
    }
  }).then((response) => {
    if (response?.[0]?.dataValues?.email === undefined) {
      res.json({
        "message": 'Email no se encuentra registrado, favor registrarse'
      });
    } else {
      res.json({
        "message": response?.[0]?.dataValues?.email
      });
    }

  }).catch((err) => {
    console.log(err)
    res.json({
      "message": err?.errors?.[0]?.message
    });
  });
})
app.post('/api/v1/users/confirmpass', async (req, res) => {
  console.log(req.body)
  const user = await models.user.update(req.body, {
    where: { email: req.body.email }
  }).then((response) => {
    res.json({
      "message": "Contraseña actualizada correctamente"
    });
  }).catch((err) => {
    console.log(err)
    res.json({
      "message": err?.errors?.[0]?.message
    });
  });
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