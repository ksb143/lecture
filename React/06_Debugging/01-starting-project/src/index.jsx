// 엄격한 규칙을 지키게 하는 모드
// 두 번 실행하여 즉각적으로 문제 파악
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render
(<StrictMode>
  <App />W
</StrictMode>
);
