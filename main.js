const date = require('./date');

function hello() {
    const currentDate = date.currentDate('dd MMMM yyyy - dddd'); 
    console.log('Hello world. Today is ' + currentDate + '.');
}

hello();
