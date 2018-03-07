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
    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{props.badgeId}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.badgeIssuer}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{props.badgeType}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.badgeName}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>{props.badgeContext}</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.badgeAlignment}</CredsLabel>
                </td>
              </tr>
            </tbody>
          </CredsTable>
      );
  }

export default (BadgeClass)