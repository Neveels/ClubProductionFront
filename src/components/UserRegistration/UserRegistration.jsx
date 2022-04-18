import React, {useState} from 'react';
import cl from './UserRegistration.module.css'
import axios from 'axios';

const UserRegistration = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyeOpenReg, setEyeOpenReg] = useState(false)

    const postCustomerData = (e) => {
        e.preventDefault()
        const newCustomer = {
            name: name,
            phone: phone,
            email: email,
            password: password,
        }
        axios.post('http://localhost:8082/registration', newCustomer)
    }

    return (
        <div className={cl.wrap}>
            <h1>REGISTRATION</h1>

            <form onSubmit={postCustomerData}>
                <div className={cl.inputWrap}>
                    <h3>Name</h3>
                    <input
                        required

                        value={name}
                        // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Phone</h3>
                    <h2 className={cl.phonePlus}>+</h2>
                    <input
                        required
                        minLength={10}
                        maxLength={18}

                        className={cl.phoneInput}
                        value={phone}
                        onKeyDown={(e) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Email</h3>
                    <input
                        required

                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cl.inputWrap}>
                    <h3>Password</h3>
                    <input
                        required
                        minLength={6}

                        type={eyeOpenReg ? 'text' : 'password'}
                        className={cl.passwordInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img
                        className={cl.eyeImage}
                        src={eyeOpenReg ? "./Images/OpenEye.jpg" : "./Images/CloseEye.jpg"}
                        onClick={() => eyeOpenReg ? setEyeOpenReg(false) : setEyeOpenReg(true)}
                    />
                </div>

                <button
                    type='submit'
                    className={cl.authorizationButton}
                >
                    Registration
                </button>
            </form>
            <hr/>
        </div>
    );
};

export default UserRegistration;