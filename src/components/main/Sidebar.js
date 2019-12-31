//pic size 687*687
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

const sanitizeHtml = require('sanitize-html')






class Sidebar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: {},
      error: '',
      user: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }


  sanitize(input){
    return sanitizeHtml(input, {
      allowedTags: [ 'p', 'em', 'strong', 'iframe' ],
      allowedClasses: {
        'p': [ 'fancy', 'simple' ]
      },
      allowedAttributes: {
        'iframe': ['src']
      },
      allowedIframeHostnames: ['w.soundcloud.com', 'player.vimeo.com']
    })
  }


  componentDidMount(){
    // axios.get('/api/records')
    //   .then(res => this.setState({ records: res.data }))


  }

  createMarkup(embed) {
    console.log(embed)
    return {__html: embed}
  }

  logout() {
    Auth.removeToken()
    this.setState({ user: '' })
    this.props.history.push('/')

  }


  handleChange(e) {
  // merge data on state with new data from the form
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    // set the data back on state
    this.setState({ data }) // equivalent to { data: data }
  }

  handleLoginSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push({
          pathname: '/hiya',
          state: { detail: [Auth.getPayload()] }
        })
      })
      .catch(() => this.setState({ error: 'Invalid credentials' }))
  }

  handleSoundSubmit(e) {
    e.preventDefault()

    axios.post('/api/sounds', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push({
          pathname: '/hiya',
          state: { detail: [Auth.getPayload()] }
        })
      })
      .catch(() => this.setState({ error: 'Invalid credentials' }))
  }


  render() {

    console.log(this.state)

    return (
      <div className='container'>
        <div className='columns'>
          <div className='column is-half'>
          COL 1

            {!Auth.isAuthenticated() && <div>
              <span>LOGIN</span>
              <div className='container'>

                <div className="title section form-title">Login</div>
                <div className="user-form">
                  <form onSubmit={this.handleLoginSubmit}>
                    <div className="field">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        name="email"
                        placeholder="eg: jack@hotmail.com"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="password"
                          type="password"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                    </div>



                    <button>Submit</button>
                  </form>
                </div>
              </div>

            </div>}
            {Auth.isAuthenticated() && <div >
              <p onClick={this.logout}>LOGOUT</p>

              <span>Add Sound</span>
              <div className='container'>

                <div className="title section form-title">Add Sound</div>
                <div className="user-form">
                  <form onSubmit={this.handleSoundSubmit}>
                    <div className="field">
                      <label className="label">Email</label>
                      <input
                        className="input"
                        name="email"
                        placeholder="eg: jack@hotmail.com"
                        onChange={this.handleChange}

                      />
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="password"
                          type="password"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="password"
                          type="password"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="password"
                          type="password"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="password"
                          type="password"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                    </div>



                    <button>Submit</button>
                  </form>
                </div>
              </div>



            </div>}
          </div>
          <div className='column'>
            COL 2
          </div>
        </div>


      </div>



    )
  }
}
export default Sidebar
