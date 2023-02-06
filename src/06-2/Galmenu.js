constGalmenu=({title,selTitle,setSelTitle})=>{

     consthandleSelect=(item)=>{
     console.log(item);
     setSelTitle(item);
     }
     consttitleTag=title.map((item)=>
     <divclassName={item===selTitle?"titleTagSel":"titleTag"}onClick={()=>handleSelect(item)}>{item}</div>
     )
     
     return(
     <divclassName="galmenu">
     {titleTag}
     </div>
     );
     }
     
     export default Galmenu;