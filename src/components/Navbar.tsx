import {Link, useLocation} from "react-router-dom";

const links = [
    ['About the project', '/'],
    ['Features', '/#'],
]

const getRightPaneClassName = (pathname) => {
    if(pathname === '/app/player')
        return  'hidden'
    if(pathname !== '/')
        return  'hidden md:flex'
    return 'flex'
}

const getNavClassName = (pathname) => {
    if(pathname !== '/')
        return  'justify-between'
    return 'justify-center md:justify-between md:bg-transparent'
}

const Navbar = () => {
    const {pathname} = useLocation()
    return (
        <nav
            style={{
                background: 'linear-gradient(to top, transparent 70%, #9E76FB 120%)',
            }}
            className={[
                "fixed top-0 left-0 w-full z-50 px-10 py-5 flex items-center",
                "bg-dark md:bg-transparent",
                getNavClassName(pathname)
            ].join(' ')}>
            <Link to="/" className="font-primary bg-dark px-5 py-1">
                AstroSonix
            </Link>
            <div className={getRightPaneClassName(pathname)}>
                <ul className="hidden md:flex items-center mr-5">
                    {links.map(([label, href]) => (
                        <li className="mx-5" key={href}>
                            <Link to={href} className="hover:underline">{label}</Link>
                        </li>
                    ))}
                </ul>
                <Link
                    style={{
                        background: 'linear-gradient(to right, #9E76FB, #3A71F9)'
                    }}
                    className="text-lg px-4 py-2 rounded-3xl font-bold"
                    to="/app/image-source">
                    Use the app
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
