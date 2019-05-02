
import logo from './logo.svg';
import './App.css';
import AppBar from './component/Appbar'
import React, {Component} from 'react';

class App  extends Component {



  onIconClick = (button)=> {

     console.log("Value of Button :::::",button)
     //alert("On Icon Click",)

  }


    render() {
        return (
            <div className="App">
                <div style={{display:'flex', width:'100%',height:'750px', flexDirection:'column'}}>
                    <div style={{display:'flex', width:'100%',height:'50px', flexDirection:'column',backgroundColor:'red'}}>
                        <AppBar/>
                    </div>
                    <div style={{display:'flex', width:'100%',height:'730px', flexDirection:'row',backgroundColor:'blue',flex:1}}>
                        <div style={{display:'flex',backgroundColor:'white', flex:1 , flexDirection:'column'}}>
                            <button name='Pawar' style={{display:'flex',backgroundColor:'blue',height:'50px',color:'black'}} onClick={e => this.onIconClick(e.target.name
                            )}>

                            </button>
                            <button name='Prashant' style={{display:'flex',backgroundColor:'red',height:'50px',color:'black'}} onClick={e => this.onIconClick(e.target.name)}>

                            </button>
                        </div>
                        <div style={{display:'flex',backgroundColor:'pink',flex:6 , flexDirection:'column'}}>
                            <div style={{display:'flex',backgroundColor:'pink',flex:1 , height:'30px', width:'100%', backgroundColor:'darkgray'}}>
                                Top
                            </div>
                            <div style={{display:'flex',backgroundColor:'pink',height:'350px',width:'100%',backgroundColor:'gray' , flex:1 , flexDirection:'row'}}>
                                <div style={{display:'flex',backgroundColor:'pink',height:'350px',backgroundColor:'black', flex:3}}>
                                    middle left
                                </div>
                                <div style={{display:'flex',backgroundColor:'pink',height:'350px',backgroundColor:'pink', flex:5 , flexDirection:'row'}}>
                                    <div style={{display:'flex',backgroundColor:'orange',height:'350px', flex:1,padding:10}}>
                                        <div style={{display:'flex',backgroundColor:'blue',height:'330px', flex:1}}>
                                            middle right 1
                                        </div>
                                    </div>
                                    <div style={{display:'flex',backgroundColor:'green',height:'350px', flex:1, flexDirection:'column',padding:'20px'}}>
                                        <div style={{display:'flex',backgroundColor:'yellow', flex:1,paddingBottom:10}}>
                                            middle right 2
                                        </div>
                                        <div style={{display:'flex',backgroundColor:'white', flex:1,marginBottom:10}}>
                                            middle right 2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex',backgroundColor:'pink' ,height:'350px',width:'100%',backgroundColor:'brown',flex:1}}>
                                <div style={{display:'flex',backgroundColor:'red',height:'350px', flex:1, flexDirection:'row'}}>
                                    <div style={{display:'flex',backgroundColor:'red', flex:2, justifyContent:'center',marginTop:'20px'}}>
                                        <div style={{backgroundColor:'blue',width:'60%',height:'280px'}}>
                                            Bottom Left
                                        </div>
                                    </div>
                                    <div style={{display:'flex',backgroundColor:'pink', flex:3,flexDirection:'column'}}>
                                        <div style={{display:'flex',backgroundColor:'pink',height:'50px',width:'100%'}}>
                                            New Resources
                                        </div>
                                        <div style={{display:'flex',backgroundColor:'yellow',height:'300px',width:'100%',flexDirection:'row'}}>
                                            <div style={{display:'flex',backgroundColor:'green',height:'150px',width:'30%'}}>

                                            </div>
                                            <div style={{display:'flex',backgroundColor:'black',height:'150px',width:'70%'}}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
