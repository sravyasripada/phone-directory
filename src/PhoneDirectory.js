import React ,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor(){
        super();
        this.state={
            subscriberList:[
                {
                    id:1,
                    name:'Sravya',
                    phone:'9988776655'
                },
                {
                    id:2,
                    name:'Lucky',
                    phone:'9977668822'
                }
            ]
        }
    }

    deleteSubscriberHandler =(subscriberId) =>{
        let subscriberList=this.state.subscriberList;
        let subscriberIndex=0;
        subscriberList.forEach(function(subscriber,index){
            if(subscriber.id === subscriberId){
                subscriberIndex=index;
            }
        },this)
        let newSubscribers=subscriberList;
        subscriberList.splice(subscriberIndex,1);
        this.setState({
            subscribers:newSubscribers
        });

    }

    addSubscriberHandler =(newSubscriber) =>{
        let subscriberList=this.state.subscriberList;
        console.log(this.state.subscriberList)
        if(subscriberList.length>0){
            newSubscriber.id= subscriberList[subscriberList.length-1].id +1;
        }else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log(this.state.subscriberList);
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            // <ShowSubscriber subscriberList={this.state.subscriberList} />
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ShowSubscriber subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}/>
                <Route exact path="/add" element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>}/>
            </Routes>
            </BrowserRouter>
        )
    }
}
export default PhoneDirectory;
