import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Center from 'react-center';

export default function RecentPurchases(props) {
  return (
    <div>
      <Table>
        <TableHeader
          fixedHeader={true}
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>Purchase</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>Wilson Evolution Basketball</TableRowColumn>
            <TableRowColumn>$52.49</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>"Meditations" by Marcus Aurelius</TableRowColumn>
            <TableRowColumn>$14.99</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Acoustic Guitar</TableRowColumn>
            <TableRowColumn>$239.99</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Record Player</TableRowColumn>
            <TableRowColumn>$135.69.</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Takeout Food</TableRowColumn>
            <TableRowColumn>$18.99</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Monthly Gym Membership</TableRowColumn>
            <TableRowColumn>$10.99</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
