import {createStore} from 'redux';
import todos from './reducers/todos';


export default createStore(todos);



//explaination

/*This is about the end of our tutorial. 
I’ve set you up to build out the rest of this app.
 You know how to dispatch actions and see the state change. 
 I’ll recap one more time as to how this is working.
  When you dispatch a new todo, it is sent to the reducer, which adds it to our Immutable List.
   If you remember what I said earlier, Lists in Immutable have the same syntax as a plain array.
    This is why we can map it just like we would with a normal array! Sorry for that little tangent…
 After going through the reducer, the state tree is then updated and the Provider component, which wraps around the main Todos component, will pass in the new state from redux as props!
 */