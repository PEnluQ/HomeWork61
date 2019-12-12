import React, {PureComponent} from 'react';
import './ListCountries.css';

class ListCountries extends PureComponent {
    render() {
        return (
            <div className='ListCountries' onClick={() => this.props.Click(this.props.id)}>
               <p className='Country-Elem'>{this.props.name}</p>
            </div>
        );
    }
}

export default ListCountries;