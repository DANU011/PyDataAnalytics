const Frccn = ({ cn }) => {
     console.log("cn", cn);
     let infoArray =cn.split(',');
     infoArray = infoArray.map((v) =>
          <li>
               <span>{v.split(':')[0]}</span>(
               {v.includes('높음') ?
               <span className='lired'>{v.split(':')[1]}</span> :
               <span >{v.split(':')[1]}</span> //삼항연산
               })
          </li>
     );
     
     return (
          <div className="mainbox2">
               <div className="detail">
                    <ul className="list">
                         {infoArray}
                    </ul>
               </div>
          </div>
     );
}
export default Frccn;