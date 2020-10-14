import React, {useState, useEffect} from 'react';
import db from './config';
import Message from './componets/Message';
import './App.css';
import MessageForm from './componets/MessageForm';

function App() {
  const [newMessage, setnewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.ref('/messages').on('value', (snapshot) => {
      const fbMessages = snapshot.val();
        const convertedMessages = Object.entries(fbMessages || []).map(
          ([id, message]) => ({
            ...message,
            id
          })
        )
    setMessages(convertedMessages);
     });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObject = {
      user: 'Patryk',
      content: newMessage,
      datetime: Date.now()
    }
    if (newMessage){
      db.ref('/messages').push(messageObject);
    }
    
    setnewMessage('');
  }

  /*const messages = [
    {id: 1, user: 'Ania', content: 'Hej', datetime: Date.now()},
    {id: 11, user: 'Aga', content: 'ho', datetime: Date.now()},
    {id: 21, user: 'Aniela', content: 'Lublin', datetime: Date.now()}
  ]*/
     
  return (
    <div className="App">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
            ))}
            <MessageForm message={newMessage} handleSubmit={handleSubmit} handleContentChange={setnewMessage} />
    </div>
  );
}

export default App;
