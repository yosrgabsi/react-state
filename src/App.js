import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class App extends Component {
  constructor(){
    super();
    this.state={
      person: {
      
        fullName: 'Yosr Gabsi',
        bio: 'Im a developement student ',
        imgSrc : 'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/334921957_2246670638856205_5639688681216863960_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=W3quTRDqKbQAX9i1OmW&_nc_ht=scontent.ftun8-1.fna&oh=03_AdTmqtuZpcFIRWrE7PacSC4bzUoRnvwmYe0PpWQoGF5NVw&oe=642C706F' ,
        profession: 'Web Developer',
      },

      show:true 
    }

  }
toggel=()=>{
  this.setState({show:!this.state.show})
}

  render() {
    const { person} = this.state; 
    return (
      <div>
       
          <Card className="bg-dark text-white">
            <Card.Img  className='photo1'  src={person.imgSrc} alt="photo1"  />
            <Card.ImgOverlay>
              <Card.Title> <h1>welcome to my profile </h1></Card.Title>
              <Card.Text>
               
        <h2>My name is {person.fullName}</h2>
        <h3>Bio:{person.bio}</h3>
       
        <h3>My profession is:{person.profession}</h3>
       
              </Card.Text>
              <Button variant="primary">follow</Button>
            </Card.ImgOverlay>
          </Card>

          <hr/>

<button   onClick={()=>this.toggel()} >show/hide</button>
    {this.state.show   &&     <Counter/>}
      
     </div>
    )
  }
}
       
      
    


export default App
  
 
