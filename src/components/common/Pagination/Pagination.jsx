import React from "react";

const Pagination = (props) => {
    <div className={style.pagination}>
        <ul className={style.paginationList}>
            {props.pages.slice(paginationStart, paginationEnd).map((page) => (
                <li
                    className={
                        style.paginationListItem +
                        " " +
                        (props.currentPage === page
                            ? style.paginationListItemCurrent
                            : "")
                    }
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
