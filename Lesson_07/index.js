var fs = require('fs');

fs.writeFile('text.txt', 'Hello world again!', function (err) {
    if (err) throw new Error(err);

    fs.rename('text.txt', 'text2.txt', function (err) {
        if (err) throw new Error(err);

        fs.readFile('text2.txt', {encoding: 'utf-8'}, function (err, data) {
            if (err) throw new Error(err);

            console.log(data);
        })
    })
})