import React, {Component} from 'react';
import {observer} from 'mobx-react'
import '../assets/stylesheets/App.scss';
import Header from './pieces/Header'
import ImportOrCreate from "./pieces/ImportOrCreate";

@observer
export default class App extends Component {
    render() {
        return (
            <div className="main">
                <Header store={this.props.store}/>
                <div className="body">
                    <ImportOrCreate store={this.props.store}/>
                </div>
                {/*<form>*/}
                    {/*<h1>Material Design formular</h1>*/}
                    {/*<div className="form-group">*/}
                        {/*<select>*/}
                            {/*<option>Value 1</option>*/}
                            {/*<option>Value 2</option>*/}
                        {/*</select>*/}
                        {/*<label className="control-label">Selectbox</label><i className="bar"></i>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                        {/*<input type="text" required="required"/>*/}
                        {/*<label className="control-label">Textfield</label><i className="bar"></i>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                        {/*<textarea required="required"></textarea>*/}
                        {/*<label className="control-label">Textarea</label><i className="bar"></i>*/}
                    {/*</div>*/}
                    {/*<div className="checkbox">*/}
                        {/*<label>*/}
                            {/*<input type="checkbox" checked="checked"/><i className="helper"></i>I'm the label from a checkbox*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    {/*<div className="checkbox">*/}
                        {/*<label>*/}
                            {/*<input type="checkbox"/><i className="helper"></i>I'm the label from a checkbox*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    {/*<div className="form-radio">*/}
                        {/*<div className="radio">*/}
                            {/*<label>*/}
                                {/*<input type="radio" name="radio" checked="checked"/><i className="helper"></i>I'm the label from a radio button*/}
                            {/*</label>*/}
                        {/*</div>*/}
                        {/*<div className="radio">*/}
                            {/*<label>*/}
                                {/*<input type="radio" name="radio"/><i className="helper"></i>I'm the label from a radio button*/}
                            {/*</label>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="checkbox">*/}
                        {/*<label>*/}
                            {/*<input type="checkbox"/><i className="helper"></i>I'm the label from a checkbox*/}
                        {/*</label>*/}
                    {/*</div>*/}
                {/*</form>*/}
                {/*<div className="button-container">*/}
                    {/*<button className="button" type="button"><span>Submit</span></button>*/}
                {/*</div>*/}
            </div>
        );
    }
}
