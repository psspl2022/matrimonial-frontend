import Upgradebanner from "./Upgradebanner";
import PaginationBar from "./PaginationBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SearchFilters from "../SearchFilters";
import React from "react";
import { useState, useEffect, Suspense, memo, } from "react";
import Usercard from "./Usercard";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";
import Topcat from "./Topcat";
export function Showdata(props) {
    const loding = () => {
        return (
            <div
                className="desired_section"
                style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    columnGap: "20px",
                }}
            >
                <ProfileSkeleton />
                <ProfileSkeleton />
                <ProfileSkeleton />
                <ProfileSkeleton />
            </div>
        );
    };
    // const [grid, props.setGrid] = useState(false);
    return (
        <>
            <main className="browse-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <SearchFilters setParFilterData={props.setParFilterData} />
                        </div>
                        <div className="col-lg-8 col-md-7 mainpage">
                            <Upgradebanner />
                            <div className="main-tabs">
                                <Topcat title="Find Match" setGrid={props.setGrid} />
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab-1">
                                        <div
                                            className="row view-group"
                                            id="products"
                                            style={{
                                                minHeight: "800px",
                                                width: "100%",
                                            }}
                                        >
                                            {" "}
                                            {props.data && props.check > 0 &&
                                                props.data.map((item, index) => (
                                                    <Usercard key={index}
                                                        item={item}
                                                        showAllProfiles={props.showAllProfiles}
                                                        index={index}
                                                        name={item.name}
                                                        page={props.page}
                                                        className={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${props.grid == true ? "list-group-item1" : ""
                                                            }`}
                                                    />
                                                ))}
                                            {/* {props.check} */}
                                            {(props.data.length == 0 && props.check > 0 && loding())}
                                            {(props.check == 0) && (
                                                <LazyLoadImage
                                                    src="./empty.jpg"
                                                    style={{
                                                        objectFit: "contain",
                                                        width: "100%",
                                                        height: "400px",
                                                    }}
                                                />
                                            )}
                                        </div>

                                        <div className="row view-group" id="products">
                                            <div className="col-12">
                                                <div className="main-p-pagination">
                                                    {props.total > 1 && props.key1.length > 1 && props.key1 && (
                                                        <PaginationBar CurrentPage={props.CurrentPage} page={props.key1} setPage={props.setPage} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card use  */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default memo(Showdata);