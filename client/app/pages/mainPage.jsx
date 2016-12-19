import React from 'react';
import { Link } from 'react-router';
import FileSubmitter from "components/fileSubmitter.jsx";
import "pages/mainPage.scss";

export class MainPage extends React.Component{
    render(){
        return (
            <FileSubmitter/>
        );
    }
}
