import Upgradebanner from "./Upgradebanner";
import SearchFilters from "../SearchFilters";
import React from "react";
import { memo } from "react";
import Topcat from "./Topcat";
import Datacontainer from "./Datacontainer";
export function Showdata(props) {

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

                                {!props.msg && <Datacontainer className={props.className} title={props.title} data={props.data} key1={props.key1} check={props.check} showAllProfiles={props.showAllProfiles} page={props.page} grid={props.grid} CurrentPage={props.CurrentPage} total={props.total} setPage={props.setPage} />}
                                {props.msg && <h1 className="text-center" style={{ margin: "auto", minHeight: "200px" }}>{props.msg}</h1>}
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