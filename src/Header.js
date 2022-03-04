import React,{Component} from 'react';
// const Header=function(props){
//     return(
//         <div style={{textAlign:'center',textTransform:'uppercase',padding:20,backgroundColor:'black',color:'white'}}>         
//     {props.heading} 
//     </div> 
//     )
     
// }
class Header extends Component{
     
    render(){
        return(
            <div style={{textAlign:'center',textTransform:'uppercase',padding:20,backgroundColor:'black',color:'white'}}>         
        {this.props.heading} 
            </div> 
        )
    }
}
export default Header;
