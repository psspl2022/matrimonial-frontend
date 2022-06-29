import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Likes(reg_id) {
  const token = window.sessionStorage.getItem("access_token");
  const history = useHistory();
  const [data, setData] = useState({});

  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (sessionStorage.hasOwnProperty("access_token")) {
        likes();
    }
  }, []);

  const likes = () => {
    axios
      .post(`${window.Url}api/likes`, reg_id, headers_param)
      .then(( response ) => {
          setData(response.data);
       
      });
  };


  
  return (
    <>
      <div className="tab-content pb-4" id="myTabContent" style={{background:"#fff"}}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row my-4">
                <div className="col-md-6 my-3">
                    <div className="row">
                    <span className="col-1">
                    <i className="fa fa-palette fa-2x" />
                </span>
                <span className="view_head_span1 col-11">
                { ( data['likes'] && (data['color'].length > 0   )) ? 
                    <> {data['color'].map((item)=>{
                        return (
                            item['name'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"} 
                </span><br />
                    </div>               
                </div>

                <div className="col-md-6 my-3">
                    <div className="row">
                    <span className="col-1">
                    <i className="fa fa-book fa-2x"/>
                </span>
                <span className="view_head_span1 col-11">
                { ( data['likes'] && (data['hobby'].length > 0   )) ? 
                    <> {data['hobby'].map((item)=>{
                        return (
                            item['hobby'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"} 
                </span>
                    </div>
             
                </div>

                <div className="col-md-6 my-3">
                    <div className="row">
                    <span className="col-1">
                    <i className="fa fa-palette fa-2x" />
                </span>
                <span className="view_head_span1 col-11">
                { ( data['likes'] && (data['interest'].length > 0   )) ? 
                    <> {data['interest'].map((item)=>{
                        return (
                            item['interest'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>
                    </div>
             
                </div>

                <div className="col-md-6 my-3">
                <div className="row">
                <span className="col-1">
                    <i className="fa fa-book fa-2x" />
                </span>
                <div className="col-11">
                <span className="view_head_span1 ">
                { ( data['likes'] && (data['book'].length > 0   )) ? 
                    <> {data['book'].map((item)=>{
                        return (
                            item['book_type'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>
                <span className="view_head_span1"><br />
                { ( data['likes'] && (data['likes'].fav_read != null   )) ? 
                    <>
                        {data['likes'].fav_read }
                    </> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>
                </div>

                <div className="col-md-6 my-3">
                <div className="row">
                <span className="col-1">
                    <i className="fa fa-palette fa-2x fa-2x" />
                </span>
                <span className="col-11 view_head_span1">
                { ( data['likes'] && (data['dress'].length > 0   )) ? 
                    <> {data['dress'].map((item)=>{
                        return (
                            item['dress_style'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>

                <div className="col-md-6 my-3">
                    <div className="row">
                <span className="col-1">
                    <i className="fa fa-headphones fa-2x" />
                </span>
                <span className="col-11 view_head_span1">


                { ( data['likes'] && (data['music'].length > 0   )) ? 
                    <> {data['music'].map((item)=>{
                        return (
                            item['music_type'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>


                <div className="col-md-6 my-3">
                <div className="row">
                <span className="col-1">
                    <i className="fa fa-utensils fa-2x" />
                </span>
                <div className="col-11">
                <span className="view_head_span1 ">
                { ( data['likes'] && (data['cuisine'].length > 0   )) ? 
                    <> {data['cuisine'].map((item)=>{
                        return (
                            item['name'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>

                <span className="view_head_span1"><br />
                { ( data['likes'] && (data['likes'].dish != null   )) ? 
                    <>
                        {data['likes'].dish }
                    </> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>
                </div>

                <div className="col-md-6 my-3">
                <div className="row">
                <span className="col-1">
                    <i className="fa fa-film fa-2x" />
                </span>
                <div className="col-11">
                <span className="view_head_span1 ">
                { ( data['likes'] && (data['movie_type'].length > 0   )) ? 
                    <> {data['movie_type'].map((item)=>{
                        return (
                            item['movietype'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>

                <span className="view_head_span1"><br />
                { ( data['likes'] && (data['likes'].movie != null   )) ? 
                    <>
                        {data['likes'].movie }
                    </> 
                    : "Not filled in"}  
                </span>

               
                </div>
               
                </div>
                </div>

                <div className="col-md-6 my-3">
                <div className="row">
                <span className="col-1 ">
                <i className="fa fa-tv fa-2x " />
                </span>
                <span className="view_head_span1 col-11 pl-4 ">
                
                { ( data['likes'] && (data['likes'].tv_show != null   )) ? 
                    <>
                        {data['likes'].tv_show }
                    </> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>


                <div className="col-md-6 my-3">
                <div className="row">
                <span className="col-1">
                    <i className="fa fa-futbol fa-2x" />
                </span>
                <span className="view_head_span1 col-11">
                { ( data['likes'] && (data['sport'].length > 0   )) ? 
                    <> {data['sport'].map((item)=>{
                        return (
                            item['sport_name'] + ', '
                        );
                    })
                        }</> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>

                <div className="col-md-6 my-3 ">
                <div className="row">
                <span className="col-1">
                    <i className="fa fa-plane fa-2x" />
                </span>
                <span className="view_head_span1 col-11">
                { ( data['likes'] && (data['likes'].vacation_destination != null   )) ? 
                    <>
                        {data['likes'].vacation_destination }
                    </> 
                    : "Not filled in"}  
                </span>
                </div>
                </div>
                  
              </div>
            </div>
          </div>
      <hr />   
        </div>  
      </div>   
    </>
  );
}
