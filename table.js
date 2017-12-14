window.onload=function () {
  let table =document.querySelector('tbody');
  let btn = document.querySelector('.btn');
  // console.log(btn);
    table.ondblclick=function (e) {
      let element = e.target;
      if(element.nodeName=='TD'&&element.nodeName!='BUTTON'){
        let old = element.innerText;
        element.innerText='';

        let inputs = document.createElement('input');
        inputs.value=old;
        element.appendChild(inputs);
        inputs.onblur=function () {
            let newv = inputs.value;
            element.innerText=newv;
            element.removeChild(inputs);
        }
      }
      else if(element.nodeName=='BUTTON'){
          let trs = element.parentNode.parentNode;
          table.removeChild(trs);
      }
  };
  btn.onclick=function () {
/*      let newTr = document.createElement('tr');
      newTr.innerHTML=`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="del"><button>删除</button></td>
  `;
      table.appendChild(newTr);
      table.insertBefore(newTr,table.children[1]);*/
      table.innerHTML+=`
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="del"><button>删除</button></td>
      </tr>
      `;

  }
};