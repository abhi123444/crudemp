import React,{useEffect, useState} from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import ButtonEmp from './ButtonEmp';
import validator from 'validator';
import './CUemp.css';
import db from './firebase';
import { useHistory, useParams } from 'react-router-dom';
import firebase from 'firebase'
function Updateemp() {
    const history = useHistory();
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [process,setProcess] = useState(false);
    const [errors,setErrors] = useState('')

    const Onfnamechange = (e) => setFirstname(e.target.value);
    const OnLnamechange = (e) => setLastname(e.target.value);
    const OnEmailchange = (e) => setEmail(e.target.value);
    const {id} = useParams();
    useEffect(() => {
        db.collection('employee').doc(id).get()
        .then(snapshot => {
            let {firstname,lastname,email}=snapshot.data();
            setFirstname(firstname);
            setLastname(lastname);
            setEmail(email);
        })
    }, []);
    const handleSubmit =()=>{
        if(validator.isEmpty(firstname) || validator.isEmpty(lastname) || validator.isEmpty(email)){
            setErrors('fill empty fields...');
        }else if(!validator.isEmail(email)){
            setErrors("please type correct email");
        }else{
            setProcess(true)
            setErrors('');
            db
            .collection('employee').doc(id).update({
               firstname:firstname,
               lastname:lastname,
               email:email,
               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(()=>{
                console.log('data Updated successfully');
                setFirstname('');
                setLastname('');
                setEmail('');
                setErrors('');
                setProcess(false)
                history.push('/');
            })
            .catch((error)=>{
                setErrors(error.message);
                setProcess(false)
                setFirstname('');
                setLastname('');
                setEmail('');
            })
        }
    }
    return (
        <div className="addemp">
            <h4>Update Employee</h4>
            <form>
                <TextField 
                    label="First Name" 
                    value={firstname} 
                    onChange={Onfnamechange} 
                />
                <TextField 
                    label="Last Name" 
                    value={lastname} 
                    onChange={OnLnamechange} 
                />
                <TextField 
                    label="Email" 
                    value={email} 
                    onChange={OnEmailchange} 
                />
                <h5>{errors}</h5>
                <div className="submitbtn">
                    {
                        !process 
                            ?   <ButtonEmp  
                                    bgcolor='#2b88d8' 
                                    brcolor='#2b88d8' 
                                    text='Update' 
                                    onClick={handleSubmit}
                                />
                            :   <ButtonEmp  
                                    bgcolor='#2b88d8' 
                                    brcolor='#2b88d8' 
                                    text='Processing' 
                                />  
                    }
                </div>
            </form>
        </div>
    );
}

export default Updateemp;