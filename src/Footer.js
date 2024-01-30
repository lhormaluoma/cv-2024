import './Footer.css';

import linkedIn from './logos/287697_linkedin_icon.png';
import gitHub from './logos/287725_github_icon.png';

function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <a href="https://github.com/lhormaluoma" target="_blank" rel="noopener noreferrer">
                    <img src={gitHub} alt="GitHub" className="social-img"/>
                </a>
                <a href="https://www.linkedin.com/in/leevi-hormaluoma-85095019b/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn" className="social-img" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;