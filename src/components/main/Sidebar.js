//pic size 687*687
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl'

var sanitizeHtml = require('sanitize-html');



const Map = ReactMapboxGl({
  accessToken:
    process.env.mapboxPublicToken
})


let clean = sanitizeHtml('<p><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735426004&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><p>', {
  allowedTags: [ 'p', 'em', 'strong', 'iframe' ],
  allowedClasses: {
    'p': [ 'fancy', 'simple' ],
  },
  allowedAttributes: {
    'iframe': ['src']
  },
  allowedIframeHostnames: ['w.soundcloud.com', 'player.vimeo.com']
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

   createMarkup(embed) {
     console.log(embed)
  return {__html: embed}
}

  render() {

    console.log(this.state)

    return (
      <div className='container'>
        <div className='columns'>
          <div className='column is-half'>
          COL 1

            <div dangerouslySetInnerHTML={this.createMarkup(clean)} />
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
