 function toLocal(time){
  return new Date(time).toLocaleTimeString("en-GB")


  //am pm
}

function toStandard(time){
 let date=new Date(`2000-01-01T${time}`);
 return date
  //am pm
}
export  {toStandard,toLocal }