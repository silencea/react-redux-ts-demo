import { createStore } from 'redux';
import { enthusiasm } from '../reducers';
import { IStoreState } from '../types';
// 安装redux-devtools-extension的可视化工具。需去谷歌商店安装Redux-DevTools
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore<IStoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'java...'
},composeWithDevTools());

export default store