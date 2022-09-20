
function pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div style={{display:'flex', gap:'4px'}}>
      {gotoPrevPage && <div><button onClick={gotoPrevPage}>Prev</button> <span>|</span></div> }
      {gotoNextPage && <div><button onClick={gotoNextPage}>Next</button></div>}
    </div>
  )
}

export default pagination