import React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
function ButtonEmp({bgcolor,brcolor,text,onClick}) {
    return (
        <div>
             <PrimaryButton
                style={{
                    marginLeft: '3px',
                    backgroundColor: bgcolor,
                    borderColor: brcolor,
                }}
                text={text}
                onClick={onClick}
            />
        </div>
    );
}

export default ButtonEmp;