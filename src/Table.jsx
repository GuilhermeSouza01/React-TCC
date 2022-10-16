import React from "react";
import myData from "./db/json-tccfile.json";
export default function Table() {
  let count = 1;

  return (
    <>
      <div className="containerTable">
        <table>
          <thead>
            <tr className="table100-head">
              <th className="column1">Indice</th>
              <th className="column2">Nome</th>
              <th className="column3">Idade</th>
              <th className="column4">Número</th>
              <th className="column5">Saldo</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((item, index) => (
                <tr key={index}>
                    <td>{count++}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.balance}</td>
                </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </>
  );
}
