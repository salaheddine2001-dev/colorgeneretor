



function gt(){
  var color="#"
  var colortxt=document.getElementById("colortxt")
  caract="0123456789abcdef"
  for(var i=0;i<6;i++)
  {
    color=color+caract[Math.floor(Math.random()*16)]
  }
  document.body.style.background=color
  colortxt.innerText=color
}


function cp()
{
  var colortxt=document.getElementById("colortxt")
  var range=document.createRange()
  range.selectNode(colortxt)
  var selection=window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
  try{
    document.execCommand("copy")
    selection.removeAllRanges()
    var original=colortxt.textContent
    colortxt.textContent="copied!"
    colortxt.classList.add("copied")
    setTimeout(()=>{
      colortxt.textContent=original
      colortxt.classList.remove("copied")
    },1000)
    
  }
  catch(e)
  {
    console.log(e);
  }
}
