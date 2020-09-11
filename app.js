    let addDel = document.querySelector('.keys');
    let checkTrash = document.querySelector('.btns')
    
    addDel.addEventListener('click', e=>{
        let key = e.target;
        let action = key.dataset.action;
        let myTask = document.createElement('li');
        let checkBox = document.createElement('input');
        let spanText = document.createElement('span');
        let textValue = document.getElementById('input').value;
        let txtInput = document.createTextNode(textValue);
        let delIcon = document.createElement('img');
      
        if(action === 'add'){
            noValue();
            console.log('working add key!')
            delIcon.setAttribute('src', 'criss-cross.png');
            delIcon.setAttribute('data-action', 'delete');
            delIcon.classList.add('trash')
            checkBox.type = 'checkbox';
            myTask.appendChild(checkBox);
            myTask.appendChild(spanText);
            spanText.appendChild(txtInput);
            spanText.appendChild(delIcon);
            document.querySelector('.btns').appendChild(myTask);
            myTask.classList.add('list-group-item');
            checkBox.classList.add('check_box');
  
        }

        if(action === 'delete-all'){
            console.log('working delete all key!');
            let wipeOut = document.querySelector('.btns');
            wipeOut.innerHTML = '';   
            document.getElementById('input').value = '';
          
        }

        
    checkTrash.addEventListener('click', e=>{
      
        if (checkBox.checked){
            checkBox.nextSibling.classList.add('strike');
        }else {
           checkBox.nextSibling.classList.remove('strike');
         }
     })
    
    delIcon.addEventListener('click', e =>{
        console.log('working del-btn');
      
        myTask.remove();
        
      });
    
    

    })

    function noValue(){
        if(document.getElementById("input").value === '')
        {
            alert("Please enter a valid character!")
            addDel.removeEventListener();
          
        }
    }

    let qoutes = ['The Way Get Started Is To Quit Talking And Begin Doing', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty', 'Don’t Let Yesterday Take Up Too Much Of Today.', 'Be yourself; everyone else is already taken.','You only live once, but if you do it right, once is enough.'];
    setInterval(function (){
       
        document.getElementById('quotes').innerHTML = qoutes[Math.floor(Math.random()* qoutes.length)];
  
    },2000);

    let displayDate = document.getElementById('date');
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();
    displayDate.innerHTML = daysInAWeek[today.getDay()] + ', ' + monthNames[today.getMonth()] +
    ' ' + today.getDate() + ', ' + today.getFullYear();   