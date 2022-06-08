import React, { useState, useReducer } from "react";
import "./styles.css";

//reducer - state를 업데이트 하는 역할 (은행)
//dispatch - state 업데이트를 위한 요구
//action - 요구의 내용

//useReducer도 state 가 바뀔때 마다 컴포넌트를 다시 렌더링 시킨다
// 현재 state가 money를 가르키므로 money가 바뀔때마다 컴포넌트가
// 다시 렌더링 되는 것이다.

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw"
};

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다.", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

export default function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <p>잔고 : {money}원 </p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
