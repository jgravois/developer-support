import L from 'leaflet'
import esri from 'esri-leaflet'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Map extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const style = { position: 'absolute', top:'0', bottom:'0', right:'0', left:'0' };

    return (
      <div style={style}>
          <div ref={() => this.renderMap()} />
      </div>
    )
  }

  renderMap() {
    let mapContainer = ReactDOM.findDOMNode(this);
    this.map = L.map(mapContainer);
    this.map.setView([45, 137], 6);
    esri.basemapLayer("Topographic").addTo(this.map);
  }
}

ReactDOM.render(<Map />, document.getElementById('react-app'))
