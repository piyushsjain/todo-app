import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='w-[50vw] mx-[25vw] mt-[10vh] '>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
