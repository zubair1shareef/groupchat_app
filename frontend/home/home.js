const addMsgBtn=document.getElementById('addmsgbtn')
const messageInput=document.getElementById('messageinput')
var count=0
document.addEventListener('DOMContentLoaded',async()=>{
    getMessages()
})

function callingGetMessagesApi(){
   setInterval(()=>{
        getMessages()
        console.log('dshdf')
    
    }
       
     , 1000)
}
callingGetMessagesApi()

function getMessages(){
    axios.get('http://localhost:3000/getMessage').then(data=>{
        console.log(data.data)
        const dataa=data.data
        let messages_cont_ul=document.getElementById("messages_cont_ul")
        
        
        for(i=count;i<dataa.length;i++){
            if(i%2==0){
                messages_cont_ul.innerHTML=messages_cont_ul.innerHTML+ ` <li class="even">${dataa[i].username} : ${dataa[i]. msg} </li>`
        
        
            }
            else{
        
            messages_cont_ul.innerHTML=messages_cont_ul.innerHTML+ ` <li >${dataa[i].username} : ${dataa[i]. msg} </li>`
            }
        
        }
        count=dataa.length;
    })

}



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