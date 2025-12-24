import { Routes, Route } from 'react-router-dom'
import './presentation/styles/main.scss'
import { AuthProvider } from "@context/Authcontext.jsx"
import Home from '@pages/Home'
import News from '@pages/News'
import Dashboard from '@pages/Dashboard'

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={ <Home /> }>
                    <Route index element={ <Dashboard /> } />
                    <Route path="/news" element={ <News /> } />
                </Route>
                <Route path="/login" element={ <>check login screen</> } />
                <Route path="*" element={ <>Not Found</> } />
            </Routes>
        </AuthProvider>
    )
}
