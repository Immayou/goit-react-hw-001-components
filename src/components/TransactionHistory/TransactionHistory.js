import styled from "@emotion/styled";

export const Table = styled.table`
width: 800px;
margin: 0 auto;
border-collapse: collapse;
border-radius: 6px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`

export const TableHeading = styled.th`
padding:12px;
text-align: center;
color: #fff;
:not(:last-of-type){
border-right: 1px solid #EEEEEE;
}
:first-of-type {
    border-top-left-radius: 6px;
  }
:last-of-type {
    border-top-right-radius: 6px;
  }
`
export const TableRowHead = styled.tr`
background-color: cadetblue;
`

export const TableRow = styled.tr`
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

:nth-of-type(odd) {
    background-color: rgb(161, 192, 197);
  }
:nth-of-type(even) {
    background-color: rgb(216, 240, 243);
  }

  :hover {
      transform: scale(1.02);
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  }

`
export const TableItem = styled.td`
padding:12px;
text-align: center;
color: gray;
:first-of-type {
    text-transform: capitalize;
}
:not(:last-of-type) {
    border-right: 1px solid #EEEEEE;
    }
`