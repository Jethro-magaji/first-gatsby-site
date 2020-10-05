import React from "react"
import Link from "gatsby-Link"

export default function Home() {
    return <div style={{ color: 'tomato' }}>
        <h1>Welcome to Page 2</h1>
        <Link to="/index/">Back</Link>
    </div>
}