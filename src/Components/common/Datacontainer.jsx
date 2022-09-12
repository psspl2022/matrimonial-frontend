
import PaginationBar from "./PaginationBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";
import { memo } from "react";
import Usercard from "./Usercard";
export function Datacontainer(props) {
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
                                    filter={props.filter}
                                    item={item}
                                    showAllProfiles={props.showAllProfiles}
                                    index={index}
                                    name={item.name}
                                    page={props.page}
                                    className={props.className}
                                />
                            ))}
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
        </>
    );
}
export default memo(Datacontainer);