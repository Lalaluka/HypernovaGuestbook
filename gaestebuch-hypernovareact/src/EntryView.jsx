import React from 'react';

class EntryView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                    "{this.props.props.entry}" posted {this.props.props.creationDate}
                </div>
            </div>
        )
    }
}

export default EntryView;