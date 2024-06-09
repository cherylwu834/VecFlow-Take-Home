'use client';

import React, {useState, useEffect} from 'react';
import ContextCard from '../components/ContextCard';
import SideBar from '../components/SideBar';

function useQuery() {
  return new URLSearchParams(window.location.search);
}

// Define your component
const Results = () => {
  const [answer, setAnswer] = useState([]);
  const [prompt, setPrompt] = useState("")
  

  const getResponses = async () => {
    const query = useQuery();    
    setPrompt(query.get("question"));

    console.log("getResponses called")
    console.log("prompt: ", query.get("question"))

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer 28b655a6430d7b94996808735856408a47928a37a1c32f10751fcb6e8bde7805',
      },
      body: JSON.stringify({
        model: 'togethercomputer/llama-2-70b-chat',
        prompt: query.get("question"),
        max_tokens: 200
      })
    };
    
    fetch('https://api.together.xyz/inference', options)
      .then(response => response.json())
      .then(response => setAnswer(response.output.choices[0].text))
      .catch(err => console.error(err))

    console.log("response: ", answer)
  };

  useEffect(() => {
    getResponses();
  }, []);

  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="w-1/3 m-8">
        <h1 className="text-4xl font-bold mb-4">Results Page</h1>
          <ContextCard key="1" title="Context.txt" date="21/04/2024" quote="...Pat did confirm with Sheila that the turbines were overpriced...which seems to mean that Enron ended up giving GE a gift of $10 million. Sheila did give him Tag Along Rights for the system - I don’t know whether it was authorised or not."/>
          <ContextCard key="2" title="Context.txt" date="21/04/2024" quote="...Pat did confirm with Sheila that the turbines were overpriced...which seems to mean that Enron ended up giving GE a gift of $10 million. Sheila did give him Tag Along Rights for the system - I don’t know whether it was authorised or not."/>
          <ContextCard key="3" title="Context.txt" date="21/04/2024" quote="...Pat did confirm with Sheila that the turbines were overpriced...which seems to mean that Enron ended up giving GE a gift of $10 million. Sheila did give him Tag Along Rights for the system - I don’t know whether it was authorised or not."/>
      </div>
      <div className="max-w-lg p-4 w-full bg-white border rounded-md shadow-sm m-5">
        <p className="text-sm text-dark-purple">{prompt}</p>
        <p className="mt-2 text-base text-slate-700">{answer}</p>
      </div>
    </div>
    
  );
};

export default Results;