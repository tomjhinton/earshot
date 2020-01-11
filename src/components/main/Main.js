//pic size 687*687
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl'
import Auth from '../../lib/Auth'
const sanitizeHtml = require('sanitize-html')

import Sidebar from '../main/Sidebar'

let user = Auth.getPayload()


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
    this.getLongLat = this.getLongLat.bind(this)
    this.newSoundPos = this.newSoundPos.bind(this)
  }


  componentDidMount(){
    user = Auth.getPayload()
    console.log(user)
    if(user){
      axios.get(`/api/users/${user.sub}`)
        .then(res => this.setState({user: res.data}))
        console.log(this.state)
  }


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

  createMarkup(embed) {
    console.log(embed)
    return {__html: embed}
  }

  getLongLat(map, e){
    console.log(e.lngLat)
  //  document.getElementById('info').innerHTML = e.lngLat
  // e.point is the x, y coordinates of the mousemove event relative
  // to the top-left corner of the map
  // JSON.stringify(e.point) +
  // '<br />' +
  // // e.lngLat is the longitude, latitude geographical position of the event
  // JSON.stringify(e.lngLat.wrap())
  }

  newSoundPos(map, e){
    this.setState({new: e.lngLat})
    console.log(this.state)
  }

  render() {

    console.log(this.state)

    return (
      <div className='container'>
        <div className='columns'>
          <div className='column is-one-third'>
            <Sidebar {...this.state} />
          </div>
          <div className='column'>
            <div className='title'> EARSHOT</div>
            <Map className='map'
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '80vh',
                width: '100vh'

              }}
              onMouseMove={this.getLongLat}
              onClick={this.newSoundPos}
            >
              <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
              {this.state.user && this.state.user.sounds.map(x=> {
                return(
                  <Popup coordinates={[x.long,  x.lat]} key={x.id} className='Popup'>
                    {x.title}
                    <div className='details' dangerouslySetInnerHTML={this.createMarkup(this.sanitize(x.embed))} />
                  </Popup>
                )
              })}

              {this.state.new &&<Popup coordinates={[this.state.new.lng, this.state.new.lat]}>
              <div> New Sound</div>
              </Popup>
            }

            </Map>
          </div>
        </div>


      </div>



    )
  }
}
export default Main
