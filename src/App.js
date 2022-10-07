import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      locations: [

        {name: 'Bali', votes:0},
        {name: 'Mysore', votes:0},
        {name: 'Banaras', votes:0},
        {name: 'Mananli', votes:0},
        
        


      ],
    };
  }

  vote(i) {
    let newLocations = [...this.state.locations];
    newLocations[i].votes++;

    this.setState({locations:newLocations})
  }

  render(){
    return(
      <>
      <h1>Vote for Your destination</h1>
      <div className='locations'>
        {this.state.locations.map((loc,i) => (
          <div key ={i} className='location'>
          
          <div className='locationName'>{loc.name}</div>
          
          <button onClick={this.vote.bind(this,i)}>Select</button>
          <div className='votecount'>{loc.votes}</div>
          </div>
      ))}

      </div>
    </>
    );
  }


}

export default App;
