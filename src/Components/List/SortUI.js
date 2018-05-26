import React from 'react';

const SortUI = (props) => (
    <div>
        <button onClick={() => props.handleSort(0)}>Sort A-Z</button>
        <button onClick={() => props.handleSort(1)}>Sort Z-A</button>
    </div>
)

export default SortUI;