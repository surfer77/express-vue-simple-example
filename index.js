// npm install express

var express = require('express')
var expressVue = require('express-vue/dist')
var app = express();

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', __dirname + '/views');
app.set('vue', {
    layoutsDir: 'views/',
    componentsDir: 'views/components/',
    defaultLayout: 'layout'
});

var users = [];
users.push({ name: 'tobi', age: 12 });
users.push({ name: 'loki', age: 14  });
users.push({ name: 'jane', age: 16  });

app.get('/', function(req, res){
  res.render('index', {
    data: {
        title: 'Express Vue',
        users: users
    },
    vue: {
        components: ['users']
    }
  });
});

app.get('/users/:userName', function(req, res){
    var user = users.filter(function(item) {
        return item.name === req.params.userName;
    })[0];
  res.render('user', {
    data: {
      title: 'Hello My Name is',
      user: user
    }

  });
});

app.listen(3000);
console.log('Express server listening on port 3000');
