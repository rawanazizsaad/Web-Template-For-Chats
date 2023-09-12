

function init() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML="Hello, How can I help you?" ;
    res_elm.setAttribute("class","left");
 
    document.getElementById('msg').appendChild(res_elm);
}
 
 
document.getElementById('reply').addEventListener("click", async (e) => {
    e.preventDefault();
 
    var req = document.getElementById('msg_send').value ;
 
    if (req == undefined || req== "") {
 
    }
    else{
     
        var res = "";
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
            res = JSON.stringify(data.data.response)
        })
           
        let data_req = document.createElement('div');
        let data_res = document.createElement('div');
 
        let container1 = document.createElement('div');
        let container2 = document.createElement('div');
 
        container1.setAttribute("class","msgCon1");
        container2.setAttribute("class","msgCon2");
 
        data_req.innerHTML = req ;
        data_res.innerHTML = res ;
 
 
        data_req.setAttribute("class","right");
        data_res.setAttribute("class","left");
 
        let message = document.getElementById('msg');
 
         
        message.appendChild(container1);
        message.appendChild(container2);
 
        container1.appendChild(data_req);
        container2.appendChild(data_res);
 
        document.getElementById('msg_send').value = "";
 
    function scroll() {
        var scrollMsg = document.getElementById('msg')
        scrollMsg.scrollTop = scrollMsg.scrollHeight ;
    }
    scroll();
 
    }
 
 
    });

// class Chatbox {
//     constructor() {
//         this.args = {
//             openButton: document.querySelector('.chatbox__button'),
//             chatBox: document.querySelector('.chatbox__support'),
//             sendButton: document.querySelector('.send__button')
//         }

//         this.state = false;
//         this.messages = [];
//     }

//     display() {
//         const {openButton, chatBox, sendButton} = this.args;

//         openButton.addEventListener('click', () => this.toggleState(chatBox))

//         sendButton.addEventListener('click', () => this.onSendButton(chatBox))

//         const node = chatBox.querySelector('input');
//         node.addEventListener("keyup", ({key}) => {
//             if (key === "Enter") {
//                 this.onSendButton(chatBox)
//             }
//         })
//     }

   

//     onSendButton(chatbox) {
//         var textField = chatbox.querySelector('input');
//         let text1 = textField.value
//         if (text1 === "") {
//             return;
//         }

//         let msg1 = { name: "User", message: text1 }
//         this.messages.push(msg1);

//         fetch('http://127.0.0.1:5000/predict', {
//             method: 'POST',
//             body: JSON.stringify({ message: text1 }),
//             mode: 'cors',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//           })
//           .then(r => r.json())
//           .then(r => {
//             let msg2 = { name: "Rawan", message: r.answer };
//             this.messages.push(msg2);
//             this.updateChatText(chatbox)
//             textField.value = ''

//         }).catch((error) => {
//             console.error('Error:', error);
//             this.updateChatText(chatbox)
//             textField.value = ''
//           });
//     }

//     updateChatText(chatbox) {
//         var html = '';
//         this.messages.slice().reverse().forEach(function(item, index) {
//             if (item.name === "Sam")
//             {
//                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
//             }
//             else
//             {
//                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
//             }
//           });

//         const chatmessage = chatbox.querySelector('.chatbox__messages');
//         chatmessage.innerHTML = html;
//     }
// }


const chatbox = new Chatbox();
chatbox.display();