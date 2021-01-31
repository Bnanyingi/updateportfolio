import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className ="demo-big-content">
        <Layout>
            <Header title="header-color" scroll>
                <Navigation>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Aboutme">About</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/Aboutme">About</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
    
  
    

  );
 }

  


export default App;
