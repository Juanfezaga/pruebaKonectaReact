import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [employees, setEmployees] = useState([])
  const [petitions, setPetitions] = useState([])

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("http://localhost:8080/api/empleados");
      if(response.status === 200){
        const data = response.json();
        setEmployees(data)
      }
    }
    const fetchPetitions = async () => {
      const response = await fetch('http://localhost:8080/api/solicitudes')
      if(response.data === 200){
        const data = response.json();
        setPetitions(data)
      }
    }
    fetchPetitions()
    fetchEmployees()
  }, [])

  return (
    <div className="App">
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha Ingreso</th>
            <th>Salario</th>
            <th>Solicitudes</th>
          </tr>
          {employees.map((employee) => (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.nombre}</td>
              <td>{employee.fechaIngreso}</td>
              <td>{employee.salario}</td>
              <td>{employee.solicitud.length}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
      <table>
          <tr>
            <th>ID</th>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Resumen</th>
          </tr>
          {petitions.map((petition) => (
            <tr>
              <td>{petition.id}</td>
              <td>{petition.codigo}</td>
              <td>{petition.descripcion}</td>
              <td>{petition.resumen}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
