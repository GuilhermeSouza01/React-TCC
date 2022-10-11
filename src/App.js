
import React, { useState } from "react";
import "./App.css";

// import myData from './db/tcc-file.json';
import Table from "./Table";

// const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

const App = () => {
  const [callComponent, setCallComponent] = useState(false);

  // const loadData = async () => {
  //   const response = await axios.get(`${baseURL}`)
  //   const result = response.data;
  //   setData(result);

  //   console.log(result);
  // }

  // useEffect(() => {
  //   loadData()
  // }, [])

  return (
    <div className="App">
      <div className="wrappButton">
        <button
          onClick={() => setCallComponent(true)}
          className="generateButton"
        >
          Gerar Tabela
        </button>
      </div>

      <div className="container">{callComponent && <Table />}
      </div>
    </div>
  );
};

export default App;
