
// const Pagination = ({ currentPage, totalPages, onPageChange}) => {
//     const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

//     return (
//         <div className="mt-4">
//         {pageNumbers.map((page) => (
//             <span
//                key={page}
//                className={`mx-1 cursor-pointer ${currentPage === page ? 'font-semibold' : ''}`}
//                onClick={() => onPageChange(page)}
//                > {page} </span>
//         ))}

//         </div>
//     )
// }
//  export default Pagination