import React from 'react'

function SaleChart({sales}) {
  console.log(sales)
  return (
    <>
      {sales.map((sale, index)=> (<div key={index}><small>{index}: {sale["Customer Name"]}</small></div>))}
    </>
  )
}

export default SaleChart
