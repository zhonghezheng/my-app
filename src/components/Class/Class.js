import './Class.css'; 
import React, {useState, useEffect} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';

function Class(props) {
    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url+props.name);
            const data = await response.json();
            console.log(data);
            setClassInfo(data);
        }
        fetchData();
    }, [props.name]);
    let info;
    console.log(classInfo)
    if(classInfo.id){
        info = <div className="information">
        <p>{props.name}</p>
        <p> {classInfo.title} </p>
        <p>{classInfo.department}</p>
        <p>{classInfo.description}</p>
        </div>
    }

    else if (classInfo.error){
        info = <p>Class Not Found</p>
    }

    else{
        info = <p>Loading...</p>
    }
   


    return (
        <div><br></br>{info}</div>
        
    )
}

export default Class;