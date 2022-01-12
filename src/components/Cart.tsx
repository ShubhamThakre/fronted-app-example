import { Drawer } from 'antd'
import React from 'react'

type Props = {
    isCartOpen: boolean,
    setIsCartOpen: (cart: boolean) => void
}

const Cart = ({isCartOpen, setIsCartOpen} : Props) => {
    return (
        <div>
            <Drawer
                title="Drawer with extra actions"
                placement={'right'}
                width={500}
                onClose={()=>setIsCartOpen(false)}
                visible={isCartOpen}
                // extra={
                // //   <Space>
                // //     <Button onClick={setIsCartOpen(false)}>Cancel</Button>
                // //     <Button type="primary" onClick={onClose}>
                // //       OK
                // //     </Button>
                // //   </Space>
                // }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default Cart
