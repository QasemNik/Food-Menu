import { useEffect, useState } from 'react'
import menu from '../data.js'
import Categories from './Categories.jsx'
import Menu from './Menu'
import './App.css';
import { getLocalStorage, setLocalStorage } from '../src/helper/localStorage.js';
function App() {
  const getStorage = getLocalStorage("value") || 'all'

  const allCategories = ['all', ...new Set(menu.map(menu => menu.category))]
  const [allMenu, setAllMenu] = useState(menu)
  const [categories] = useState(allCategories)

  useEffect(() => {
    if (getStorage !== 'all') {
      const filteredMenu = menu.filter(item => item.category === getStorage)
      setAllMenu(filteredMenu)
    }
  }, [getStorage])

  const filterMenus = (category) => {
    setLocalStorage('value', category)
    if (category === 'all') {
      setAllMenu(menu)
      return
    }

    let filteredMenu = menu.filter(menus => menus.category === category)

    setAllMenu(filteredMenu)

  }
  return (
    <>
      <main>
        <section className='menu section'>
          <div className="title">
            <h1>Our Menu</h1>
            <div className="underline"> </div>
          </div>
          <Categories categories={categories} filterMenus={filterMenus} />
          <Menu allMenu={allMenu} />
        </section>
      </main>
    </>
  )
}

export default App
