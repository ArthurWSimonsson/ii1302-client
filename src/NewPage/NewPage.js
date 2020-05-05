import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { messageActions } from '../actions';
import './NewPage.css';
import '../Common.css';


function NewPage() {
    return(
    <div className = "newPage">
        <div className="titleDiv">
            <p className = "title">New Entries</p>
        </div>
        <div className="table">
            <table>
                <tr>
                    <th><p className="dataText">Author</p></th>
                    <th><p className="dataText">Date</p></th>
                    <th><p className="dataText">Title</p></th>
                </tr>
                <tr>
                    <td><p className="dataText">Hej Hejsson</p></td>
                    <td><p className="dataText">1489-04-12</p></td>
                    <td><p className="dataText">Hej på dig!</p></td>
                </tr>
                <tr>
                    <td><p className="dataText">Nej Nejsson</p></td>
                    <td><p className="dataText">1549-20-01</p></td>
                    <td><p className="dataText">nejnejnej!</p></td>
                </tr>
            </table>
        </div>
    </div>
    )
}


export {NewPage};