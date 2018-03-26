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

// import createFragment from 'react-addons-create-fragment';

function Assertion(props) {
  //console.log(props.assertionProperties)

    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"4em"}}>
                  <CredsLabel>Badge adres</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.badge}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"4em"}}>
                  <CredsLabel>Ontvanger adres</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.recipient}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"4em"}}>
                  <CredsLabel>Uitgever adres</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.issuer}</CredsLabel>
                </td>
              </tr>
              <tr>

              </tr>
            </tbody>
          </CredsTable>
      );
  }

export default (Assertion)