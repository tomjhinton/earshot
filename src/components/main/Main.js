//pic size 687*687
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl'

import Sidebar from '../main/Sidebar'



const Map = ReactMapboxGl({
  accessToken:
    process.env.mapboxPublicToken
})


class Main extends React.Component{
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
          <div className='column is-one-third'>
          <Sidebar />
          </div>
          <div className='column'>
            <Map className='map'
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '80vh',
                width: '100vh'
              }}
            >
              <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
              <Popup coordinates={[-0.481747846041145, 51.3233379650232]}>
              HIYa
              </Popup>
            </Map>
          </div>
        </div>


      </div>



    )
  }
}
export default Main
