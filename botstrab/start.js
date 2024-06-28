var inpsigup1=document.querySelector('#finp1');
var inpsigup2=document.querySelector('#finp2');
var inpsigup3=document.querySelector('#finp3');
var bt2=document.querySelector('.cololn');
var l1=document.querySelector('.link1');
var all_alls=[];
var xxx;

bt2.addEventListener('click',changeing);
if (localStorage.getItem("login")!=null) {
    all_alls =JSON.parse(localStorage.getItem("login")) ;   
}
function changeing(){

for (let i = 0; i < all_alls.length; i++) {
    if (inpsigin1.value==all_alls[i].emils&&inpsigin2.value==all_alls[i].passwords) {
        open('./stopp.html','_self');

        
        

    }
    else if(inpsigin1.value=="" && inpsigin2.value=="" ){
        var borr=document.querySelector('.testted');
        var collol =document.querySelector('.testt');
        collol.classList.remove("d-none");
        borr.classList.add("d-none");
    }
   else if (inpsigin1.value!=all_alls[i].emils&&inpsigin2.value!=all_alls[i].passwords) {
        var borr=document.querySelector('.testted');
        var collol =document.querySelector('.testt');
        borr.classList.remove("d-none");
        collol.classList.add("d-none");
    } 
    
}
};

l1.addEventListener('click',function(){
    open('./feist.html','_self');
})


