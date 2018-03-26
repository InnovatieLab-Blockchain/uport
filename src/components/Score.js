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

function Score(props) {
  var scoreProperties
  if(props.scoreProperties !== undefined) {
    scoreProperties  = props.scoreProperties
  } else {
    scoreProperties = ["", 0]
  }
    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"4em"}}>
                  <CredsLabel>Titel</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{scoreProperties[0]}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"4em"}}>
                  <CredsLabel>Score</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{Number(scoreProperties[1])}</CredsLabel>
                </td>
              </tr>
            </tbody>
          </CredsTable>
      );
  }

export default (Score)