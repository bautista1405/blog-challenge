import React from 'react'
import Navbar from '../../components/Nav'
import EditForm from '../../components/EditForm'
import {withRouter} from 'react-router-dom'

function EditionForm() {
    
    return (
        <div>
            <Navbar />
            <EditForm /> 
        </div>
    )
}

export default withRouter(EditionForm)