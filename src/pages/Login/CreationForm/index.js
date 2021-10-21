import React from 'react'
import Navbar from '../../components/Nav'
import CreateForm from '../../components/CreateForm'
import {withRouter} from 'react-router-dom'

function CreationForm() {
    
    return (
        <div>
            <Navbar />
            <CreateForm /> 
        </div>
    )
}

export default withRouter(CreationForm)