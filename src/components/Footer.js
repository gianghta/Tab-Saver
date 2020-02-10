import React from 'react';

const URL = 'https://github.com/gianghta/Tab-Saver';

const Footer = ({ clickLink }) => {
    const handleLinkClick = e => {
        if (e.target === e.currentTarget) {
            clickLink(URL);
        }
    }

    return (
        <footer className="footer page-footer font-small blue">

        <div className="footer-copyright text-center py-3">Copyright &copy; Giang Ta 2020: 
            <a onClick={handleLinkClick} class="git-link" href={URL} >
                &ensp;
                <i class="fab fa-github"></i>
                Source
            </a>
        </div>

        </footer>
    );
};

export default Footer;