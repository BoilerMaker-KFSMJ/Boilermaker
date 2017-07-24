const app = require('express')();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

app.use(volleyball);

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
})


app.listen(3000, () => {
  console.log('Your server IT'S ALIVE. On port 3000');
})
