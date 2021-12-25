import React, { useState } from "react";
import "./container.css";
import Cell from "./Cell";
import control from "./Functions";

function Container() {
  let num = 2;
  let arr = [1, 2, 4, 11, 12, 8];
  const [array, setArray] = useState([1, 2, 4, 11, 12, 8]);

  return (
    <>
      <div className="container">
        {array.map((num) => {
          return <Cell n={num} key={num * Math.random()} />;
        })}
      </div>
      <div className="keypad">
        <button
          onClick={() => {
            arr.sort(function (a, b) {
              return 0.5 - Math.random();
            });
            setArray(arr);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            arr.sort(function (a, b) {
              return a - b;
            });
            setArray(arr);
          }}
        >
          Ordenar
        </button>
        <button
          onClick={() => {
            let Double = arr.map((element) => {
              if (element === num) {
                num *= 2;
                return element * 2;
              } else {
                return num;
              }
            });

            setArray(Double);
          }}
        >
          Duplicar desde 2 a maximo
        </button>
        <button
          onClick={() => {
            arr = control.add(arr, 18);
            setArray(arr);
          }}
        >
          añadir
        </button>
        <button
          onClick={() => {
            let arry = control.delete([...array]);
            console.log(arry);
            setArray(arry);
          }}
        >
          eliminar
        </button>
      </div>
    </>
  );
}

export default Container;
