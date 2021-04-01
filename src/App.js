import logo from './logo.svg';
import React from "react";
import './App.css';

export const App = () => {
  return(
    <>
    <div className="input-area">
      <input placeholder="TODOを追加"/>
      <button>追加</button>
    </div>
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      <ul>
        <div>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </div>
        <div>
          <li>ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>
    <div className="complete-area">
    <p>完了のTODO</p>
      <ul>
        <div>
          <li>ああああ</li>
          <button>戻す</button>
        </div>
        <div>
          <li>ああああ</li>
          <button>戻す</button>
        </div>
      </ul>
    </div>
    </>
  );
};

export default App;
