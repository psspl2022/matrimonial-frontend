import { useState } from "react";

export default function SearchFilters() {
    const[ height1, setheight1] = useState(false);
    return (
        <>
            <div className="browser-job-filters">
                <div className="filter-heading">
                    <div className="fh-left">
                        Filters
                    </div>
                    <div className="fh-right">
                        <a href="#">Clear All Filters</a>
                    </div>
                </div>
                <div className="fltr-group">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Height</h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className={`ui fluid search selection dropdown skills-search ${ height1 ? 'active visible' : '' }`} onClick={()=>setheight1(!height1)}>
                        <input name="tags" type="hidden" value="" />
                        <i className="dropdown icon"></i>
                        <input className="search" autoComplete="off" tabIndex="0" />
                        <span className="sizer" ></span>
                        <div className="default text">Select Height</div>
                        <div className={`menu transition ${ height1 ? 'visible' : 'hidden' }`} tabIndex="-1">
                            <div className="item selected" data-value="Job1">4' 0" (1.34 mts)</div>
                            <div className="item" data-value="Job2">4' 1" (1.34 mts)</div>
                            <div className="item" data-value="Job3">4' 2" (1.34 mts)</div>
                            <div className="item" data-value="Job4">4' 3" (1.34 mts)</div>
                            <div className="item" data-value="Job5">4' 4" (1.34 mts)</div>
                            <div className="item" data-value="Job6">4' 5" (1.34 mts)</div>
                            <div className="item" data-value="Job7">4' 6" (1.34 mts)</div>
                        </div>
                    </div>
                </div>
                <div className="fltr-group">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Skills</h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className="ui fluid multiple search selection dropdown skills-search">
                        <input name="tags" type="hidden" value="" />
                        <i className="dropdown icon"></i>
                        <input className="search" autoComplete="off" tabIndex="0" /><span className="sizer" ></span><div className="default text">Skills</div>
                        <div className="menu transition hidden" tabIndex="-1">
                            <div className="item selected" data-value="angular">Angular</div>
                            <div className="item" data-value="css">CSS</div>
                            <div className="item" data-value="design">Graphic Design</div>
                            <div className="item" data-value="ember">Ember</div>
                            <div className="item" data-value="html">HTML</div>
                            <div className="item" data-value="ia">Information Architecture</div>
                            <div className="item" data-value="javascript">Javascript</div>
                            <div className="item" data-value="mech">Mechanical Engineering</div>
                            <div className="item" data-value="meteor">Meteor</div>
                            <div className="item" data-value="node">NodeJS</div>
                            <div className="item" data-value="plumbing">Plumbing</div>
                            <div className="item" data-value="python">Python</div>
                            <div className="item" data-value="rails">Rails</div>
                            <div className="item" data-value="react">React</div>
                            <div className="item" data-value="repair">Kitchen Repair</div>
                            <div className="item" data-value="ruby">Ruby</div>
                            <div className="item" data-value="ui">UI Design</div>
                            <div className="item" data-value="ux">User Experience</div>
                        </div>
                    </div>
                </div>
                <div className="fltr-group">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Availability</h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className="ui form">
                        <div className="grouped fields">
                            <div className="field fltr-radio">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" checked="checked" />
                                    <label>Hourly</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>Part Time</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label className="lst-label">Full Time</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fltr-group">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Job Type</h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className="ui fluid search selection dropdown skills-search">
                        <input name="tags" type="hidden" value="" />
                        <i className="dropdown icon"></i>
                        <input className="search" autoComplete="off" tabIndex="0" />
                        <span className="sizer" ></span>
                        <div className="default text">Select a job</div>
                        <div className="menu transition hidden" tabIndex="-1">
                            <div className="item selected" data-value="Job1">Job 01</div>
                            <div className="item" data-value="Job2">Job 02</div>
                            <div className="item" data-value="Job3">Job 03</div>
                            <div className="item" data-value="Job4">Job 04</div>
                            <div className="item" data-value="Job5">Job 05</div>
                            <div className="item" data-value="Job6">Job 06</div>
                            <div className="item" data-value="Job7">Job 07</div>
                            <div className="item" data-value="Job8">Job 08</div>
                            <div className="item" data-value="Job9">Job 09</div>
                            <div className="item" data-value="Job10">Job 10</div>
                            <div className="item" data-value="Job11">Job 11</div>
                            <div className="item" data-value="Job12">Job 12</div>
                            <div className="item" data-value="Job13">Job 13</div>
                            <div className="item" data-value="Job14">Job 14</div>
                            <div className="item" data-value="Job15">Job 15</div>
                        </div>
                    </div>
                </div>
                <div className="fltr-group">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Pay Rate <span>($)</span></h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className="filter-dd">
                        <div className="rg-slider">
                            <input className="rn-slider slider-input" type="hidden" value="5,500" />
                        </div>
                        <div className="rg-limit">
                            <h4>5</h4>
                            <h4>5000</h4>
                        </div>
                    </div>
                </div>
                <div className="fltr-group">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Experience Level</h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className="ui fluid search selection dropdown skills-search">
                        <input name="tags" type="hidden" value="" />
                        <i className="dropdown icon"></i>
                        <input className="search" autoComplete="off" tabIndex="0" />
                        <span className="sizer" ></span>
                        <div className="default text">Select Experience Level</div>
                        <div className="menu transition hidden" tabIndex="-1">
                            <div className="item" data-value="level1">level 01</div>
                            <div className="item" data-value="level2">level 02</div>
                            <div className="item" data-value="level3">level 03</div>
                            <div className="item" data-value="level4">level 04</div>
                            <div className="item" data-value="level5">level 05</div>
                            <div className="item" data-value="level6">level 06</div>
                            <div className="item" data-value="level7">level 07</div>
                            <div className="item" data-value="level8">level 08</div>
                            <div className="item" data-value="level9">level 09</div>
                            <div className="item" data-value="level10">level 10</div>
                        </div>
                    </div>
                </div>
                <div className="fltr-group fltr-gend">
                    <div className="fltr-items-heading">
                        <div className="fltr-item-left">
                            <h6>Location</h6>
                        </div>
                        <div className="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div className="ui fluid search selection dropdown skills-search">
                        <input type="hidden" name="country" />
                        <div className="default text">Select Country</div>
                        <i className="dropdown icon"></i>
                        <div className="menu transition hidden" tabIndex="-1">
                            <div className="item" data-value="af"><i className="af flag"></i>Afghanistan</div>
                            <div className="item" data-value="ax"><i className="ax flag"></i>Aland Islands</div>
                            <div className="item" data-value="al"><i className="al flag"></i>Albania</div>
                            <div className="item" data-value="dz"><i className="dz flag"></i>Algeria</div>
                            <div className="item" data-value="as"><i className="as flag"></i>American Samoa</div>
                            <div className="item" data-value="ad"><i className="ad flag"></i>Andorra</div>
                            <div className="item" data-value="ao"><i className="ao flag"></i>Angola</div>
                            <div className="item" data-value="ai"><i className="ai flag"></i>Anguilla</div>
                            <div className="item" data-value="ag"><i className="ag flag"></i>Antigua</div>
                            <div className="item" data-value="ar"><i className="ar flag"></i>Argentina</div>
                            <div className="item" data-value="am"><i className="am flag"></i>Armenia</div>
                        </div>
                    </div>
                </div>
                <div className="filter-button">
                    <button className="flr-btn">Search Now</button>
                </div>
            </div>

        </>
    );
}