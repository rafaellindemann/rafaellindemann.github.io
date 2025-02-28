import './Body.css'
import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalContext'
import Card from './Card';

function Body() {
  const { categories, resources, handleFilter,filteredResources, setFilteredResources } = useContext(GlobalContext)
  return (
    <div className="container-body">

      <div className="registros">
        {filteredResources.map((resource) => (
          <Card r={resource} key={resource.id}/>
        ))}

      </div>
      
    </div>
  )
}

export default Body
