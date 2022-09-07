const ProfileSkeleton = (props) => {
    return (

        <div className={props.style ? "card mx-3 mt-3 " + props.style : "card mx-3 mt-3 props.style"} >
            <div className="header">
                <div className="img"></div>
                <div className="details">
                    <span className="name"></span>
                    <span className="about"></span>
                </div>
            </div>
            <div className="description">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-2"></div>
                <div className="line line-1"></div>
                <div className="line line-3"></div>
            </div>
            <div className="btns">
                <div className="btn btn-1"></div>
                <div className="btn btn-2"></div>
            </div>
        </div>
    );
}
export default ProfileSkeleton;