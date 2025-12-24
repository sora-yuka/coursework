import { Outlet } from 'react-router-dom'
import styles from './Home.module.scss'
import Sidebar from '@components/layout/Sidebar'

export default function Home() {
    return (
        <div className={ styles.container }>
            <Sidebar />
            <Outlet />
        </div>
    )
}
