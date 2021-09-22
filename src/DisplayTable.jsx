

const DisplayTable = ({data,favorites, repositories}) => {
    return ( 
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Location</th>
                    <th>Bio</th>
                    <th>Favorites</th>
                    <th>All Repos</th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.login}</td>
                    <td>{!data.avatar_url? "":(
                        <img className="ui small circular image"
                        src={data.avatar_url} alt="avatar-pic" />                        
                    )}</td>
                    <td>{data.location}</td>
                    <td>{data.bio}</td>                                        
                    <td>{favorites.map(favo=>(
                        <div className="ui relaxed divided list" key={favo.name}>
                            <div className="item">
                                <i className="large github middle aligned icon">

                                </i>
                                <div className="content">
                                    <a 
                                    href={favo.html_url} 
                                    rel="noopener noreferrer"
                                    target="_blank" 
                                    className="header">
{}                                  {favo.name}
                                    </a>
                                </div>
                            </div>
                            </div>
                    ))}</td>
                    <td>{repositories.map(repo=>(
                        <div className="ui relaxed divided list" key={repo.name}>
                            <div className="item">
                                <i className="large github middle aligned icon">

                                </i>
                                <div className="content">
                                    <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="header">
{}                                  {repo.name}
                                    </a>
                                </div>
                            </div>
                            </div>
                    ))}</td>
                    
                </tr>
            </tbody>
        </table>
     );
}
 
export default DisplayTable;