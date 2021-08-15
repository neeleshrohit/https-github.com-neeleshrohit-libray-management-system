let screen= document.getelementbyid('screen');
buttons=document.querySelectorAll('button')
let screenvalue='';
for(item of buttons){
    item.addeventlistener('click',(e)=>{
        buttontext=e.target.innertext;
        console.log('button text is',buttontext);
        if(buttontext=='x'){
            buttontext='*';
            screen.value += buttontext;
            screen.value = screenvalue; 
        }
        else if (buttontext=='c'){
            screen.value="";
        }
        else if (butttontext=='='){
            screen.value = eval(screenvalue);
        }

    })
}