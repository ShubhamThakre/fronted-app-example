import React from 'react'
import styled from 'styled-components'
import { CartDataProduct, TableProps } from '../types';

// Constants
const styles = {
    table: {
        width: '100%'
    },
    tr: {
        border: '1px solid #e1e1e1'
    }
};
const TableTd = styled.td`
    text-align: center;
    border: 1px solid #e1e1e1;
`;
export const Table = ({data}: TableProps) => {
    // Constants
    const TotalBillAmount = data?.reduce(function(sum, current) {
        return sum + Number(current.price);
      }, 0);
    return (
        <table style={styles.table}>
                <tbody>
                    <tr>
                        <TableTd>Image</TableTd>
                        <TableTd style={{maxWidth:'224px'}}>Product Name</TableTd>
                        <TableTd>Price</TableTd>
                        <TableTd>Quantity</TableTd>
                        <TableTd>Total</TableTd>
                    </tr>
                    {data && data.map(item =>{
                        return <tr key={JSON.stringify(item.productId)}>
                            <TableTd><img height={'50px'} width={'40px'} src={item.image}/></TableTd>
                            <TableTd style={{width:'224px'}}>{item.name}</TableTd>
                            <TableTd>${item.price}</TableTd>
                            <TableTd>{item.quantity}</TableTd>
                            <TableTd>${Number(item.price) * Number(item.quantity)}</TableTd>
                        </tr>;
                    })}
                    <tr style={styles.tr}>
                        <td style={{textAlign:'center', }}>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <TableTd>${TotalBillAmount}</TableTd>
                    </tr>
                </tbody>
        </table>
    )
}
