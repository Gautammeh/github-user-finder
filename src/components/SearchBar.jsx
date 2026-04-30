import { useState } from "react"

function SearchBar({ onSearch }) {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim() === "") return
        onSearch(input.trim())
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Github Username"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar