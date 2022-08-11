import React, { useEffect,useState  } from 'react'
import axios from 'axios'

const UseEffects = () => {
    {/* setting state for data */}
    const [data, setData] = useState("");

    {/* fetching data from an API */}
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                console.log(response.data);
                setData(response.data[0].name)
            })
    },[])

  return (
    <div>
        <h3>Hello World {data}</h3>
    </div>
  )
}

export default UseEffects