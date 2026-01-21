import React from "react";
import Button from "./Button";
import GitHubLogo from "../Assets/github.svg";
import { Link } from "react-router-dom";


const Footer = () => {
    const elements = [
        {Display: 
            <a className="flex text-sm" href="https://github.com/Cole-deBoer/Click-Fox">
                <img className="scale-75" src={GitHubLogo}/>github
            </a>            
        , Route: ''},
        {Display: 'Privacy Policy', Route: '/privacy-policy'},
        {Display: 'Terms & Conditions', Route: '/terms-and-conditions'},
        {Display: 'Disclaimer', Route: '/disclaimer'}
    ]
    return (
        <footer className="flex w-full justify-evenly cursor-pointer select-none">
            {elements.map((element, key) => (
                <Link key={key} to={element.Route}>
                    <Button content={
                        <>
                            {element.Display}
                        </>
                    }/>
                </Link>
            ))}
        </footer>
    );
} 

export default Footer;