import {useState} from "react"
import DisplayTable from "./DisplayTable"

const Profile = () => {
    const [data,setData]=useState({})
    const [username,setUsername]=useState("")
    const [repositories,setRepositories]=useState([])
    const [favorites,setFavorites]=useState([])
    const [erro,setErro]=useState(false)

    const onChangeHandler = e => {
        setUsername(e.target.value)
    }

    const submitHandler = async e => {
       try{
        e.preventDefault()
        const profile = await fetch(`https://api.github.com/users/${username}`,)        
        const profileJson = await profile.json()
        console.log(profileJson)     
        const repositories = await fetch(profileJson.repos_url)
        const repoJson = await repositories.json()        
        const favorites = await fetch(`https://api.github.com/users/${username}/starred`)
        const favoritesJson = await favorites.json()        
        //console.log(repoJson)
        //console.log(favoritesJson)
        if(profileJson){
            setData(profileJson)
            setRepositories(repoJson)
            setFavorites(favoritesJson)
            setErro(false)
       }
        
        } catch(e){
            setErro(true)
        }
        
    }

    return (
        <>      
        <div style={{padding:20}}>
            <div className="ui search">
                <div className="ui icon input">
                    <i className="search icon"></i>
                    <input className="prompt" placeholder="search username here..."
                    type="text" onChange={onChangeHandler} value={username} />
                </div>
                <button className="ui primary button" onClick={submitHandler}  type="submit">
                <i className="github icon"></i>Search
                </button>       
                { erro ? <p className="repoErrado">Repositorio incorreto. Tente novamente</p> : ""}
                <DisplayTable data={data} favorites={favorites} repositories={repositories} />         

            </div>
        </div>
        </>
    )
}

export default Profile