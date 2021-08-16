
let myblock = document.querySelectorAll('.item');
 
myblock.forEach(block => block.addEventListener('click', removeBlock));
 
function removeBlock() {
  let block = this;
  block.style.opacity = 1;
  let blockId = setInterval(function() {
    if (block.style.opacity > 0) block.style.opacity -= .1;
    else{
      clearInterval(blockId);
      block.remove();
    }
  },60)
}
    

