import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar"
import UserCard from "./components/UserCard"
import RepoList from "./components/RepoList"

function App() {

  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchUser = async (searchName) => {
    setLoading(true)
    setError("")
    setUserData(null)
    setRepos([])

    try {
      const userRes = await fetch(`https://api.github.com/users/${searchName}`)

      if (!userRes.ok) {
        throw new Error("User Not Found!")
      }

      const user = await userRes.json()
      setUserData(user)

      const repoRes = await fetch(`https://api.github.com/users/${searchName}/repos?sort=stars&per_page=6`)
      const repoData = await repoRes.json()

      setRepos(repoData)




    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadDefault = async () => {
      await fetchUser("Gautammeh")
    }
    loadDefault()
  }, [])

  return (
    <div className="app">
      <h1>GitHub Finder</h1>
      <SearchBar onSearch={fetchUser} />
      {loading && <p className="loading">Finding User...</p>}
      {error && <p className="error">{error}</p>}
      {userData && <UserCard user={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  )
}

export default App