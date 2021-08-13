import './global.css';
import App from './App.svelte';

function create(target){
  new App({target});  
}

export default create;