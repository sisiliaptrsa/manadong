export default function NavigationTab() {
    const pathName = window.location.pathname
    
    const pathNames = window.location.pathname.split('/').filter(path => path !== '')

    return (
        <div className="navigation-tab-container">
            <a href="/" className="navigation-tab-path">Home</a>
            {pathNames.map((path, index) => {
                return (
                    <div key={index}>
                        <span className="navigation-tab-divider">/</span>
                        <a className="navigation-tab-path" href={`/${pathNames.slice(0, index + 1).join("/")}`}>{path}</a>
                    </div>
                )
            })}
        </div>
    );
}
