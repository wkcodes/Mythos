import React from "react"
import Toast from "react-bootstrap/Toast"

const ErrToast = () => {

    <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '100px',
  }}
>
  <Toast
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
  >
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Our kingdoms may be at war.</strong>
    </Toast.Header>
    <Toast.Body>It appears you do not yet belong to the realm young squire. 
      Please register or use a name we have within our records</Toast.Body>
  </Toast>
</div>

}

export default ErrToast
