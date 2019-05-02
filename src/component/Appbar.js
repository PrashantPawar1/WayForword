import React from 'react';

function AppBar() {
    return (

                <div style={{display:'flex', width:'100%',height:'50px', flexDirection:'column',backgroundColor:'red'}}>
                    <div style={{display:'flex', width:'100%',height:'50px', flexDirection:'row',backgroundColor:'red',flex:1}}>
                        <div style={{display:'flex',height:'50px',backgroundColor:'red',flex:3, alignItems:'center',justifyContent:'center'}}>
                            <div style={{display:'flex',backgroundColor:'pink',flex:1, alignItems:'center',justifyContent:'center'}}>
                                logo
                            </div>
                            <div style={{display:'flex',backgroundColor:'orange',flex:3}}>
                                Custom Logo Here
                            </div>
                        </div>
                        <div style={{display:'flex',height:'50px',backgroundColor:'green',flex:14}}>


                        </div>
                        <div style={{display:'flex', height:'50px',backgroundColor:'orange',flex:1, alignItems:'center',justifyContent:'center'}}>
                            <div style={{display:'flex',backgroundColor:'pink'}}>
                                setting
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default AppBar;
