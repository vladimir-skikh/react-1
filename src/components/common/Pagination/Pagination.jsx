import React from "react";
import classnames from 'classnames';

const Pagination = (props) => {
    <div className={style.pagination}>
        <ul className={style.paginationList}>
            {props.pages.slice(paginationStart, paginationEnd).map((page) => (
                <li
                    className={classnames(
                        style.paginationListItem,
                        {[style.paginationListItemCurrent]: props.currentPage === page}
                    )}
                    onClick={() => {
                        onChangeCurrentPage(page);
                    }}
                >
                    {page}
                </li>
            ))}
        </ul>
    </div>;
};

export default Pagination;
