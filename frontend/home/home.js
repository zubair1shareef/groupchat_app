const addMsgBtn=document.getElementById('addmsgbtn')
const messageInput=document.getElementById('messageinput')
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