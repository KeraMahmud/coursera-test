(function(){
	var hello = {};

var speakWord = "Hello";
hello.speak = function(name){
  console.log(speakWord + " " + name);
}
window.hello = hello;
})(window);

