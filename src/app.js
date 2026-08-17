function greet(name){
    return `hello my name is, ${name}`;
}
module.exports = greet;

if(require.main === module){
    console.log(greet("world"))
}
