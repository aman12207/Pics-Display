import React from 'react';
import SearchBar from "./SearchBar"
import ImageList from './ImageList';
import unsplash from './api/unsplash';

class App extends React.Component{
    state = {image: []}
    constructor(props)
    {
        super(props);
        this.onSearchSubmit= this.onSearchSubmit.bind(this);
    }
    async onSearchSubmit(term)
    {
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        })
        this.setState({image: response.data.results});
        // console.log(this.state.image);
    };
     
    render(){
        return <div className='ui container' style={{margin: "10px"}}>
            <SearchBar onSubmit = {this.onSearchSubmit}/>
            <ImageList images= {this.state.image}/>
        </div>;
    }
}

export default App;







// for line no 18
        // .then(response => {      // another way
        //     console.log(response.data.results)
        // })
        // console.log(response.data.results)