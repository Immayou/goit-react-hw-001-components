import PropTypes from 'prop-types'; 
import { Table, TableHeading, TableItem, TableRow, TableRowHead } from "./TransactionHistory";

export const TransactionHistory = ({items}) => {
    return (
    <Table>
    <thead>
      <TableRowHead>
        <TableHeading>Type</TableHeading>
        <TableHeading>Amount</TableHeading>
        <TableHeading>Currency</TableHeading>
      </TableRowHead>
    </thead>
  
    <tbody>
        {items.map(({id, type, amount, currency}) => (
        <TableRow key ={id} lastRow={id}>
          <TableItem lastItem={id}>{type}</TableItem>
          <TableItem>{amount}</TableItem>
          <TableItem>{currency}</TableItem>
        </TableRow>
        ))
    }
    </tbody>
  </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
          }),
    )
    
};
