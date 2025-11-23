
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { userService } from '../services/user/user.service.js';
import { login, logout, signup } from '../store/actions/user.actions.js';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    fullname: Yup.string().when("isLogin", {
        is: false,
        then: () => Yup.string().required("Fullname is required"),
    }),
})

export function LoginSignup() {
    const user = useSelector(state => state.userModule.loggedInUser)
    const [isLogin, setIsLogin] = useState(true)
    const [showForm, setShowForm] = useState(false)

    function onLoginSignup(isLogin) {
        setIsLogin(isLogin)
    }

    async function onHandleSubmit(values) {
        try {
            const action = isLogin ? login : signup
            await action(values)
            showSuccessMsg(`${values.username} logged in successfully`)
        } catch (err) {
            console.log(err)
            showErrorMsg("There was a problem")
        }
    }

    async function onLogout() {
        try {
            await logout()
            showSuccessMsg("See ya")
        } catch (err) {
            showErrorMsg("There was a problem")
        }
    }

    if (user) {
        return (
            <section className="main-user-loggedin">
                <h5>{user.fullname} logged in</h5>
                <button className='user-button' onClick={onLogout}>Logout</button>
            </section>
        )
    }

    return (
        <section>
            {/* className="user-login-section" */}
            <div className="user-header">
                <img
                    className="user-avatar"
                    src={'../../icons/user.png'}
                    alt="User"
                    onClick={() => setShowForm(!showForm)}
                />
                {showForm && <div className="overlay" onClick={() => setShowForm(false)}></div>}

                {showForm && (
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            fullname: '',
                            isLogin: isLogin,
                        }}
                        enableReinitialize
                        validationSchema={LoginSchema}
                        onSubmit={onHandleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="user-form">

                                <Field type="text" name="username" placeholder="Username" />
                                {errors.username && touched.username && <div className="error">{errors.username}</div>}

                                <Field type="password" name="password" placeholder="Password" />
                                {errors.password && touched.password && <div className="error">{errors.password}</div>}

                                {!isLogin && (
                                    <>
                                        <Field type="text" name="fullname" placeholder="Fullname" />
                                        {errors.fullname && touched.fullname && <div className="error">{errors.fullname}</div>}
                                    </>
                                )}
                                <button type="submit">
                                    {isLogin ? 'Login' : 'Signup'}
                                </button>

                                <span
                                    className="toggle-login"
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? 'Signup?' : 'Login?'}
                                </span>
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </section>
    )
}

