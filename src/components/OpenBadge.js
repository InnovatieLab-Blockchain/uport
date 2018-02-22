import React from 'react'
import styled from 'styled-components'

const CredsTable = styled.table`
  margin: auto;
  text-align: left;
`
const CredsLabel = styled.label`
  position: relative;
  top: 10px;
`

function OpenBadge(props) {
    let image = ''
    if (props.issuer.image.contentUrl == '') {
        image = '/public/favicon-32x32.png'
    } else {
        image = 'https://ipfs.infura.io' + props.issuer.image.contentUrl
    }
    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{props.issuer.name}</CredsLabel>
                </td>
                <td>
                    <img alt="Issuer" src={image} height="100" width="100"/>
                </td>
              </tr> 
            </tbody>
          </CredsTable>
      );
  }

export default (OpenBadge)