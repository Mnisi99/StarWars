import React from "react";

class Footer extends React.Component {

    render() {
        return <>
                    <footer className="container-fluid bg-dark text-white footer-cont mt-5 p-4">
                        <div className="w-25">
                            <h4>MovieApp</h4>
                            
                        </div>
                        <div className="w-25 h-100">
                            <ul>
                                <li><h5>Contact Details</h5></li>
                                <li>asemahleasemahle849@gmail.com</li>
                                <li>064-9388-268 / 067-3463-533</li>
                            </ul>
                        </div>
                        <div className="w-25">
                            <ul>
                                <li>Check Jobs</li>
                                <li>News</li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </footer> 
                </>
    }
}

export default Footer;