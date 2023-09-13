import ListHeader from './components/ListHeader'
import { useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import Auth from './components/Auth'
import { useCookies } from 'react-cookie'


const App = () => {

  const [cookies, setCookies, removeCookies] = useCookies(null)
  const authToken = cookies.AuthToken  // token controls what we see on the app
  const userEmail = cookies.Email
  const [tasks, setTasks] = useState(null) // null will be set to tasks and we can change using setTasks



  const getData = async () => {

    try {

      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`) // fetch is used to request data from a server. 
      console.log(userEmail)
      const json = await response.json()
      setTasks(json)  // ??

    } catch(err) {

        console.error(err)

    }
  }


  useEffect(() => {
    if (authToken) {
      getData()
    }
  }, []) // [] -> empty dependency; check out syntax for useEffect; don't understand what this does
 
  console.log(tasks)


  // sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date)) //returns an array

  return (

    <div className="app">

      {!authToken && <Auth/>}
      {authToken && 
      <>
      <ListHeader listName={'Holiday tick list'} getData={getData}/> 
      <p className='user-email'>welcome back {userEmail}</p>
      {sortedTasks?.map((tasks) => <ListItem key={tasks.id} task={tasks} getData={getData}/>)}
      </>}
      
    </div>

  );
}

export default App;
