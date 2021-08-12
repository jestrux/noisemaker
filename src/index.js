import './global.css';
import App from './App.svelte';

function create(target){
  new App({
    target,
    props: {
      src: 'svelte.png'
    },
  });  
}

export default create;