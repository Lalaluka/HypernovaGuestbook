import React from 'react';
import axios from 'axios';

class EntryView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            entry: ''
        };
        this.handleEntryChange = this.handleEntryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEntryChange(event){
        console.log(event);
        this.setState({entry:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("HI:DDDDDDDDD");
        axios({
            method: 'post',
            url:'/api/data',
            data:{
                "entry": this.state.entry
            }
        }).then(function(result){
            if(result.status===200){
                window.location.href='/'
            } else{
                console.log(result)
            }
        }).bind(this)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.entry} onChange={this.handleEntryChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EntryView;