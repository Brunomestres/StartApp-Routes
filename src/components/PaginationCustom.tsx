
export function PaginationCustom(props:any) {
  const pageNumber:number[] = [];
  for(let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++){
    pageNumber.push(i)
  }
  return (
    <div style={{ marginLeft: '40%'}}>
      <ul className="pagination">
        {pageNumber.map(number => (
          <li className="page-item" key={number}>
            <a onClick={() => props.paginate(number)} href={`/page/${number}`} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
