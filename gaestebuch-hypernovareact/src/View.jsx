import React from 'react';
import EntryView from './entryView';
import EntryForm from './EntryForm';

class View extends React.Component{
    constructor(props){
        super(props);
        console.log(props.data);
    }
    render(){
        return(
            <div>
                <EntryForm />
                <ul className="container">
                    {this.props.data.map(function(object){
                        return (<EntryView key={object._id} props = {object}/>)
                    })}
                </ul>
            </div>
        )
    }
}

export default View;