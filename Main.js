const {readFile, writeFile, read} = require('fs');
readFile('./Content/First.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
    }else{
        const first = result;
        readFile('./Content/Second.txt', 'utf8', (err, result) => {
            if(err){
                console.log(err);
            }
            else{
                const second = result;
                writeFile('./Content/result-async.txt', `${first} ${second}`, (err, result) => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log('write successfull');
                    }
                })
            }
        })
    }
})