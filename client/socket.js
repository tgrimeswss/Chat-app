const socket = io.connect('http://localhost:4000')
//Variable named socket is equal to connecting socket to the server



const message = document.getElementById('Message')
//Variable named message is equal html message id value


const buttonSend = document.getElementById('Send')
// Variable named buttonSend is equal to html id of Send


const messages = document.getElementById('messageContent')



buttonSend.addEventListener('click',function(){
  socket.emit('banana',{
    content:message.value,
    timeStamp:new Date()
  })
})

socket.on('banana',function(data){
  messages.innerHTML += '<div>' + data.content + '<span>' + data.timeStamp +'</span></div>'
})

//When the user clicks, a message will sent via socket to the server
