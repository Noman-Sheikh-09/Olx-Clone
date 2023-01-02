import React from 'react'
import { useState } from 'react'
export default function CommonHooks() {
    const [visible, setVisible] = useState(10);
    const loadMore=()=>{
setVisible(preValue=>preValue+10)
    }
  return [{
    visible,loadMore
  }]
}
