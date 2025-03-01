import React from 'react';

function DropdownBox({ options, placeholder, setSelectedState }) {
  const handleChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div style={styles.container}>
      <select
        onChange={handleChange}
        style={styles.selectBox}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  selectBox: {
    padding: '8px 16px',
    fontSize: '1rem',
    border: '1px solid #CCC',
    borderRadius: '5px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    width: '200px',
  },
};

export default DropdownBox;
