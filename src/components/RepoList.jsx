function RepoList({ repos }) {
    return (
        <div className="repo-list">
            <h3>Top Repositories</h3>
            {repos.map((repo) => (
                <div key={repo.id} className="repo-card">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                    </a>
                    <p>{repo.description || "No description"}</p>
                    <div className="repo-meta">
                        <span>Stars: {repo.stargazers_count}</span>
                        <span>Language: {repo.language || "N/A"}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RepoList