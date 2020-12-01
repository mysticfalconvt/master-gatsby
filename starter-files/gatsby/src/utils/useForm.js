import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // if its  a number convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      //   copy the existing values
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}
