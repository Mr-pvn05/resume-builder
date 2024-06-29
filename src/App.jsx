import { Outlet } from 'react-router-dom'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div>
      <Button>Add</Button>
      <Outlet/>
    </div>
  )
}

export default App