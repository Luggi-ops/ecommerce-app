import React, {useEffect, useState} from 'react'
import getData from '../utils/getData'
import ComponenteLista from './ComponenteLista'

const Componente = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData().then((res) => setData(res))
  }, [])


  console.log("ésta data viene del async mock", data)

  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "5px"}}>
      {
        data.map((item) => (
          <ComponenteLista producto={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Componente
