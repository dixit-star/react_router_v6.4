import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer-container">

                    <div id="footer-main-container">
                        <div id="footer-box">
                            <div className="footer-contant-data">
                                <img style={{marginTop: "15px",width:"80%"}} src="./public/img/blueChuhan.jpeg" alt="" />
                                <p>Welcome to Rana Tech EcomStore, your ultimate destination for cutting <br />- edge gadgets.</p>
                                <img src="./public/img/cards.png" alt="" />
                            </div>
                            <div className="footer-contant-data">
                                <h4>SHOPPING</h4>
                                <NavLink tohref="#">Computer Store</NavLink>

                                <NavLink to="#">Laptop Store</NavLink>

                                <NavLink to="#">Accessories</NavLink>

                                <NavLink to="#"> Sales & Discount</NavLink>
                            </div>
                            <div className="footer-contant-data">
                                <h4>EXPERIENCE</h4>
                                <NavLink to="contact">Contact Us</NavLink>

                                <NavLink to="#">Payment Method</NavLink>

                               <NavLink to="#">Delivery</NavLink>

                                <NavLink to="#">Return and Exchange</NavLink>
                            </div>
                            <div className="footer-contant-data">
                                <h4>NEWSLETTER</h4>
                                <p style={{marginTop: "0px"}}>Be the first to now about new <br />arrivales &promos!</p>
                                <div id="inputfooter">
                                    <input style={{width: "12vw",backgroundColor:" rgb(16, 16, 16)"}} type="email" placeholder="@gamil.com"
                                        name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div id="made-by">
                            <div className="footericon">
                                <NavLink to="https://www.instagram.com/dixit_chauhan_987?igsh=M2tiajl6c3Z5emtm"><img src="./public/img/instagram-gradient-custom.png" alt="" /></NavLink>
                            </div>
                            <div className="footericon">
                                Designed & Developed by Dixit Chauhan
                            </div>
                            <div className="footericon">
                               <NavLink to="mailto:dixit991752@gmail.com"><img src="./public/img/icons8-gmail-48.png" alt="" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}