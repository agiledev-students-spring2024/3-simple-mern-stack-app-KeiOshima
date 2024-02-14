import React, {useState, useEffect} from "react";
import './About.css';

const About = () =>{
    const [aboutInfo, setAboutInfom] =  useState({paragraph: [], image: '' });

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch(('http://localhost:5002/about'));
                const data = await response.json()
                setAboutInfom(data)
            }
            catch (err){
                console.error('error fetching about content' , err)

            }
            
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>About Me</h1>
            <p>{aboutInfo.paragraph}</p>
            <img className="profile" src={aboutInfo.image} alt="image of kei"/> 
            
        </div>
    )

};



export default About;