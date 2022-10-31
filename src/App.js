import './App.css';
import React, { useState } from 'react';
import DojoTabs from './components/DojoTabs';

function App() {

  const [tabs] = useState([
    { label: "tab1", content: "this is tab1" },
    { label: "tab2", content: "this is tab2" },
    { label: "tab3", content: "this is tab3" },
    { label: "tab4", content: "this is tab4" },
  ])


  return (
    <div className="App">

      <DojoTabs tabs={tabs}/>


    </div>
  );
}

export default App;
