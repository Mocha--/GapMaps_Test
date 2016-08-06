import React from 'react';
import './header.styl';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">{this.props.children}</header>
        );
    }
}
