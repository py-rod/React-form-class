import { Component } from "react";
import image from "../../assets/images/defaul_profile.jpg"
import "../../assets/css/Datos.css"
import arrow from "../../assets/icons/arrow.svg"

export default class Datos extends Component{
    constructor(props){
        super(props);
    }


    OcultarCard=()=>{
        this.props.view()
    }

    render(){
        return(
            <>
            <div className="content-user-card">
                <img src={image} alt="Default_User_Pick"/>
                <div className="content-user-data">
                    <p>Username: {this.props.data_user.username}</p>
                    <p>Email: {this.props.data_user.email}</p>
                    <p>Password: {this.props.data_user.password}</p>
                    <p>Confirm-Passoword: {this.props.data_user.re_password}</p>
                </div>

                <button className="button-back" onClick={this.OcultarCard}>Back <span><img src={arrow}/></span></button>
            </div>
            </>
        )
    }
}

