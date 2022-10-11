import React from "react";
import myData from "./db/tcc-file.json";
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
              <th className="column3">Email</th>
              <th className="column4">Nome do filho</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((item, index) => (
                <tr key={index}>
                    <td>{count++}</td>
                    <td>{item.first_name}</td>
                    <td>{item.email}</td>
                    <td>{item.children.first_name}</td>
                </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </>
  );
}
