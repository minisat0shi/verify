import React from 'react';
import { Link } from 'react-router';

export class PageFrame extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Link href="/"><b>Home</b></Link>
                    <Link href="/about">About</Link>
                </div>
                <div className="container mainPage">
                    {this.props.children}
                </div>
            </div>
        );
    }
}