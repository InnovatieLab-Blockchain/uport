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

function Issuer(props) {
    let image = ''
    if (props.image.contentUrl === '') {
        image = '/public/favicon-32x32.png'
    } else {
        image = 'https://ipfs.infura.io' + props.image.contentUrl
    }
    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{props.name}</CredsLabel>
                </td>
                <td>
                    <img alt="Issuer" src={image} height="100" width="100"/>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{props.type}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.id}</CredsLabel>
                </td>
              </tr>
            </tbody>
          </CredsTable>
      );
  }

export default (Issuer)