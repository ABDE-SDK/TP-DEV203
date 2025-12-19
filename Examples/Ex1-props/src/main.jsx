import React from 'react';
import ReactDOM from 'react-dom/client';

var elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];

class Element extends React.Component {
    render() {
        return <li style={{color:this.props.color}}>{this.props.elem}</li>
    }
}

var ListeElements = function({elems, color}) {
    return <ul>
        {elems.map(function(elem, index) {
            return <Element key={index} elem={elem} color={color} />
        })}
    </ul>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListeElements elems={elems} color="red" />);
