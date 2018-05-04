import React from 'react'
import styled from 'styled-components'

const CredsTable = styled.table`
  margin: auto
  text-align: left
`
const CredsLabel = styled.label`
  position: relative
  top: 10px
`

function BadgeClass (props) {
  var badgeProperties
  if (props.badgeProperties !== undefined) {
    badgeProperties = props.badgeProperties
  } else {
    badgeProperties = ['', '', '', '', '', '']
  }
  return (
    <CredsTable>
      <tbody>
        <tr>
          <td style={{'paddingRight': '4em'}}>
            <CredsLabel>
              Naam
            </CredsLabel>
          </td>
          <td>
            <CredsLabel>
              {badgeProperties[3]}
            </CredsLabel>
          </td>
        </tr>
        <tr>
          <td style={{'paddingRight': '4em'}}>
            <CredsLabel>
              Badge ID
            </CredsLabel>
          </td>
          <td>
            <CredsLabel>
              {badgeProperties[0]}
            </CredsLabel>
          </td>
        </tr>
        <tr>
          <td style={{'paddingRight': '4em'}}>
            <CredsLabel>
              Badge Type
            </CredsLabel>
          </td>
          <td>
            <CredsLabel>
              {badgeProperties[1]}
            </CredsLabel>
          </td>
        </tr>
      </tbody>
    </CredsTable>
  )
}

export default (BadgeClass)
