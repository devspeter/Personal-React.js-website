import React, { Component } from 'react';


export default class Footer extends Component{
    constructor(){
        super();
             
        var currentYear = new Date();
        var year = currentYear.getFullYear();

        this.state ={
            date: year
        };
    } 
    
    
    render(){
        return(
            <div className="fixed-bottom">
                <div className="footer">
                    <div class="container-fluid">
                            <div className="row">
                                <div className="col col-md-2">
                                        <div className="copyright">
                                            <p>{this.state.date} <span>©</span> Peter Csipkay</p>
                                        </div>   
                                </div>
                                <div className="col col-md-10">        
                                        <div className="social-icons">
                                            <div className="socialfooter">
                                            <a href="https://fb.me/devspeter" className="facebook" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook"></i></a>
                                            <a href="https://twitter.com/devspeter" className="twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/devspeter/" className="instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                            <a href="https://github.com/devspeter" className="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                            </div>
                                        </div>
                                </div>     
                            </div>
                    </div>                     
                </div> 
            </div>
        )
    }
}

