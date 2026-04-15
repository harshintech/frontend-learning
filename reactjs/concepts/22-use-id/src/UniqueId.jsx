import {useId} from 'react'

const UniqueId = () => {
    const id = useId();
    const id2 = useId();

  return (
    <div>
      <label htmlFor={`${id}`}>Email</label>
      <input type="email" id={`${id}`} />
      <br/>
      <label htmlFor={`${id2}`}>Password</label>
      <input type="password" id={`${id2}`} />
      <br/>



      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
      <br/>
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}-password`} />
      
    </div>
  )
}

export default UniqueId
