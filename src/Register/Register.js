import NavBarLogin from '../NavBarLogin/NavBarLogin';
import './Register.css'
import { useEffect, useState } from "react";
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'

function Register() {


    const [firstName, setfirstName] = useState('');
    const [secondName, setsecondName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setconfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');




    const navigate = useNavigate();


    useEffect(() => {
        console.log("useEffect called")
    }, []);


    const addMember = async () => {
        navigate("/")
        const docRef = await addDoc(collection(db, "register"), {
            firstName: firstName,
            secondName: secondName,
            email: email,
            confirmEmail: confirmEmail,
            password: password,
            confirmPassword: confirmPassword,
        }).then(() => {
            alert("Successfully Registered !");
            clearTexts();

        }).catch(() => {
            alert("Register failed !")
        });
    }

    const clearTexts = () => {
        setfirstName('');
        setsecondName('');
        setEmail('');
        setconfirmEmail('');
        setPassword('');
        setconfirmPassword('');

    }

    const yesYes = () => {
        navigate("/login")
    }




    return (

        <div>
            <NavBarLogin />
            <div class="d1">

                <div class="b2">

                    <div class="b3">

                        <div className='b5'>Register</div>

                        <div class="b6">
                            <div class="b7">First Name</div>
                            <input class="b8" type='text' value={firstName} onChange={(e) => { setfirstName(e.target.value) }} />
                        </div>

                        <div class="b6">
                            <div class="b7">Email</div>
                            <input class="b8" type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div class="b6">
                            <div class="b7">Password</div>
                            <input class="b8" type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                        </div>

                        <div class="b6">
                            <div class="b7">Country</div>
                            <input class="b8" />
                        </div>

                    </div>



                    <div class="b4">

                        <div class="b6">
                            <div class="b7 v1">Second Name</div>
                            <input class="b8" value={secondName} onChange={(e) => { setsecondName(e.target.value) }}/>
                        </div>

                        <div class="b6">
                            <div class="b7">Confirm Email</div>
                            <input class="b8" type='email' value={confirmEmail} onChange={(e) => { setconfirmEmail(e.target.value) }}/>
                        </div>

                        <div class="b6">
                            <div class="b7">Confirm Password</div>
                            <input class="b8" type='password' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}/>
                        </div>

                        <div class="b9">
                            <button class="b10" onClick={addMember} >Sign Up Now</button>
                            <button className='b11' onClick={yesYes}>Back</button>
                        </div>

                    </div>

                </div>

            </div>
            <div className='ff1'>
                <p className='ff2'>&copy; 2022 React App Pvt Ltd</p>
            </div>
        </div>
    );
}

export default Register;