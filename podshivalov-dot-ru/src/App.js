import logo from './logo.svg';
// import './App.css';
import Todo from './components/Todo';
import { Box, Button, Container, Grid, Paper } from '@material-ui/core';

function App() {
  return (
    
    <Box height="100vh" 
      style={{
        // backgroundImage: `url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)`,
        // backgroundImage: `url(https://daks2k3a4ib2z.cloudfront.net/55e815a87ccabd4334861f26/55f7cde93695b60d5515bec4_free-misc-icons_cr.png)`,
        // background:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://daks2k3a4ib2z.cloudfront.net/55e815a87ccabd4334861f26/55f7cde93695b60d5515bec4_free-misc-icons_cr.png)`,
        // backgroundSize: `cover`,
        // backgroundRepeat: `no-repeat`,
        // backgroundPosition: `center`
        }}>
      <Todo/>
    </Box>
    
  );
}

export default App;
