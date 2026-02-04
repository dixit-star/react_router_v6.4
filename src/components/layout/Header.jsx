import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>


            <header className="section-nav">
                <section>
                    <div id="navbar">
                        <div style={{ marginRight: "85pxx" }}>
                            <p>Free Shipping, 30-day return or refund guarantee.</p>
                        </div>
                        <div>
                           
                                <NavLink to="# ">SIGN-UP</NavLink>
                            <NavLink to="# ">SIGN-IN</NavLink>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="navbar2">
                        <div>
                            <img height="28px" src="./public/img/blackChauhan.jpeg" alt="" />
                        </div>
                        <div id="navbar2-info">
                            <div style={{ marginRight: "20px" }}>
                                <NavLink to="/">HOME</NavLink> 
                                <NavLink to="about">ABOUT</NavLink>
                                <NavLink to="service">MOVIES</NavLink>
                               <NavLink to="contact">CONTACT</NavLink>
                            </div>
                            {/* <a style={{ marginTop: "3px" }} href="#"><img height="29px"
                                src="https://vectorified.com/images/white-shopping-cart-icon-37.jpg" alt="" /></a>
                            <div id="navbar2-cart-img">

                                <h2 id="navbar2-info-counter">0</h2>


                            </div> */}
                        </div>


                    </div>

                </section>

            </header>
        </>
    )
}