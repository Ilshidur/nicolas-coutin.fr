const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const path = require('path');

const config = require('./config');

if (module.parent) {
  throw new Error('app.js must not be called by require().');
}

const app = express();

app.set('port', config.port);

app.use(helmet());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

app.use('/api', require('./controllers/api'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(config.rootPath, 'client/build')));
}

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + config.port);
});
