import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard2";
import axios from "axios";
import styled from "styled-components";

const NasaButton = styled.button`
    width: 100px;
    height: 30px;
    background: ${props => (props.primary ? "#fff" : "#2a2223")}
    color: ${props => (props.primary ? "#2a2223" : "#fff")};
    border: 0
    margin: 5px 10px;
    transition: 0.2s ease-in;
    border-radius: 25px;
    &:hover {
        color: Black;
        background: ${props => (props.primary ? "#2a2223" : "#fff")};
        color: ${props => (props.primary ? "#fff" : "#2a2223")}'
    }
`;

export default function NasaCardOne() {

    const [nasa, setNasa] = useState({});
    // const [explanation, setExplanation]= useState("");
    // const [hdurl, setHdurl]= useState("");
    // const [title, setTitle]= useState("");
    // const [copyright, setCopyright]= useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=dDLsGc2PXgIcXgWYABsWmhbhPE4qPrs3kOfUWpka`)
            // axios.get(`https://api.nasa.gov/planetary/apod?date=today`)
            // axios.get(`https://api.nasa.gov/planetary/apod?hd=False`)
            .then(response => {
                // const photo = response.data;
                const nasa = response.data
                console.log(`new data`, nasa);
                setNasa(nasa);
                // setDate(response.data.date);
                // setExplanation(response.data.explanation);
                // setHdurl(response.data.hdurl);
                // setTitle(response.data.title);
                // setCopyright(response.data.copyright);
            })
            .catch(error => {
                console.log("No data returned", error);
            });
    }, []);

    return (

        <div className="container">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Yesterday's Image</button>
                    <button className="dropdown-item" type="button">All Images</button>
                    <button className="dropdown-item" type="button">Tomorrow's Image</button>
                </div>
                <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About 
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Mission</button>
                    <button className="dropdown-item" type="button">Vission</button>
                    <button className="dropdown-item" type="button">History</button>
                </div>
                <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact Us
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Address</button>
                    <button className="dropdown-item" type="button">Phone</button>
                    <button className="dropdown-item" type="button">Email</button>
                </div>
                
            </div>
            <NasaCard
                hdurl={nasa.hdurl}
                title={nasa.title}
                date={nasa.date}
                explanation={nasa.explanation}
                copyright={nasa.copyright}
            />
            <NasaButton>See More</NasaButton>
        </div>
    );
}
