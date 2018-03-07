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

import createFragment from 'react-addons-create-fragment';
 
function Swapper(props) {
  let children;
  if (props.swapped) {
    children = createFragment({
      right: props.rightChildren,
      left: props.leftChildren
    });
  } else {
    children = createFragment({
      left: props.leftChildren,
      right: props.rightChildren
    });
  }
  return <div>{children}</div>;
}

function Assertion(props) {
  console.log(props.assertionProperties)

    return (
            <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Badge</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.badge}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Ontvanger</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.recipient}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Issuer</CredsLabel>
                </td>
                <td>
                  <CredsLabel>{props.issuer}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Properties</CredsLabel>
                </td>
                <td>
                  {/* {props.assertionProperties} */}
                </td>
              </tr>
            </tbody>
          </CredsTable>
      );
  }

export default (Assertion)