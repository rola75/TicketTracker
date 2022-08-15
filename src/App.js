import Employee from './Components/Employee/Employee';
import './App.css';
import team from './Data/employees';

const teamInfo = team.map((employee) =>{
  return <Employee name={employee.name} role={employee.role} key={employee.id}/>
})

function App() {
  return (
    <div className="App">
      {teamInfo}
    </div>
  );
}

export default App;
