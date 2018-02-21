import React from 'react'

function OpenBadge(props) {
    return (
        <div>
          <img src={'https://ipfs.infura.io' + props.issuer.image.contentUrl}/>
        </div>
      );
  }

export default (OpenBadge)