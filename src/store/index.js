import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {name: "?" ,background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWvEKc9A_FcTO0Dv3e9gAYmlAil3D_thbuW-eOIfm_SZSnynDFg"}
export const store = createStore(reducer,initialState);