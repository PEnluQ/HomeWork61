import React, {Component} from 'react';
import axios from 'axios';
import ListCountries from "../../components/ListCountries/ListCountries";
import FullCountry from "../../components/FullCountry/FullCountry";
import './BlockList.css';

class BlockList extends Component {
    state = {
        countries: [],
        countrySelected: null
    };

    async componentDidMount() {
        let response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
        const countries = response.data;
        this.setState({countries});
    }

    countryHandler = id => {
      this.setState({countrySelected : id});
    };

    render() {
        return (
            <div className='BlockList'>
                {this.state.countries.map(item => (
                    <ListCountries
                        key={item.alpha3Code}
                        name={item.name}
                        id={item.alpha3Code}
                        Click={this.countryHandler}
                    />
                ))}
                <FullCountry
                    id={this.state.countrySelected}
                />
            </div>
        );
    }
}

export default BlockList;