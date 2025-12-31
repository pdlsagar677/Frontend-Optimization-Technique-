import React from 'react'
import DebounceDemo from './Debouncing'
import ThrottleDemo from './Throttling'
const DandT = () => {
  return (
    <div>
      <DebounceDemo/>



      <br />

<ThrottleDemo/>

    </div>
  )
}

export default DandT


//  Difference Between Debounce & Throttle
// Feature	Debounce	Throttle
// Execution	After user stops triggering events	At most once per interval
// Use Case	Search input, resize, typeahead	Scroll, mouse move, infinite scroll
// Key Goal	Reduce unnecessary rapid calls	Limit frequent events