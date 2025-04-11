import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Markdown from 'react-markdown'

function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {

    setAnswer("Loading...")

    const response = await axios({

      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD9o2rV6uvT9hTbVks4U1WMqroh4K0F-lE",

      method: "post",

      data: {
        "contents": [{
          "parts": [{ "text": question }]
        }]
      }

    })

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])

  }

  return (
    <>
      <h1>Wellcome To The Sam's React API</h1>

      <textarea
        rows={11}
        cols={25}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea> <br />

      <button onClick={generateAnswer} >Generate SomeThing</button>
      <br />
      <br />

      
      <Markdown>  

        {answer}

      </Markdown>

      <span>Copy to ClicpBord</span>
  
 
    </>
  )
}

export default App