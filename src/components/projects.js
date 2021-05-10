import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell,Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'


class projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 1};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className = "projects-grid">
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'white',height:'200px',background:
                        'url(https://realpars.com/wp-content/uploads/2020/06/Operating-A-Control-Valve.png) center/cover'}}>Piping and Instrumental Diagram (P&ID)</CardTitle>
                        <CardText>
                            Designed a P&ID using AutoCad 3D for UWaterloo's Nitrogen 
                            tank by evaluating locations of various piping, pressure 
                            sensors, gas sensors, and other precautions
                        </CardText>
                        <CardActions border>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black',height:'200px',background:
                        'url(https://www.codeware.com/wp-content/uploads/2017/07/Full-Dimensional-GAD.png) center/cover'}}> Pressure vessel with Arduino Micro Controller </CardTitle>
                        <CardText>
                            Designed pressure vessel blue print on AutoCAD. Thereafter Designed Wheatstone bridge circuit to convert sensor resistance to 
                            voltage measured by Arduino (Programmed using Python wrapper) to retrieve Henry's constant for CO2
                        </CardText>
                        <CardActions border>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className = "projects-grid"> 
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black',height:'200px',background:
                        'url(https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-running-sport-figure-silhouette-image_1378370.jpg) center/cover'}}> GroupFitness </CardTitle>
                        <CardText>
                            Using React Native (specifically expo) and Firebase for the backend, developed an application which connects users around the globe to form teams and compete in their running/weight loss journey by keeping track of distance, time and calories and creating a weekly leaderboards for winners 
                        </CardText>
                        <CardActions border>
                            <a href= "https://github.com/Makhdoomzada/GroupFitness.git" rel="noreferrer" target="_blank" > 
                                <Button colored> Github </Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'black',height:'178px',background:
                        'url(https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/05/AdobeStock_168931649.t5cb8050a.m800.xfO8gsyEaog6WSrZjeMVZW26gzxV9HbkmhltC8DUSpRI-620x342.jpeg)'}}> Diabetes Detection </CardTitle>
                        <CardText>
                            Using Sklearn, Numpy and Pandas developed a Machine Learning algorithm which can predict diabetes based on weakness, 
                            Polyuria, Visual blurring, Itching, Muscle stiffness and Obesity with a 91% accuracy
                        </CardText>
                        <CardActions border>
                            <a href= "https://github.com/Makhdoomzada/Diabetes-research.git" rel="noreferrer" target="_blank" > 
                                <Button colored> Github </Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'white',height:'200px',background:
                        'url(data:image/jpeg;base64,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) center/cover'}}> Tours by Locals  </CardTitle>
                        <CardText>
                            Created a website to connect tourists with natives at their destination who know the 
                            destination better then anyone else so that tourists can explore the hidden gems. Used React.JS for the frontend, 
                            Python for the backend along with GCP and Firestore as the cloud database storage
                        </CardText>
                        <CardActions border>
                            <a href= "https://github.com/Makhdoomzada/ToursByLocals.git" rel="noreferrer" target="_blank"> 
                                <Button colored> Github </Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab  style={{color:'#fff', fontSize: '20px'}}> Engineering </Tab>
                    <Tab  style={{color:'#fff', fontSize: '20px'}}> Programming Projects </Tab>
                </Tabs> 

                
                    <Grid>
                        <Cell col = {12}>
                            <div className="content"> {this.toggleCategories()} </div>
                        </Cell>

                    </Grid>
                

            
            </div>
        )
    }
}

export default projects;