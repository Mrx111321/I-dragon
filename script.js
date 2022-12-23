document.onkeydown= function(e){
console.log("key code is:" , e.key code)
if(e.key code==38){
dino= document.queryselector('.dino');
dino.classlist.add('animatedino');
settimeot(() = > {
dino.classlist.remove('animatedino')
}700);


}
}