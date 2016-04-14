var name = prompt('What is your name?');
var currentdate = new Date();
var datetime =  currentdate.getDate() + '/'
                + (currentdate.getMonth()+1)  + '/'
                + currentdate.getFullYear()  + ' @ '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
                + currentdate.getSeconds();

console.log('Hello, ' + name );
console.log('The Date and Time is,' + datetime);
