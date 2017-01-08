const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser'); // стандартный модуль, для парсинга JSON в запросах
const methodOverride  = require('method-override');  // поддержка put и delete
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const oauth2 = require('./oauth2');
const config = require('./config/config.json');
const authRoutes = require('./routes/authentification');
const articleRoutes = require('./routes/article');
const passport = require('passport');

app.use(passport.initialize());
require('./oauth')

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride()); // поддержка put и delete
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.post('/auth/token', oauth2.token);

app.use('/articles', articleRoutes);

app.set('port',  process.env.PORT || config.port);

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

app.use(function(req, res, next){
    res.status(404);
    console.log(`Not found URL: ${req.url}`);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    console.log(`Internal error(${res.statusCode} : ${err.message}`);
    res.send({ error: err.message });
    return;
});

