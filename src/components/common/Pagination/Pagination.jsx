import React from "react";
import classnames from 'classnames';
import style from './Pagination.module.css';

const Pagination = ({
    updateData,
    count,
    currentPage,
    pages
}) => {

    let paginationStart = 0;
    let paginationEnd = 11;
    if (currentPage > 6) {
        paginationStart = currentPage - 6;
        paginationEnd = currentPage + 5;
    }

    let onChangeCurrentPage = (pageNum) => {
        updateData(count, pageNum);
    }

    return (
        <div className={style.pagination}>
            <ul className={style.paginationList}>
                <li 
                    className={classnames(style.paginationListItem, {[style.hidden]: currentPage === 1})}
                    onClick={ () => {
                        onChangeCurrentPage(1);
                    }}
                >
                    ⋘
                </li>
                {   
                    pages.slice(paginationStart, paginationEnd).map( page => (
                        <li 
                            className={style.paginationListItem + ' ' + (currentPage === page ? style.paginationListItemCurrent : '')}
                            onClick={ () => {
                                onChangeCurrentPage(page);
                            }}
                        >
                            {page}
                        </li>
                    ))
                }
                <li 
                    className={style.paginationListItem + ' ' + (currentPage === pages.length ? style.hidden : '')}
                    onClick={ () => {
                        onChangeCurrentPage(pages.length);
                    }}
                >
                    ⋙
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
