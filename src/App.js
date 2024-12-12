

import React,(useState) from 'react'

const App = () => {
  const [task,setTask] = useState("");
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">Todo Management Application</h5>
           <form>
            <input type="text" /> &nbsp; &nbsp;
            <input type="submit" value="Add" name="Add" />
           </form>
          </div>

        </div>
      </center>
      
    </div>
  )
}

export default App
