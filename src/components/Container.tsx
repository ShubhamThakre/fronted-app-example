import React from 'react';
import styled from 'styled-components';

// Constants
const Wrapper = styled.div`
    padding: 0px 15px;
`;
type MyComponentProps = React.HTMLAttributes<Element>;

const Container = ({children}: MyComponentProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper> 
    )
}

export default Container
