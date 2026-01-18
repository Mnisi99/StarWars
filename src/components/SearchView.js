import React from 'react';
import Hero from './Hero';
import StarWars from './StarWars';
import Footer from './Footer';

class SearchView extends React.Component {

    render() {

        const searching = `Searching for ${this.props.searchText}`;
        const resultHtml = this.props.searchResults.map((object, index) => {
            return <StarWars key={index} results={object}/>
        })
        return (
            <>
                <Hero text={searching}/>
                {
                   resultHtml && 
                   <div className='container'>
                       <div className="row">
                            {resultHtml}
                       </div>
                   </div>
                }
                <Footer />
                
            </>
        )
    }
}

export default SearchView;