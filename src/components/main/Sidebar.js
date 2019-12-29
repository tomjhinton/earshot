//pic size 687*687
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl'




const Map = ReactMapboxGl({
  accessToken:
    process.env.mapboxPublicToken
})


class Sidbear extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }


  componentDidMount(){
    // axios.get('/api/records')
    //   .then(res => this.setState({ records: res.data }))


  }

  render() {

    console.log(this.state)

    return (
      <div className='container'>
        <div className='columns'>
          <div className='column is-half'>
          COL 1
          </div>
          <div className='column'>
            COL 2
          </div>
        </div>


      </div>



    )
  }
}
export default Sidbear
