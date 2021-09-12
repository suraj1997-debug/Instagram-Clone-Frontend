import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) =>{
    return (
        <>
        <footer>
                    <div className="container">
                        <nav className="footer-nav">
                            <ul>
                                <li>
                                    <Link href="#">About us</Link>
                                </li>
                                <li>
                                    <Link href="#">Support</Link>
                                </li>
                                <li>
                                    <Link href="#">Press</Link>
                                </li>
                                <li>
                                    <Link href="#">Api</Link>
                                </li>
                                <li>
                                    <Link href="#">Jobs</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms</Link>
                                </li>
                                <li>
                                    <Link href="#">Directory</Link>
                                </li>
                                <li>
                                    <Link href="#">Profiles</Link>
                                </li>
                                <li>
                                    <Link href="#">Hashtags</Link>
                                </li>
                                <li>
                                    <Link href="#">Languages</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright-notice">
                            &copy 2019 Instagram
                        </div>
                    </div>
                </footer>

        </>
    )
}

export default Footer;