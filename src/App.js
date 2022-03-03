
import React,{Component} from 'react';
import './App.css';
import Header from './Header';

class App extends Component{
  
  render(){  
    let subscribers=[
      { id:1,
        name:'Sravya',
        phone:'9845672398'      

      },
      { id:2,
        name:'Bhanu',
        phone:'9874521365'      

      },
      { id:3,
        name:'Lucky',
        phone:'9854624125'      

      },
      { id:4,
        name:'Krish',
        phone:'9856324718'      

      },
      { id:5,
        name:'Ram',
        phone:'9758324962'      

      },
    ]  
    return (
      <div>
        <Header/>
        <div className='component-body-container'>
      <button className='custom-btn add-btn'>Add</button>
      <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
    </div>
    {
      subscribers.map(sub =>{
        return <div key={sub.id} className="grid-container">
          <span className='grid-item'>{sub.name}</span>
          <span className='grid-item'>{sub.phone}</span>
          </div>
      })
    }
           </div> 
            );
      }
 
}

export default App;
