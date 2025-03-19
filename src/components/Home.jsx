import { useEffect, useState } from 'react'
import menu from '../../data.js'
import Categories from '../components/Categories.jsx'
import Menu from '../components/Menu.jsx'
import { getLocalStorage, setLocalStorage } from '../../src/helper/localStorage.js';
function Home() {
    const getStorage = getLocalStorage("value") || null

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
                        <h1>Food Menu</h1>
                        <div className="underline"> </div>
                    </div>
                    <Categories categories={categories} filterMenus={filterMenus} />
                    <Menu allMenu={allMenu} />
                </section>
            </main>
        </>
    )
}

export default Home
