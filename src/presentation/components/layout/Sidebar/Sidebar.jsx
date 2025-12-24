import { useLocation, NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import { icons } from '.'
import Button from '@components/ui/Button'


export default function Sidebar() {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    const handleLogout = () => {

    }

    return (
        <div className={ styles.container }>
                <span className={ styles.logo }>
                    <img src={ icons.logo } alt="logo" />
                </span>
                <ul className={ styles.tabs }>
                    <NavLink to="/" className={ `${styles.tabsItem} ${isActive("/") ? styles.active : ""}` }>
                        <li className={ styles.item }><img src={ icons.home } alt="" /></li>
                    </NavLink>
                    <NavLink to="/news" className={ `${styles.tabsItem} ${isActive("/news") ? styles.active : ""}` }>
                        <li className={ styles.item }><img src={ icons.news } alt="" /></li>
                    </NavLink>
                    <NavLink to="/account" className={ `${styles.tabsItem} ${isActive("/account") ? styles.active : ""}` }>
                        <li className={ styles.item }><img src={ icons.user } alt="" /></li>
                    </NavLink>
                    <NavLink to="/faq" className={ `${styles.tabsItem} ${isActive("/faq") ? styles.active : ""}` }>
                        <li className={ styles.item }><img src={ icons.faq } alt="" /></li>
                    </NavLink>
                </ul>
                <Button className={ styles.logOut } onClick={ handleLogout }>
                    <img src={ icons.logOut } alt="Log out" />
                </Button>
        </div>
    )
}
