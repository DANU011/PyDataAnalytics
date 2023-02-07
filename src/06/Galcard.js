const Galcard = (probs) => {
   
     return (
          <div className="gcd">
               <div className="images"><img src={probs.selcard["galWebImageUrl"] } className="img"/>
               </div>
               <div className="gcdtext">
               <div>{probs.selcard["galTitle"]}</div>
               <div>{probs.selcard["galPhotographyLocation"]}</div>
               <div>{probs.selcard["galPhotographer"]}</div>
               <div>{probs.selcard["galSearchKeyword"]}</div>
               </div>
          </div>
     );
};
export default Galcard;
