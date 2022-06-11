import './LoginPage.css'
import yaka from '../images/Kitsune.png'
import NavBarLogin from '../NavBarLogin/NavBarLogin';
import { useEffect, useState } from "react";
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'


function LoginPage() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function handleClick(){
    //     navigate("/")
    // }

    const navigate = useNavigate();





    useEffect(() => {
        console.log("useEffect called")
    }, []);

    const addMember = async () => {
        navigate("/")
        const docRef = await addDoc(collection(db, "login"), {
            email: email,
            password: password,
        }).then(() => {
            alert("Log In Success !");
            clearTexts();

        }).catch(() => {
            alert("Register failed !")
        });
    }

    const heheHe = () => {
        navigate("/register")
    }

    const clearTexts = () => {
        setEmail('');
        setPassword('');
    }


    return (

        <div>

            <NavBarLogin />


            <div class="d1">

                <div class="d2">
                    <div class="d3">
                        <div className='xx'>
                            <div className='xxx'></div>
                        </div>
                    </div>

                    <div class="d4">

                        <div class="i1">Sign In</div>

                        <div class="i2">
                            <div class="i3"></div>
                        </div>

                        <div class="i4">
                            <div class="i5">Email</div>
                            <input class="i6" type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div class="i4">
                            <div class="i5">Password</div>
                            <input class="i6" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div class="i7">
                            <input type="checkbox" />
                            <div class="i8">Remember Me</div>
                        </div>

                        <div class="i9">
                            <button class="i10" onClick={addMember}>Sign In</button>
                            <button class="i11" onClick={heheHe}>Register</button>
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

export default LoginPage;