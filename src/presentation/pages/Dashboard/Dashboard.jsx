import { useState } from 'react'
import styles from './Dashboard.module.scss'
import { icons } from '.'
import Dropdown from '@components/ui/Dropdown'


export default function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("")
    const [orderBy, setOrderBy] = useState("")

    const orderList = ["Упорядочить курсы по названию", "Упорядочить курсы по последнему доступу"]

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.dashboardHeader }>
                <h2 className={ styles.dashboardTitle }>
                    Мои курсы
                </h2>
                <div className={ styles.actions }>
                    <div className={ styles.searchContainer }>
                        <label htmlFor="course-search">
                            <img className={ styles.searchIcon } src={ icons.searchIcon } alt="" />
                        </label>
                        <input 
                            type="text" 
                            id="course-search" 
                            placeholder="Поиск по названию"
                            value={ searchQuery }
                            onChange={ handleSearchChange }
                        />
                    </div>
                    <Dropdown 
                        options={ orderList }
                        value={ orderBy }
                        defaultValue={ orderBy[0] }
                        onChange={ setOrderBy }
                        className={ styles.filterContainer }
                    />
                </div>
            </div>
            <div className={ styles.saved }>
                <h2 className={ styles.savedTitle }>Избранное</h2>
                <div className={ styles.savedCard }>
                    
                </div>
            </div>
        </div>
    )
}
