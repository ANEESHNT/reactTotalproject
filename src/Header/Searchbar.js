import React, { Component } from 'react';
import {Navbar,Form,FormControl,InputGroup,Button} from 'react-bootstrap'
import './Searchbar.css'



class Searchbar extends Component {
  render() {
    return (
      <div>
      
  
  
  <form className="form-inline">
    <FormControl  type="text" size="100" placeholder="Search"  />
    <Button type="submit" variant='warning'><i class="fas fa-search"></i></Button>
  </form>
    


      </div>
    );
  }
}

export default Searchbar;
