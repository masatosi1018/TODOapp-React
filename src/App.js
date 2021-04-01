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
      <p className="title">未完了のTODO</p>
      <ul>
        <div>
          <li className="list-row">あいうえお</li>
          <button>完了</button>
          <button>削除</button>
        </div>
        <div>
          <li className="list-row">ああああ</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>
    <div className="complete-area">
    <p className="title">完了のTODO</p>
      <ul>
        <div>
          <li className="list-row">ああああ</li>
          <button>戻す</button>
        </div>
        <div>
          <li className="list-row">ああああ</li>
          <button>戻す</button>
        </div>
      </ul>
    </div>
    </>
  );
};

export default App;
