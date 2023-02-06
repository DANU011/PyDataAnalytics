importGalmenufrom"./Galmenu";
importGalcontentfrom"./Galcontent";
import{useState,useEffect}from"react";

constGalmain=({title,data1})=>{
let[selTitle,setSelTitle]=useState();
let[selContent,setSelContent]=useState([]);

useEffect(()=>{
if(selTitle){
setSelContent(data1.filter((i)=>i["galTitle"]===selTitle)[0])
}
},[selTitle]);

return(
<divclassName="galmain">
<Galmenutitle={title}selTitle={selTitle}setSelTitle={setSelTitle}/>
<GalcontentselContent={selContent}/>
</div>
);
}

export default Galmain;