import React from 'react';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      style={{
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: isActive ? '#ddd' : '#fff',
        borderBottom: isActive ? '2px solid blue' : '2px solid transparent',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
