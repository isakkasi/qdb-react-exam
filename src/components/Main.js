import { Footer } from "./main/Footer"
import { Header } from "./main/Header";
import {AllQuestions} from "./main/AllQuestions"
import './Main.css'
import { QuestionForm } from "./main/QuestionForm";
import { Login } from "./user/Login";
import { Register } from "./user/Register";


export const Main = (props) => {


    

    return (
        <main>
        <div className="w3-main pr-main" id="main" >
        
            {/* <Header />
            
            <AllQuestions />

            <QuestionForm isCreate={true} /> */}

            {/* <Login /> */}
            <Register />



            
<div className="pr-footer">

            {/* <Footer /> */}
</div>

            
        </div>
    </main>
    );
}
/*   <Boxes />
import { Feeds } from "./main/Feeds"
import { Boxes } from "./main/Boxes";
import { Stats } from "./main/Stats";
import { Users } from "./main/Users";
import { Comments } from "./main/Comments";
           <Feeds />
           <hr />
           <Stats />
           <hr />

            <div className="w3-container">
                <h5>Countries</h5>
                <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                    <tbody>
                        <tr>
                            <td>United States</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <td>UK</td>
                            <td>15.7%</td>
                        </tr>
                        <tr>
                            <td>Russia</td>
                            <td>5.6%</td>
                        </tr>
                        <tr>
                            <td>Spain</td>
                            <td>2.1%</td>
                        </tr>
                        <tr>
                            <td>India</td>
                            <td>1.9%</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>1.5%</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <button className="w3-button w3-dark-grey">
                    More Countries &nbsp;<i className="fa fa-arrow-right"></i>
                </button>
            </div>
            <hr />
            <Users />
            <hr />

            <Comments />
            <br /> */