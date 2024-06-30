import Header from './components/Header'
import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'

const App = () => {

  const {isSignedIn, isLoaded} = useUser()

  if(!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/signin'}/> 
  }

  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App