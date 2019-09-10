import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header = props => {

    const [collapsed, setCollapsed] = useState(true)

    const isDesktop = useMediaQuery({
        query: '(max-width: 500px)'
    })

    const toggleNav = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            {isDesktop ? <MobileHeader toggleNav={toggleNav} collapsed={collapsed} /> : <DesktopHeader />}
        </div>
    )
}




export default Header