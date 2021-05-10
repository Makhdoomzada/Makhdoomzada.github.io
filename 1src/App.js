import './App.css';
import {Layout, Header, HeaderRow, Textfield, Navigation,Content,Drawer} from 'react-mdl';
import Main from "./components/main";
import {Link} from 'react-router-dom';
import ParticleBackground from './particlebackground';


function App() {
  return (
    <div className="demo-big-content">
      <div style={{position:'absolute'}}>
        <ParticleBackground />      
      </div>
    {/* 
    <Layout>
        <Header className = "header-color" waterfall hideTop>
            <HeaderRow title="Ahsan Syed">
            <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search3"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="projects">Projects</Link>
                    <Link to="contactme">About Me</Link>
                    
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="projects">Projects</Link>
                    <Link to="contactme">About Me</Link>
                    
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout> */}
    </div>
  );
}

export default App;
