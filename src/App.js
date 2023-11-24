import React, {useState} from "react";
import './App.css';
import PerfumeryList from "./components/perfumery/index";
import ThemeBtn from "./components/button/button";

const perfumery = [
    {
        id: 0,
        name: 'Gucci',
        body: ''
    },
    {
        id: 1,
        name: 'Givenchy',
        body: ''
    },
    {
        id: 2,
        name: 'Versace',
        body: ''
    }
];

function App() {
    const [inputVal, setInputVal] = useState('');
    const [perfumeryList, setPerfumeryList] = useState(perfumery);

    const handlePerfumery = (e)=>{
        setInputVal(e.target.value) ;
    }
    const handleAdd = ()=>{
        const newOdj = {
            id:Math.random()*20,name: inputVal
            }
            setPerfumeryList((perfumeryList)=>[...perfumeryList,newOdj])
        }
        const handelDelete = (id)=>{
            setPerfumeryList( perfumeryList.filter((item)=>(item.id !== id)))
        }

    return (
        <div className='perfumeryItem'>
            <label>
                <input type='text'
                       placeholder='Enter'
                       className= 'perfumeryName'
                       onChange= {handlePerfumery}
                />
            </label>
            <button className= 'button' onClick={handleAdd}>Add</button>
            <ThemeBtn />
            {perfumeryList.map((item, id) => {
                return (
                    <PerfumeryList
                        key={item.id}
                        name={item.name}
                        price={item.body}
                        onClick = {()=> handelDelete(item.id)}
                    />
                )
            })}
        </div>
    )
}

export default App;
