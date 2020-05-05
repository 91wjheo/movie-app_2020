import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



// <APP /> 은 html이 아니다. react의 component라는 것인데, 이건 html을 반환하는 함수이다.
// 이런걸 jsx 라고 하는데, jsx는 javascript안의 html이다.
// 그리고 react application은 한 번에 하 나의 component만 렌더링 할 수 있다.
// 따라서 모든 컴포넌트들은 App.js 안에 들어가야한다.
ReactDOM.render(<App />, document.getElementById('root'));