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

function BadgeClass(props) {
  var badgeProperties
  if(props.badgeProperties !== undefined) {
    badgeProperties  = props.badgeProperties
  } else {
    badgeProperties = ["", "", "", "", "", ""]
  }
    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{badgeProperties[0]}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{badgeProperties[1]}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{badgeProperties[2]}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{badgeProperties[3]}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{badgeProperties[4]}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{badgeProperties[5]}</CredsLabel>
                </td>
              </tr>
            </tbody>
          </CredsTable>
      );
  }

export default (BadgeClass)