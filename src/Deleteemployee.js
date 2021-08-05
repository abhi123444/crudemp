import React from 'react';
import ButtonEmp from './ButtonEmp';
import db from './firebase';

function Deleteemployee({id}) {

    const handleDelete = ()=>{
             db.collection('employee')
                .doc(id)
                .delete()
                .then(()=>{
                    console.log("deleted successfully..")
                })
                .catch((error)=>{
                    console.log(error.message)
                })
    }

    return (
        <ButtonEmp 
            bgcolor='#d83b01' 
            brcolor='#d83b01' 
            text='Delete'
            onClick={handleDelete}
        />
    );
}

export default Deleteemployee;