import Table from 'react-bootstrap/Table';

const TransactionHistory = ({items}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
      <Table style={{width: '500px'}} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({id, type, amount, currency}) => (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
          ))}
        </tbody>
      </Table>
    </div>  
  )
}

export default TransactionHistory
