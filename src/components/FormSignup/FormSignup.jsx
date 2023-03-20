import { Component } from "react";
import "../../assets/css/FormSignup.css"
import Datos from "../Datos/Datos"




export default class FormSignup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            re_password: "",
            view: false
        }
    }


    handleChanel=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    MostrarCard=()=>{
        this.setState({view: true})
    }

    OcultarCard=()=>{

        this.setState({
            username: "",
            email: "",
            password: "",
            re_password: "",
            view: false
        })
    }


    SubmitButton=(element)=>{
        element.preventDefault();
        if (this.state.username !== '' && this.state.email !== '' && this.state.password !== '' && this.state.re_password !== '') {
            this.MostrarCard();
        }
    }



    render(){
        if (this.state.view == false){
            return(
                <>
                    <section className="section-1">
                        <form className="form-signup">
                            <div className="content-items1 content-items">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" required id="floatingInput" placeholder="Username" name="username" onChange={this.handleChanel}/>
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" required id="floatingInput" name="email" placeholder="Email" onChange={this.handleChanel}/>
                                    <label for="floatingInput">Email</label>
                                </div>
                            </div>
    
                            <div className="content-items2 content-items">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" required id="floatingPassword" name="password" placeholder="Password" onChange={this.handleChanel}/>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" required id="floatingPassword" name="re_password" placeholder="Confirm password" onChange={this.handleChanel}/>
                                    <label for="floatingPassword">Confirm Password</label>
                                </div>
                            </div>
    
                            <div className="content-items3">
                                <div className="form-check">
                                    <input className="form-check-input check-box-terms" type="checkbox" value="" id="flexCheckIndeterminate"/>
                                    <label className="form-check-label" for="flexCheckIndeterminate">
                                        Accept terms of use
                                    </label>
                                </div>
                            </div>
                            <button className="button-signup" onClick={this.SubmitButton}>Register</button>
                        </form>
                    </section>
                </>
            )
        }
        else{
            return(
                <>
                    <Datos data_user = {this.state} view = {this.OcultarCard}  />
                </>
            )
        }
    }
}