import React from "react"
import { Link } from "gatsby"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        return <div style={{ color: 'blue' }}>
            <h1>Counter</h1>
            <p>current counter: {this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })} style={{ color: 'tomato' }}>PLUS</button>
            <button onClick={() => this.setState({ count: this.state.count - 1 })} style={{ color: 'tomato' }}>MINUS</button>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/index/">Back</Link>
        </div>
    }
}

export default Counter
