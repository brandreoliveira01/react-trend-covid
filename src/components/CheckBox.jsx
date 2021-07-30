import React from 'react';

export default function CheckBox({
  id = 'id_do_checkbox',
  onCheckboxChange = null,
  autoFocus = false,
  labelDescription = 'Descrição do label:',
  checkboxValue = false,
}) {
  function handleCheckboxChange({ currentTarget }) {
    if (onCheckboxChange) {
      const newValue = currentTarget.checked;
      onCheckboxChange(newValue);
    }
  }

  return (
    <div className='flex flex-row mx-auto my-6 w-1/5'>
      <input
        autoFocus={autoFocus}
        id={id}
        className='border p-1 mt-2'
        type='checkbox'
        checked={checkboxValue}
        onChange={handleCheckboxChange}
      />
      <label className='text-lg ml-4' htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}
