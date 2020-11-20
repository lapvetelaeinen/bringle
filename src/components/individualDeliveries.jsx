import React from 'react';

const IndividualDeliveries = (props) => {

    const deliveries = props.deliveries;

return (
    <table className="table">
    <thead>
        <tr>
            <th>Datum</th>
            <th>Containers</th>
            <th>Hyllor</th>
            <th>Skarvbitar</th>
        </tr>
    </thead>
    <tbody>
        { deliveries.map(delivery =>
        <tr key={ delivery.id }>
        <td>{ delivery.date.slice(0, 10) }</td>
        <td>{ parseInt(delivery.cPlus - delivery.cMinus) }</td>
        <td>{ parseInt(delivery.sPlus - delivery.sMinus) }</td>
        <td>{ parseInt(delivery.oPlus - delivery.oMinus) }</td>
        </tr>)}

    </tbody>
    </table>
)
};
 
export default IndividualDeliveries;

