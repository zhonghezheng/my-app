import './Class.css'; 
import React, {useState, useEffect} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';

function ClassGraphQL(props) {
    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/graphql"
    useEffect(() => {
        const fetchData = async() => {
            const query = `
                query{
                    course(id:"${props.name}"){
                        title
                        department_name
                        description
                    }
                }    
            `
            const response = await fetch(url, {
                method:"POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name]);
    let info;
    console.log(classInfo)

    if(classInfo){
        info = <div className="information">
        <p>{props.name}</p>
        <p> {classInfo.title} </p>
        <p>{classInfo.department_name}</p>
        <p>{classInfo.description}</p>
        </div>
    }

    else if (classInfo == null){
        info = <p>Class Not Found</p>
    }

    else{
        info = <p>Loading...</p>
    }
   

    return (
        <div><br></br>{info}</div>
        
    )
}

export default ClassGraphQL;