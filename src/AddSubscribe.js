import React,{Component} from 'react';
import './AddSubscriber.css';
import Header from './Header';

class AddSubscriber extends Component {
    render(){
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className='component-body-container'>
                    <button className='custom-btn'>Back</button>
                    </div>
                    <form className="subscriber-form">
                    <label htmlFor="name" className='label-control'>Name : </label><br/>
                        <input id="name" type="text" className='input-control' name="name"></input><br/><br/>
                        <label htmlFor="phone" className='label-control'>Phone : </label><br/>
                        <input id="phone" type="text" className='input-control' name="phone"></input><br/><br/>
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subscriber to be added : </span><br/>
                            <span className='subscriber-info'>Name: </span><br/>
                            <span className='subscriber-info'>Phone: </span>
                        </div>
                        <button className='custom-btn add-btn'>Add</button>
                    </form>
            </div>
        )
    }
}

export default AddSubscriber;