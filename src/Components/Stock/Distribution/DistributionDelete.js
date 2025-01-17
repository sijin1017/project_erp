import React from 'react';

const DistributionDelete = ({ handleDeleteClick, selectedItems }) => {
    return (
        <span>
            <button onClick={handleDeleteClick} disabled={selectedItems.length === 0}>삭제</button>
        </span>
    );
};

export default DistributionDelete; 