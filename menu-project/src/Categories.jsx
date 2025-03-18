import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../src/helper/localStorage';

function Categories({ categories, filterMenus }) {
    const getInitCategory = getLocalStorage('value') || 'all';
    
    const [mainCategory, setMainCategory] = useState(getInitCategory)

    useEffect(() => {
        setLocalStorage('value', mainCategory);
    }, [mainCategory]);
    
    return (
        <div className='btn-container'>
            {categories.map((item) => (
                <button
                    key={item.id}
                    type='button'
                    className={item === mainCategory ? 'filter-btn highlight' : "filter-btn"}
                    onClick={() => {
                        setMainCategory(item);
                        filterMenus(item);
                    }}
                >
                    {item}
                </button>
            ))}

        </div>
    )
}

export default Categories
