const Myform=()=>{
     const formCheck =()=>{
          console.log
     }
     return(
          <>   
     <form name="myform">
          <p>
               <labal for="txt1">아이디 : </labal><br />
               <input type="text" name="txt1" id="txt1" placeholder="아이디 입력" />
          </p>
          <p>
               <labal for="txt2">비밀번호 : </labal><br />
               <input type="password" name="txt2" id="txt2" placeholder="비밀번호 입력" />
          </p>
          <p>
               <labal for="txt3">선택과목 : </labal><br />
               <select name="sel1">
                    <option value="java">java</option>
                    <option value="js" selected>js</option>
                    <option value="uiux">uiux</option>
                    <option value="html">html</option>
               </select>
          </p>
          <p>
               <input class="button" type="button" value="확인" onClick="{formCheck}" />
               <input class="button" type="reset" value="취소" />
          </p>
     </form>

     <div id="msg">

     </div>
     </>
         
     ); 
     
}
export default Myform;