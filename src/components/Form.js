import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Form = () => {

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    dob: "",
    favColour: "",
    salary: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("// Form sent");
    console.log("Form data:", formValue);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name
              <input
                type="text"
                name="name"
                value={formValue.name}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
          <label htmlFor="email">Email
            <input
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </label>
          </li>
          <li>
          <label htmlFor="dob">Date of birth
            <input
              type="date"
              name="dob"
              value={formValue.dob}
              onChange={handleChange}
            />
          </label>
          </li>
          <li>
          <label htmlFor="favColour">Favourite colour
            <input
              type="text"
              name="favColour"
              value={formValue.favColour}
              onChange={handleChange}
            />
          </label>
          </li>
          <li>
          <label htmlFor="salary">Salary
            <Slider />
          </label>
          </li>
        </ul>
        <input type="submit" value="Send form" />
      </form>
    </div>
  )
}

export default Form
