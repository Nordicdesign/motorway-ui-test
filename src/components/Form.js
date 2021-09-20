import React, { useState } from 'react';

const Form = () => {
  const [ formError, setFormError] = useState(false)
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    dob: "",
    favColour: "",
    salary: "60000"
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const validateForm = async () => {
    // reset form error state before checking
    setFormError(false)
    let anyEmptyField = false
    for (let value in formValue) {
      if (formValue[value] === "") {
        anyEmptyField = true
      }
    }
    anyEmptyField && setFormError(true)
  }

  const validateField = (e) => {
    (e.target.value === "") ? setFormError(true) : setFormError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if no errors are present, sent the form
    validateForm().then(
      !formError && console.log("// Form sent:", formValue)
    )


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
                onBlur={validateField}
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
              onBlur={validateField}
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
              onBlur={validateField}
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
              onBlur={validateField}
            />
          </label>
          </li>
          <li>
          <label htmlFor="salary">Salary
            <span>£{formValue.salary}</span>
            <input
              type="range"
              name="salary"
              min="30000"
              max="100000"
              value={formValue.salary}
              onChange={handleChange}
            />
          </label>
          </li>
        </ul>
        { formError && <p className="form__error">All fields are required.</p> }
        <input
          type="submit"
          value="Send form"
          disabled={formError}
        />
      </form>
    </div>
  )
}

export default Form
