import React from "react"
import Link from "gatsby-Link"
import Counter from "./counter"

export default function Home() {
  return <div style={{ color: 'tomato' }}>
    <h1>Hello world!</h1>
    <p>Welcome to my first Gatsby site</p>
    <br></br>
    <br></br>
    <Counter></Counter>
    <br></br>
    <br></br>
    <Link to="/page-2/">Page 2</Link>
    <br></br>
    <Link to="/counter-file/">Counter</Link>
  </div>
}