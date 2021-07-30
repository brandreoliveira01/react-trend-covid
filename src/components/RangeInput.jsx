import React from 'react';

export default function Input({
  labelDescription = 'Descrição do label:',
  inputValue = 0,
  onInputChange = null,
  id = 'id_do_range_input',
  autoFocus = false,
  min,
  max,
  step,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className='flex flex-col mx-auto my-6 w-1/5'>
      <label className='text-lg mb-1' htmlFor={id}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        className='border p-1'
        type='range'
        min={min}
        max={max}
        step={step}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
