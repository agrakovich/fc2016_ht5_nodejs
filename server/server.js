const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser'); // стандартный модуль, для парсинга JSON в запросах
const methodOverride  = require('method-override');  // поддержка put и delete
const morgan      = require('morgan');
const mongoose    = require('mongoose');

const config = require('./config/config.json');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');

mongoose.connect(config.database);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride()); // поддержка put и delete
app.use(morgan('dev'));

app.listen(config.port, function(){
    console.log(`Express server listening on port ${config.port}` );
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

app.get('/ErrorHandlingExample', function(req, res, next){
    next(new Error('Random error!'));
});

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

