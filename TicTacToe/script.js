let X=[];
let O=[];

let canclick = [true,true,true,true,true,true,true,true,true];


const score = {
    winx:0,
    wino:0
    
};
displayresult();
 let player='X';

     function displayoyput(position){

      document.querySelector(`.b${position}`).innerHTML=`${player}`;
      if(player==='X'){
        X.push(position);
        player='O';
      }
      else{
        O.push(position);
        player='X'
      }
  
      canclick[position-1]=false;
  
        if(winX()){
           document.querySelector('.result').innerHTML='X WIN';
           score.wins++;
           displayresult();
           canclick = [false,false,false,false,false,false,false,false,false];
        }
        else if(winO()){
           document.querySelector('.result').innerHTML='O WIN';
       score.losses++;
      displayresult();
      canclick = [false,false,false,false,false,false,false,false,false];
        }
  
        else if(tie()){
           document.querySelector('.result').innerHTML='TIE';
           displayresult();
        }
     
      console.log(X);
      console.log(O);
      }
  





     document.querySelectorAll('#gamebutton').forEach((button , index)=>{
                 button.addEventListener('click' , ()=>{
                  if(canclick[index]){
                    displayoyput(index+1);
                  }
                 })
     });

 
//    

 function winX(){
   let resultX=[false,false,false,false,false,false,false,false,false];
        const a = [1,4,7];
        const b = [2,5,8];
        const c = [3,6,9];

        const d = [1,2,3];
        const e = [4,5,6];
        const f = [7,8,9];

        const g = [1,5,9];
        const h = [3,5,7];
      
        resultX[0] = a.every(val=>X.includes(val)) ;
        resultX[1] = b.every(val=>X.includes(val)) ;
        resultX[2] = c.every(val=>X.includes(val)) ;
        resultX[3] = d.every(val=>X.includes(val)) ;
        resultX[4] = e.every(val=>X.includes(val)) ;
        resultX[5] = f.every(val=>X.includes(val)) ;
        resultX[6] = g.every(val=>X.includes(val));
        resultX[7] = h.every(val=>X.includes(val)) ;

    if(resultX[0]===true || resultX[1]===true ||resultX[2]===true ||resultX[3]===true ||resultX[4]===true ||resultX[5]===true ||resultX[6]===true ||resultX[7]===true ){
      score.winx++;
    return true;
 }
 else{
   return false;
 }
}

 

function winO(){
   let resultO=[false,false,false,false,false,false,false,false,false];
   const a = [1,4,7];
   const b = [2,5,8];
   const c = [3,6,9];

   const d = [1,2,3];
   const e = [4,5,6];
   const f = [7,8,9];

   const g = [1,5,9];
   const h = [3,5,7];
      
        resultO[0] = a.every(val=>O.includes(val)) ;
        resultO[1] = b.every(val=>O.includes(val)) ;
        resultO[2] = c.every(val=>O.includes(val)) ;
        resultO[3] = d.every(val=>O.includes(val)) ;
        resultO[4] = e.every(val=>O.includes(val)) ;
        resultO[5] = f.every(val=>O.includes(val)) ;
        resultO[6] = g.every(val=>O.includes(val));
        resultO[7] = h.every(val=>O.includes(val)) ;

    if(resultO[0]===true || resultO[1]===true ||resultO[2]===true ||resultO[3]===true ||resultO[4]===true ||resultO[5]===true ||resultO[6]===true ||resultO[7]===true ){
      score.wino++;
    return true;
 }
 else{
   return false;
 }
}

function tie(){
   if( canclick[0]===false && canclick[1]===false && canclick[2]===false &&canclick[3]===false &&canclick[4]===false &&canclick[5]===false &&canclick[6]===false &&canclick[7]===false && canclick[8]===false ){
       return true;
   }
   else{
      false;
   }
}


 
document.querySelector('.restart').addEventListener('click' , ()=>{
    document.querySelector('.b1').innerHTML='';
    document.querySelector('.b2').innerHTML='';
    document.querySelector('.b3').innerHTML='';
    document.querySelector('.b4').innerHTML='';
    document.querySelector('.b5').innerHTML='';
    document.querySelector('.b6').innerHTML='';
    document.querySelector('.b7').innerHTML='';
    document.querySelector('.b8').innerHTML='';
    document.querySelector('.b9').innerHTML='';
    canclick = [true,true,true,true,true,true,true,true,true];
     X=[];
     O=[];
     player='X';
     document.querySelector('.result').innerHTML='';
      resultX=[false,false,false,false,false,false,false,false,false];
      resultO=[false,false,false,false,false,false,false,false,false];
      

})

document.querySelector('.reset').addEventListener('click' , ()=>{
   
   score.wino=0;
   score.winx=0;
   displayresult();
})


function displayresult(){
    document.querySelector('.score').innerHTML=`X:${score.winx} O:${score.wino}`;

}




