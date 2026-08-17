function greet(name){
    return `hello, ${name}`;
}
module.exports = greet;

if(requestAnimationFrame.main === module){
    console.log(greet("world"))
}
