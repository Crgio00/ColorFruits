import './App.css'
import List from './components/List'

function App() {
  const items = [
    { name: 'Fresa', color: 'red', icon: '🍓' },
    { name: 'Pera', color: 'green', icon: '🍐' },
    { name: 'Platano', color: 'yellow', icon: '🍌' },
    { name: 'Naranaja', color: 'orange', icon: '🍊' },

  ]

  return (
    <>
        <List items={items} />
    </>
  )
}

export default App
