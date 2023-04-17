import React, { useState } from 'react';

export default function Form() {
  const initialValue = {
    name: '',
    vehicle: '',
    problem: '',
  };

  const [values, setValues] = useState(initialValue);

  const hadleInputChange = (event) => {
    values[event.target.name] = event.target.value;
    setValues(values);
  };

  const hadleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={hadleFormSubmit}>
        <label htmlFor='input-name'>Nome do Cliente:
          <input
          type='text' name='name' id='input-name'
          placeholder='Informe o nome do cliente'
          onChange={hadleInputChange}
          required
          ></input>
        </label>
        <label htmlFor='input-vehicle'>Veículo:
          <input
            type='text' name='vehicle'
            id='input-vehicle'
            placeholder='Informe o modelo do veículo'
            onChange={hadleInputChange}
            required
          ></input>
        </label>
        <label htmlFor='input-problem'>Problema:
          <textarea
            type='text'
            name='problem'
            id='input-problem'
            placeholder='Informe o problema relatado'
            onChange={hadleInputChange}
            required></textarea>
        </label>
        <button
          type="submit"
          >
            Cadastrar Serviço
          </button>
      </form>
    </div>
  )
}