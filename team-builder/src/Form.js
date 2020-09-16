import React from 'react'

export default function Form(props){
   const {values, update, submit} = props

   const onChange = evt => {
       const {name, value} = evt.target
       update(name,value)
   }

   const onSubmit = evt => {
       evt.preventDefault()
       submit()
   }

return (
    <form className="form container" onSubmit={onSubmit}>
        <div className='form-group input'>
            <label>Username
                <input
                    type='text'
                    name='username'
                    onChange={onChange}
                    value={values.username}
                    placeholder='Enter a username'
                    maxLength='30'
                />
            </label>
            <label>Email
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='Enter your email'
                    maxLength='50' 
                />
            </label>
            <label>Role 
                <select name='role' value={values.role} onChange={onChange}>
                    <option value="">-- Select Role --</option>
                    <option value="designer">Designer</option>
                    <option value="frontEng">Front-End Engineer</option>
                    <option value="backEng">Back-End Engineer</option>
                </select>
            </label>

            <div className='submit'>
                <button disabled={!values.email || !values.username || !values.role}>Submit</button>
            </div>
        </div>
    </form>
)
}