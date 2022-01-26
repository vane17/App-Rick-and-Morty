import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';


const Pagination = ({setPageNumber, pageNumber, info}) => {
    return (

        <ReactPaginate 
            pageCount={info?.pages} 
            className="pagination"
            nextLabel="Next"
            nextClassName="buttons"
            previousLabel="Prev"
            previousClassName="buttons"
            pageClassName="item"
            pageLinkClassName='link'
            onPageChange={(data) => {setPageNumber(data.selected+1)}}
            activeClassName="active"
        />
    );
};

export default Pagination;