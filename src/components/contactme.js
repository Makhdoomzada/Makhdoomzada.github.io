import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Button} from 'react-mdl';
import ahsanimg2 from "./ahsantwo.png";


class contactme extends Component {
    render() {
        return(
            <div className='contact-body'> 
                <Grid className='contact-grid'>
                <Grid className="demo-grid-ruler">
                    <Cell col={3}>
                        <h2 className="grid-head"> languages </h2>
                        <List >
                                <ListItem>Python </ListItem>
                                <ListItem>Racket</ListItem>
                                <ListItem>C </ListItem>
                                <ListItem> Arduino </ListItem>
                                <ListItem> HTML </ListItem>   
                        </List>    
                        
                    </Cell>
                    <Cell col={4}>
                    <h2 className="grid-head"> Tools/Frameworks </h2>
                        <List className="grid-list">
                            <ListItem>MySQL</ListItem>
                            <ListItem>BootstrapCDN</ListItem>
                            <ListItem>React </ListItem>
                            <ListItem> Numpy </ListItem>
                            <ListItem> Pandas </ListItem>   
                            <ListItem> TensorFlow </ListItem>
                            
                        </List>
                        

                    </Cell>
                    <Cell col={5}>
                    <h2 className="grid-head"> Others </h2>
                        <List className="grid-list">
                                    <ListItem > Tableau </ListItem>
                                    <ListItem> Tableau Prep </ListItem>
                                    <ListItem> Filemaker Pro </ListItem> 
                                    <ListItem> Excel </ListItem>
                                    <ListItem> CSS</ListItem>
                                    <ListItem> AutoCAD </ListItem>
                                    <ListItem> AutoCAD Plant 3D </ListItem>
                                    <ListItem> Qualtrics </ListItem>   
                        </List>
                    </Cell>
                    
                </Grid>
                    
                    <Cell coll={4}>
                        <h2> Makhdoomzada Ahsan Syed </h2>
                        <img src={ahsanimg2}
                        alt = "myself"
                        style={{height: '250px'}}/>
                        <p style={{width: '75', margin:'auto',paddingTop:'1em', fontSize: '20px'}}>Hey everyone! I can be reached at the following. Please feel free to reach out about any inquiries/questions you may have. I look forward to connecting! </p>
                        <p></p>
                        <a href='https://drive.google.com/file/d/1W9GB4NhyvHA2DUIxpscJAE4fYA8y-751/view?usp=sharing' rel="noopener noreferrer" target="_blank">
                            <Button raised accent ripple>Resume</Button>
                        </a>
                    </Cell>
                    <Cell coll={4}>
                        <h2> Contact Me </h2>
                        <hr/>
                        <div className = "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        m43syed@uwaterloo.ca
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className='fa fa-linkedin-square' aria-hidden='true'/>
                                        Makhdoomzada Syed
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>
                                        (647) - 655 - 0624
                                    </ListItemContent>
                                </ListItem>
                            </List> 
                        </div>
                    </Cell>  
                </Grid>
                </div> 
            
            
        )
    }
}

export default contactme;