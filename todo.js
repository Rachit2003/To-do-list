function addmore(){
    document.getElementById('error').innerHTML="";

    let todo=document.getElementById('todo').value;
  if(todo==''){
    document.getElementById('error').innerHTML="Please enter a value!!!";
  }else{
    let box=document.getElementById('box');
    let li=document.createElement('li');
    li.textContent=todo;

    let a=document.createElement('button');
    a.textContent="Remove";
    a.href="javascript:void(0)";
    a.className="remove";
    li.appendChild(a);
  
    box.appendChild(li);
  }
  document.getElementById('todo').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);


});