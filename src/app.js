function greet(name){
    return `hello my name is, ${name}`;
}
module.exports = greet;

if(requestAnimationFrame.main === module){
    console.log(greet("world"))
}
