const addMsgBtn=document.getElementById('addmsgbtn')
const messageInput=document.getElementById('messageinput')



document.addEventListener('DOMContentLoaded',async()=>{
    axios.get('http://localhost:3000/getMessage').then(data=>{
        console.log(data.data)
        const dataa=data.data
        let messages_cont_ul=document.getElementById("messages_cont_ul")

        for(i=0;i<dataa.length;i++){
            if(i%2==0){
                messages_cont_ul.innerHTML=messages_cont_ul.innerHTML+ ` <li class="even">${dataa[i].username} : ${dataa[i]. msg} </li>`
        
        
            }
            else{
        
            messages_cont_ul.innerHTML=messages_cont_ul.innerHTML+ ` <li >${dataa[i].username} : ${dataa[i]. msg} </li>`
            }
        
        }
    })
})

addMsgBtn.addEventListener('click', ()=>{
    const token= localStorage.getItem('token')
    let msg=messageInput.value
    console.log(messageInput.value)
    messageInput.value=""
    axios.post('http://localhost:3000/addMessage',{
       msg:msg
    },{
        headers:{"Authorization":token}
    }).then(ress=>{
        console.log(ress)
    })
})