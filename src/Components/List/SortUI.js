import React from 'react';
import { Button } from 'semantic-ui-react'

const SortUI = (props) => (
    <div>
        <Button style={{margin: '10px'}} onClick={() => props.handleSort(0)}>Sort A-Z</Button>
        <Button style={{margin: '10px'}} onClick={() => props.handleSort(1)}>Sort Z-A</Button>
    </div>
)

export default SortUI;