import React from 'react'

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.ImageRef = React.createRef();
        this.state={spans : 0}
    }

    componentDidMount(){
        this.ImageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan = () =>{
        const Height = this.ImageRef.current.clientHeight;

        const Span = Math.ceil(Height / 10) // 150 is size of each span in css file
        console.log(Span);
        this.setState({spans: Span})
    }

    render(){
        const {description , urls} = this.props.image;
        return (
            <div style={{gridRowEnd : `span ${this.state.spans}`}}>
                <img 
                    ref={this.ImageRef}
                    src={urls.regular} 
                    alt={description}
                />
            </div>    
        )
    }
}

export default ImageCard;