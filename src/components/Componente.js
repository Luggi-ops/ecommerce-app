import React, {useEffect, useState} from 'react'
import getData from '../utils/getData'

const Componente = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData().then((res) => setData(res))
  }, [])


  console.log("ésta data viene del async mock", data)

  return (
    <div>Componente</div>
  )
}

export default Componente
