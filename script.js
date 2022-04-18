function addBoxes()
{
    document.getElementsByClassName('container')[0].classList.add('blur');
    document.getElementsByClassName('m-box')[0].classList.remove('hidden');
}



function closee()
{
    
    document.getElementsByClassName('container')[0].classList.remove('blur');
    document.getElementsByClassName('m-box')[0].classList.add('hidden');
}


let boxes=[];
function addd()
{
    var text=document.getElementById('name').value;
    console.log(text);
    if(text!=='')
    {
    let obj={
        id:Date.now(),
        text:text
    }
    console.log(obj);
    boxes.push(obj);
    createCard();
    }
    else{
        window.alert('Please enter a valid input..');
    }

}


var flexContainer=document.getElementsByClassName('flex-container')[0];

function isEmptyOrNot() {
    if (flexContainer.innerHTML == "") {
        console.log('hi');
      document.getElementById("no-item-div").classList.remove("hidden");
    } else {
        console.log('hello');
      document.getElementById("no-item-div").classList.add("hidden");
    }
  }

function createCard()
{
    console.log(boxes.length);
    let box=document.getElementsByClassName('flex-container')[0];
    let div=document.createElement('div');
    div.setAttribute('class','dynamic-cards');
    for(let i=0;i<boxes.length;i++)
    {
       
        div.setAttribute('id',boxes[i].id);
        div.innerHTML=`<p  class="dt-1">${boxes[i].text}</p><hr>
        <div class="tasks"></div><hr><button class="del-btn1" onclick='deletee(this)'><i class="fas fa-trash-alt"></i></button><button class="add-btn1" onclick='editt(this)'><i class="fas fa-plus-circle"></i></button>`
        box.appendChild(div);
    }
   
    isEmptyOrNot();
   
}


function deletee(val)
{
    let rem=val.parentNode;
    const value=val.parentNode.id;
    for(let i=0;i<boxes.length;i++)
    {
        if(boxes[i].id===Number(value))
        {
            boxes.splice(i,1);
            break;
        }
    }
    console.log(boxes);
    rem.remove();
    if(boxes.length==0)
    {
        isEmptyOrNot();
    }
}


let container = document.querySelector(".container");

  


function editt(value)
{

    flag=value.parentNode.id;
    container.classList.add("blur");
   
  
    let itemModal = document.createElement("div");
    itemModal.className = "add-item-modal";
    itemModal.innerHTML = `
    <h2>Add New Item</h2>
    <input type="text" id="item" placeholder="add new item" />
    <div class="btn">
      <button class="item-add-btn" >add</button>
      <button class="item-close-btn">close</button>
    </div>`;
  
    let body = document.body;
    body.appendChild(itemModal);


    let itemAddBtn = document.querySelector(".item-add-btn");
    let itemClosebtn = document.querySelector(".item-close-btn");
    let inputItem = document.getElementById("item");







itemClosebtn.addEventListener("click", () => {
    itemModal.classList.add("popout");

    setTimeout(() => {
      itemModal.classList.remove("popout");
      container.classList.remove("blur");
      
      itemModal.remove();
    }, 300);
  });





  itemAddBtn.addEventListener("click", () => {
    itemModal.classList.add("popout");

    let intext = document.querySelector("#item").value;
     if(intext !== "")
     {
        let subtasks= document.querySelector(".flex-container").children;
        console.log(subtasks);
        let innerdiv= document.createElement('div');
        innerdiv.setAttribute('class','innerdiv');
        for(let i=0;i<boxes.length;i++){
            let abc=subtasks[i];
            console.log(abc);
            let bcd=abc.children[2];
            console.log(bcd);
            if(boxes[i].id===Number(flag)){
                innerdiv.innerHTML=`<span class="intext">${intext}</span><button class="mark" onclick='markDone(this)'>Mark Done</button>`;
                
                bcd.appendChild(innerdiv);
            }
        }
     }
   

    
     else
     {
        window.alert("Please Enter a valid input....");
     }

     setTimeout(() => {
        itemModal.classList.
        
  remove("popout");
  container.classList.remove("blur");
  
  itemModal.remove();
}, 300);
  });



}




function markDone(params) {
    let val = params.parentNode.children;
    
    console.log(params.parentNode);
    console.log(params.children);

    let text = val[0];
    let butt = val[1];
    console.log(val[0]);
    console.log(val[1]);
    console.log(butt);
    let id = params.parentNode.parentNode.parentNode.id;
    for(let i=0; i<boxes.length;i++)
    {
        if(boxes[i].id === Number(id))
        {
            butt.style.display="none";
            text.style.color = "orangered";
            text.style.textDecoration = "line-through";
            text.style.textDecorationColor="orangered";
            break;
        }
    }
}






    






