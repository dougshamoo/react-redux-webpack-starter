const app = require('./server/server');
require('./server/routes');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Example app listening on port %s', port); // eslint-disable-line
});
