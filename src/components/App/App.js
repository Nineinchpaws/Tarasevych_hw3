import './App.css';
import TaskTwo from "../TaskTwo/TaskTwo";
import TaskThree from "../TaskThree/TaskThree";
import TaskFive from "../TaskFive/TaskFive";
import TaskSix from "../TaskSix/TaskSix";

const names = ["Katia", "Lena", "Olia", "Masha", "Lesia"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TaskTwo names={names} />
      <TaskThree />
      <TaskFive />
      </header>
      <TaskSix />
    </div>
  );
}

export default App;
