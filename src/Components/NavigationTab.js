import {Link, useLocation} from 'react-router-dom'

export default function NavigationTab() {
    const {pathname} = useLocation()
    
    const pathNames = pathname.split('/').filter(path => path !== '')

    return (
        <div className="navigation-tab-container">
            <Link to="/" className="navigation-tab-path">Home</Link>
            {pathNames.map((path, index) => {
                return (
                    <div key={index}>
                        <span className="navigation-tab-divider">/</span>
                        <Link className="navigation-tab-path" to={`/${pathNames.slice(0, index + 1).join("/")}`}>{path.split("-").join(" ")}</Link>
                    </div>
                )
            })}
        </div>
    );
}
