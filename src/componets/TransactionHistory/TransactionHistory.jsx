import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <Table style={{ width: "500px" }} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default TransactionHistory;
