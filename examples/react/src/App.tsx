import React, { useState } from 'react'
import { Script } from '@vivel/dialogues'
import script from '../../script/introduction/script.json'

import '@vivel/dialogues/dist/style.css'

function App() {

  return (
    <div>
      <Script scripts={script.dialogues}/>
    </div>
  )
}

export default App
