import './Body.css'
import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext'

function Body() {
  const { categories, resources, handleFilter,filteredResources, setFilteredResources } = useContext(GlobalContext)
  return (
    <div className="container-body">
      {filteredResources.map((resource) => (
        <div className="card" key={resource.id}>
          <div className="card-header">
            <h2>{resource.title}</h2>
          </div>
          <div className="card-body">
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noreferrer">Acessar</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Body
