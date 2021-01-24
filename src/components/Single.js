import React from 'react'
import nameData from '../data/names.json'
import {Link} from 'react-router-dom'

function Single(props) {
    console.log(props)
    console.log('here');

    var givenName = (props.location.pathname).substring(1);
    givenName = givenName.charAt(0).toUpperCase() + givenName.slice(1)
    var amount = 0

    for (var i=0; i<nameData.names.length; i++) {
        //console.log(nameData.names[i])
        if (givenName === nameData.names[i].name) {
            amount = nameData.names[i].amount
            console.log(givenName+"joo")
        }
        else {
            //console.log(givenName)
        }
    }
    return (
        <div>
            <div>
                <Link to="/">
                <button>Back</button></Link>
            </div>
            <div>
             {givenName} , {amount} tyyppiä löytyi
            </div>   
        </div>
    )
}

export default Single
