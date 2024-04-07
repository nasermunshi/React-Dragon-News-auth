import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const {id}= useParams();
  return (
 <div>
 <Header></Header>
 <Navbar></Navbar>
   <div className="flex md:grid-cols-4 ">
    <div className="col-span-3">
   <h2 className="text-5xl mr-80">News Deatils</h2>
   <p>{id}</p>
   
    </div>
    <div>

    </div>
   <RightSideNav className="ml-52"></RightSideNav>
    </div>                                                        
 </div>
 );
};

export default News;