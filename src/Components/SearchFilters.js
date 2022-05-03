export default function SearchFilters() {
    return (
        <>
            <div class="browser-job-filters">
                <div class="filter-heading">
                    <div class="fh-left">
                        Filters
                    </div>
                    <div class="fh-right">
                        <a href="#">Clear All Filters</a>
                    </div>
                </div>
                <div class="fltr-group">
                    <div class="fltr-items-heading">
                        <div class="fltr-item-left">
                            <h6>Skills</h6>
                        </div>
                        <div class="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div class="ui fluid multiple search selection dropdown skills-search">
                        <input name="tags" type="hidden" value="" />
                        <i class="dropdown icon"></i>
                        <input class="search" autocomplete="off" tabindex="0" /><span class="sizer" ></span><div class="default text">Skills</div>
                        <div class="menu transition hidden" tabindex="-1">
                            <div class="item selected" data-value="angular">Angular</div>
                            <div class="item" data-value="css">CSS</div>
                            <div class="item" data-value="design">Graphic Design</div>
                            <div class="item" data-value="ember">Ember</div>
                            <div class="item" data-value="html">HTML</div>
                            <div class="item" data-value="ia">Information Architecture</div>
                            <div class="item" data-value="javascript">Javascript</div>
                            <div class="item" data-value="mech">Mechanical Engineering</div>
                            <div class="item" data-value="meteor">Meteor</div>
                            <div class="item" data-value="node">NodeJS</div>
                            <div class="item" data-value="plumbing">Plumbing</div>
                            <div class="item" data-value="python">Python</div>
                            <div class="item" data-value="rails">Rails</div>
                            <div class="item" data-value="react">React</div>
                            <div class="item" data-value="repair">Kitchen Repair</div>
                            <div class="item" data-value="ruby">Ruby</div>
                            <div class="item" data-value="ui">UI Design</div>
                            <div class="item" data-value="ux">User Experience</div>
                        </div>
                    </div>
                </div>
                <div class="fltr-group">
                    <div class="fltr-items-heading">
                        <div class="fltr-item-left">
                            <h6>Availability</h6>
                        </div>
                        <div class="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div class="ui form">
                        <div class="grouped fields">
                            <div class="field fltr-radio">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" checked="checked" />
                                    <label>Hourly</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label>Part Time</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="example2" />
                                    <label class="lst-label">Full Time</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fltr-group">
                    <div class="fltr-items-heading">
                        <div class="fltr-item-left">
                            <h6>Job Type</h6>
                        </div>
                        <div class="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div class="ui fluid search selection dropdown skills-search">
                        <input name="tags" type="hidden" value="" />
                        <i class="dropdown icon"></i>
                        <input class="search" autocomplete="off" tabindex="0" />
                        <span class="sizer" ></span>
                        <div class="default text">Select a job</div>
                        <div class="menu transition hidden" tabindex="-1">
                            <div class="item selected" data-value="Job1">Job 01</div>
                            <div class="item" data-value="Job2">Job 02</div>
                            <div class="item" data-value="Job3">Job 03</div>
                            <div class="item" data-value="Job4">Job 04</div>
                            <div class="item" data-value="Job5">Job 05</div>
                            <div class="item" data-value="Job6">Job 06</div>
                            <div class="item" data-value="Job7">Job 07</div>
                            <div class="item" data-value="Job8">Job 08</div>
                            <div class="item" data-value="Job9">Job 09</div>
                            <div class="item" data-value="Job10">Job 10</div>
                            <div class="item" data-value="Job11">Job 11</div>
                            <div class="item" data-value="Job12">Job 12</div>
                            <div class="item" data-value="Job13">Job 13</div>
                            <div class="item" data-value="Job14">Job 14</div>
                            <div class="item" data-value="Job15">Job 15</div>
                        </div>
                    </div>
                </div>
                <div class="fltr-group">
                    <div class="fltr-items-heading">
                        <div class="fltr-item-left">
                            <h6>Pay Rate <span>($)</span></h6>
                        </div>
                        <div class="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div class="filter-dd">
                        <div class="rg-slider">
                            <input class="rn-slider slider-input" type="hidden" value="5,500" />
                        </div>
                        <div class="rg-limit">
                            <h4>5</h4>
                            <h4>5000</h4>
                        </div>
                    </div>
                </div>
                <div class="fltr-group">
                    <div class="fltr-items-heading">
                        <div class="fltr-item-left">
                            <h6>Experience Level</h6>
                        </div>
                        <div class="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div class="ui fluid search selection dropdown skills-search">
                        <input name="tags" type="hidden" value="" />
                        <i class="dropdown icon"></i>
                        <input class="search" autocomplete="off" tabindex="0" />
                        <span class="sizer" ></span>
                        <div class="default text">Select Experience Level</div>
                        <div class="menu transition hidden" tabindex="-1">
                            <div class="item" data-value="level1">level 01</div>
                            <div class="item" data-value="level2">level 02</div>
                            <div class="item" data-value="level3">level 03</div>
                            <div class="item" data-value="level4">level 04</div>
                            <div class="item" data-value="level5">level 05</div>
                            <div class="item" data-value="level6">level 06</div>
                            <div class="item" data-value="level7">level 07</div>
                            <div class="item" data-value="level8">level 08</div>
                            <div class="item" data-value="level9">level 09</div>
                            <div class="item" data-value="level10">level 10</div>
                        </div>
                    </div>
                </div>
                <div class="fltr-group fltr-gend">
                    <div class="fltr-items-heading">
                        <div class="fltr-item-left">
                            <h6>Location</h6>
                        </div>
                        <div class="fltr-item-right">
                            <a href="#">Clear</a>
                        </div>
                    </div>
                    <div class="ui fluid search selection dropdown skills-search">
                        <input type="hidden" name="country" />
                        <div class="default text">Select Country</div>
                        <i class="dropdown icon"></i>
                        <div class="menu transition hidden" tabindex="-1">
                            <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
                            <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
                            <div class="item" data-value="al"><i class="al flag"></i>Albania</div>
                            <div class="item" data-value="dz"><i class="dz flag"></i>Algeria</div>
                            <div class="item" data-value="as"><i class="as flag"></i>American Samoa</div>
                            <div class="item" data-value="ad"><i class="ad flag"></i>Andorra</div>
                            <div class="item" data-value="ao"><i class="ao flag"></i>Angola</div>
                            <div class="item" data-value="ai"><i class="ai flag"></i>Anguilla</div>
                            <div class="item" data-value="ag"><i class="ag flag"></i>Antigua</div>
                            <div class="item" data-value="ar"><i class="ar flag"></i>Argentina</div>
                            <div class="item" data-value="am"><i class="am flag"></i>Armenia</div>
                        </div>
                    </div>
                </div>
                <div class="filter-button">
                    <button class="flr-btn">Search Now</button>
                </div>
            </div>

        </>
    );
}