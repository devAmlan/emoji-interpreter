import React,{useState} from 'react';
import './App.css';
import emojjiDb from './api/EmojiDb';
function App() {
  const emojiList = Object.keys(emojjiDb)
  const [emoji, setEmoji] = useState("")
  const [name, setName] = useState("")
  const clickHandler = (elem)=>{
   setName(emojjiDb[elem])
  }
  const inputHandler =()=>{
  const emojiName = emojjiDb[emoji]
  if(emoji !== ""){
    if(emoji in emojjiDb){
      setName(emojiName)
    }else{
      setName('Emoji not found')
    }
  }else{
    alert('Please enter a emoji')
  }
  }
  return (
    <div className="App">
    <div className="heading"><h3>WELCOME TO EMOJI ZOO</h3></div>
    <div className="inputarea">
      <input type="text" placeholder="Enter an animal emoji"
       onChange={(e)=>{setEmoji(e.target.value)}}/>
      <button onClick={inputHandler}>Check</button>
    </div>
   <div className="emojiname"><h3>{name}</h3></div>
    <div className="emojiarea">
    {
    emojiList.map((elem,key)=>{
       return(
         <p onClick={()=>{clickHandler(elem)}}
         key={key}
         >{elem}</p>
       )
     })
    }
    </div>

    </div>
  );
}

export default App;
