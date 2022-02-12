import React, {useState} from "react";
import Class from './components/Class/Class';

function Home(props) 
{
    const [value, setValue] = useState('');
    const [favouriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favouriteClasses.includes(value)){
            setClasses(favouriteClasses.concat(value));
            setValue('');
        }

        console.log(favouriteClasses);
    }

    return
    {
        <div>
            <h1>Hello World!</h1>
            <form onSubmit={handleSubmit}>
                <label>Add Favorite Class</label>
                <input type="text" value={value} onChange={handleChange}></input>
                <button type="submit">Add Class</button>
            </form>

            <div>
                {favouriteClasses.map((favClass)=>
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
        </div>
    }
}

export default Home;