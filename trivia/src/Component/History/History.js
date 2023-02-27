import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
    const historylist = useSelector((state) => state.user.historylist)
    
    var showhistory;
    if (historylist == null) {
        showhistory = <div>null</div>
    } else {
        showhistory = historylist.map((value, text) => <div key={value}>{ text }</div>)
    }

    return (
    <div> { showhistory }</div>
  )
}

export default History