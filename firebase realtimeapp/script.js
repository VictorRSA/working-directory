const firebaseConfig={
apiKey:  "AIzaSyBF_EnAeOo1cN8wUM3-gKus9-FJkZLNwQk",
authDomain: "chatter-app-9726d.firebaseapp.com",
projectId: "chatter-app-9726d",
storageBucket: "chatter-app-9726d.appspot.com",
messagingSenderId: "chatter-app-9726d.appspot.com",
appId: "1:255005351907:web:099aa926d9253fe05c0ad6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();


/*we need a way for users to enter their username and ,....
will use prompt to capture the inputs */

const username = prompt("What's your name?");


/*lets create an event listener called it a postChat ,function on the form submissions 
this function saves the data to the message collection in the firebase,
using a timestamp to separate ech record*/

document.getElementById("send-message").addEventListener("submit",postChat);

function postChat(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const chatTxt = document.getElementById("chat-text");
    const message  = chatTxt.value;
    chatTxt.value ="";
    db.ref("message/"+timestamp).set({ 
        usr:username,
        msg:message,
    });

}

/*
with the chat messages now stored in the database provide by Firebase,we need to render the message into HTML and
Firebase has built in child_added event that is triggered ....
by once for each existing message then every now and then the messages are added to the database
 */

 const fetchChat = db.ref("messages/");
 fetchChat.on("child_added",function(snapshot){
     const messages = snapshot.val();
     const msg = "<li>" + messages.usr+ ":"+messages.msg+"</li>";
     document.getElementById("message").innerHTML +=msg;
 });
 