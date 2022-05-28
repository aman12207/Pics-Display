import React from 'react'

class Search extends React.Component{
    state={term: ''}
    onFormSubmit = (event) =>{
        event.preventDefault();    
        this.props.onSubmit(this.state.term);    
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        value={this.state.term}
                        onChange={(event) => this.setState({term: event.target.value})} 
                        type = "text" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search





// for line no 5
    // constructor(props)
    // {
    //     super(props);
    //     this.onFormSubmit= this.onFormSubmit.bind(this);
    // }
    // onFormSubmit(event){             
    //     event.preventDefault();
    //     console.log(this.state.term);        // it will give an error to rectify that error we have to use arrow function or bind  because it will automaitcally bind this and we no longer need to use bind in constructor function     
    // }