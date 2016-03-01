var express = require('express');

app = express();
app.use(express.static(__dirname));

app.listen(3001, function () {
  console.log('Your hearts calculator is listening on port 3001!');
});