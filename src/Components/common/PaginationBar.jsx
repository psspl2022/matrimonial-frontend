import React, { useState, memo, Suspense } from "react";
export function PaginationBar(props) {
    // const [grid, props.setGrid] = useState(false);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a
                        className={
                            props.page[0] == props.page[props.CurrentPage]
                                ? "page-link disable_link"
                                : "page-link"
                        }
                        aria-label="Previous"
                        onClick={(e) => {
                            props.page[0] != props.page[props.CurrentPage] &&
                                props.setPage(props.page[props.CurrentPage - 1]);
                        }}
                        style={{
                            cursor:
                                props.page[0] == props.page[props.CurrentPage]
                                    ? "not-allowed"
                                    : "pointer",
                        }}
                    >
                        PREV
                    </a>
                </li>
                {props.page.length > 0 &&
                    props.page &&
                    props.page.map((item, index) => (
                        <li className="page-item" key={index}>
                            <a
                                style={{
                                    cursor: "pointer",
                                }}
                                className={
                                    props.page[props.CurrentPage] == item
                                        ? "page-link active"
                                        : "page-link"
                                }
                                onClick={(e) => {
                                    props.setPage(item);
                                }}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                <li className="page-item">
                    <a
                        className={
                            props.page[props.page.length - 1] ==
                                props.page[props.CurrentPage]
                                ? "page-link disable_link"
                                : "page-link"
                        }
                        aria-label="Previous"
                        onClick={(e) => {
                            props.page[props.page.length - 1] !=
                                props.page[props.CurrentPage] &&
                                props.setPage(props.page[props.CurrentPage + 1]);
                        }}
                        style={{
                            cursor:
                                props.page[props.page.length - 1] ==
                                    props.page[props.CurrentPage]
                                    ? "not-allowed"
                                    : "pointer",
                        }}
                    >
                        NEXT
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default memo(PaginationBar);
