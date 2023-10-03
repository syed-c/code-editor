function run(){
  let htmlCode = document.querySelector('#html').value
  let cssCode = document.querySelector('#css').value
  let jsCode = document.querySelector('#js').value
  let output = document.querySelector('#output')
  
  output.contentDocument.body.innerHTML = htmlCode +'<style>'+cssCode+'</style>';
  output.contentWindow.eval(jsCode);
}