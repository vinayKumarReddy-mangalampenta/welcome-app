import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  unSubscribe = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  subscribe = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you Happy Learning</p>
        {isSubscribed ? (
          <button onClick={this.unSubscribe}>Subscribed</button>
        ) : (
          <button onClick={this.subscribe}>Subscribe</button>
        )}
      </div>
    )
  }
}

export default Welcome
