function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <div className="user-info">
                <h2>{user.name || user.login}</h2>
                <p className="username">@{user.login}</p>
                {user.bio && <p className="bio">{user.bio}</p>}
                <div className="stats">
                    <span>Followers: <strong>{user.followers}</strong></span>
                    <span>Following: <strong>{user.following}</strong></span>
                    <span>Repos: <strong>{user.public_repos}</strong></span>
                </div>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                    View on Github
                </a>
            </div>
        </div>
    )
}

export default UserCard