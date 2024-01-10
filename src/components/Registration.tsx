import * as React from 'react';

const USER_REGEX : RegExp = /^[a-zA-z][a-zA-Z0-9-_]{3,15}$/;
const PWD_REGEX : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,24}$/;

export interface IRegistrationProps {
}

export function Registration (props: IRegistrationProps) {
    // const userRef = React.useRef();
    // const errRef = React.useRef();

    // const [user, setUser] = React.useState('');
    // const [validName, setValidName] = React.useState(false);
    // const [userFocus, setUserFocus] = React.useState(false);

    // const [matchPwd, setMatchPwd] = React.useState('');
    // const [validMatch, setValidMatch] = React.useState(false);
    // const [matchFocus, setMatchFocus] = React.useState(false);

    // React.useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    // React.useEffect(() => {
    //     const result = USER_REGEX.test(user);
    //     console.log(result);
    //     console.log(user);
    //     setValidName(result);
    // }, [user]);

    return (
    <div>
        Registration Form
        
    </div>
    );
}
