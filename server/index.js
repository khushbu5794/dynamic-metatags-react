const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');
app.get('/', function (request, response) {
    console.log('Home page visited!');
    // read in the index.html file
    fs.readFile(indexPath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, 'Home Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
        result = data.replace(/\$OG_IMAGE/g, 'https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png');
        return response.send(result);
    });
});

app.get('/about', function (request, response) {
    console.log('About page visited!');
    fs.readFile(indexPath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'About Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
        result = data.replace(/\$OG_IMAGE/g, 'https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png');
        return response.send(result);
    });
});

app.get('/shopping/:id', function(request, response) {
  console.log('Shopping page visited!');
  fs.readFile(indexPath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Shopping Page'+request.params.id);
    data = data.replace(/\$OG_DESCRIPTION/g, "Shopping page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png');
    return response.send(result);
  });
});



app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'build','index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));