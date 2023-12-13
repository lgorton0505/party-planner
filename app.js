let party = [];
const spanCount = document.querySelector('#spanCount');
const partyList = document.querySelector('ul');


function render(){
   spanCount.innerHTML = party.length;
   const html = party.map(function(partys){
    console.log(partys);
    partys.date = new Date();
    return `
       <li>
       <h5>${ partys.name }</h5>
       <h5>${ partys.location }</h5>
       <h5>${ partys.date }</h5>
       <h5>${ partys.description }</h5>
       </li>
    `;
   }).join('');
   partyList.innerHTML = html;


}

render();

async function fetchPartyList(){
    try{
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events');
        const json = await response.json();
        party = json.data;
        render();
    }
    catch(ex){
        console.log(ex);
    }
}

fetchPartyList();