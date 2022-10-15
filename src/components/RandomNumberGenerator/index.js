// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChangeRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button-generate"
              type="button"
              onClick={this.onChangeRandomNumber}
            >
              Generate
            </button>
            <p className="para">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
