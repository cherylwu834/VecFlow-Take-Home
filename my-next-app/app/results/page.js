import React from 'react';
import ContextCard from '../components/ContextCard';
import SideBar from '../components/SideBar';

// Define your component
const Results = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className=" m-8">
        <h1 className="text-4xl font-bold mb-4">Results Page</h1>
          <ContextCard title="Context.txt" date="21/04/2024" quote="...Pat did confirm with Sheila that the turbines were overpriced...which seems to mean that Enron ended up giving GE a gift of $10 million. Sheila did give him Tag Along Rights for the system - I don’t know whether it was authorised or not."/>
          <ContextCard title="Context.txt" date="21/04/2024" quote="...Pat did confirm with Sheila that the turbines were overpriced...which seems to mean that Enron ended up giving GE a gift of $10 million. Sheila did give him Tag Along Rights for the system - I don’t know whether it was authorised or not."/>
          <ContextCard title="Context.txt" date="21/04/2024" quote="...Pat did confirm with Sheila that the turbines were overpriced...which seems to mean that Enron ended up giving GE a gift of $10 million. Sheila did give him Tag Along Rights for the system - I don’t know whether it was authorised or not."/>
      </div>
    </div>
    
  );
};

export default Results;