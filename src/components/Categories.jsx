import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../helper/localStorage';

function Categories({ categories, filterMenus }) {
    const getInitCategory = getLocalStorage('value') || null;
    
    const [mainCategory, setMainCategory] = useState(getInitCategory)

    useEffect(() => {
        setLocalStorage('value', mainCategory);
    }, [mainCategory]);
    
    return (
        <div className='btn-container'>
            {categories.map((item, index) => (
                <button
                    key={index}
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
