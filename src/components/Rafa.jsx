import React from 'react';
import { addReminder, deleteReminder } from '../actions';
import { connect } from 'react-redux';

const Rafael = (props) => {
    const { reminders } = props;
    // console.log(reminders, 'Rafael jsx');
    return (
        <p>Rafael</p>
    )
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(Rafael);