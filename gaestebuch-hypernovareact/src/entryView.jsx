import React from 'react';

class EntryView extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <div>
                <div>
                    {this.props.props.entry}
                </div>
            </div>
        )
    }
}

export default EntryView;