import React, { useEffect, useState } from 'react';
import './employeecrud.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Link } from 'react-router-dom';
import ButtonEmp from './ButtonEmp';
import db from './firebase';
import Deleteemployee from './Deleteemployee';

function Employecrud(props) {
    const [empdata,setEmpdata] = useState([]);
    useEffect(() => {
       db.collection('employee')
       .orderBy("timestamp","desc")
       .onSnapshot(snapshot =>{
           setEmpdata(snapshot.docs.map(doc => ({
               id:doc.id,
               data:doc.data()
           })))
       })

    }, []);
    return (
        <div className="employee">
                <Link to="/add">
                    <PrimaryButton text="Add Employee"/>
                </Link>
                
                
                    <div className="emplist_data">
                        <table>
                            <tbody>
                                <tr className="table_head">
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                               {
                                    empdata.map(({id,data:{firstname, lastname , email }},idx)=>(
                                        <tr key={id} className="table_body">
                                            <td>{firstname}</td>
                                            <td>{lastname}</td>
                                            <td>{email}</td>
                                            <td>
                                                <Link to={`/update/${id}`}>
                                                    <ButtonEmp bgcolor='#2b88d8' brcolor='#2b88d8' text='Update'/>
                                                </Link>
                                                <Deleteemployee id={id} />
                                            </td>
                                        </tr>
                                    ))
                               }
        
                            </tbody>
                        </table>
                    </div>
                
        </div>
    );
}

export default Employecrud;