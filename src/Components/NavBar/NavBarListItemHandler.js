import React from 'react';
import store from '../../redux/store';
import ListItemHandler from '../List/ListItemHandler';

class NavBarListItemHandler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            positions: []
        }
    }

    componentDidMount(){
        const addPositions = () => {
            const positions = store.getState().positions.filter(obj => obj.inList);
            this.setState(() => ({ positions }));
        }

        addPositions();

        const currentStatePositions = this.state.positions;
        store.subscribe(() => {
            if(currentStatePositions.length < store.getState().positions.length){
                addPositions();
            }
        })
    }

    render(){
        return(
            <div className="">
                <ListItemHandler list={this.state.positions.length === 0 ? [{jobObject: {title: 'Your List is Empty! Get to Swipin!'}}] : this.state.positions}/>
            </div>
        )
    }
}

export default NavBarListItemHandler;