import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard2";
import axios from "axios";
import styled from "styled-components";
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
