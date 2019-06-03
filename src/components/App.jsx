import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

import Rafael from './Rafa';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            rafael: '',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('this.state ', this);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        console.log('deleting in application', id);
        console.log('this.props', this.props);
        this.props.deleteReminder(id);
    }

    renderReminders() {
        //Los cambios del input al hacer click
        const { reminders } = this.props;
        console.log(reminders, 'reminders')
        return (
            <ul className="list-group col-md-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
                                </div>

                                <div
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}>
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="tiel">
                    Reminder Pro
                </div>
                <Rafael />
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({ text: event.target.value })}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={event => this.setState({ dueDate: event.target.value })}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                        onKeyPress={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>
                <div>{this.renderReminders()}</div>
                <div className="btn btn-danger" onClick={() => this.props.clearReminders()}>
                    Clear
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);