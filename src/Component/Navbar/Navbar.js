import React, { useState } from 'react';
import "./Navbarr.css"
import cogoToast from 'cogo-toast';
import { FiMail, FiLock } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { ButtonToolbar, Dropdown, Navbar, Nav, Drawer, Radio, Loader, IconButton, Button, Modal } from 'rsuite';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import initializeAuthentication from '../../Firebase/firebase.init';




initializeAuthentication()

const Navbars = () => {
  const [placement, setPlacement] = React.useState('bottomStart');
  const auth = getAuth()
  const [name, setName] = useState(false)
  const [loginEmail, setLoginEmail] = useState(false)
  const [loginPass, setLoginpPass] = useState(false)
  const [email, setEmail] = useState(false)
  const [passone, setPassone] = useState(false)
  const [passtwo, setPasstwo] = useState(false)
  const [match, setMatch] = useState(false)


  const nameField = (e) => {
    setName(e.target.value)
  }
  const emailField = (e) => {


    setEmail(e.target.value)

  }
  const passoneField = (e) => {
    setPassone(e.target.value)
  }
  const passtwoField = (e) => {
    setPasstwo(e.target.value)
  }
  const loginEmailField = (e) => {
    setLoginEmail(e.target.value)
  }
  const loginPassField = (e) => {
    setLoginpPass(e.target.value)
  }

  const submitRegister = (e) => {

    e.preventDefault();
    if (passone === passtwo) {
      setMatch(false)
      e.target.reset()
      console.log(email, passone)
      createUserWithEmailAndPassword(auth, email, passone)
        .then((userCredential) => {
          cogoToast.success('Registration Successfull !');

          setTimeout(function () { window.location.reload() }, 2000);
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            cogoToast.error('This Email Account Already Registered');
          }
          else {
            cogoToast.error(error.message);
          }

          const errorMessage = error.message;
          console.log(errorMessage)

        });

    }
    else {
      setMatch(true)
    }
  }
  const loginSubmitHandle = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, loginEmail, loginPass)
      .then((userCredential) => {
        cogoToast.success('Login Success');
        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {

        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          cogoToast.warn('Please Register Before Login');
        }
        else {
          cogoToast.error(error.message);
        }

        console.log(error.message)
      });
  }


  const { signInUsingGoogle, signInUsingFacebook, user, logout } = useFirebase();
  const [open, setOpen] = React.useState(false);

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };


  const [opena, setOpena] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpena = () => setOpena(true);
  const handleClosea = () => setOpena(false);
  const [openla, setOpenla] = React.useState(false);
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  const [register, setRegister] = React.useState(false);
  const setLogin = () => {
    setRegister(true)
  }
  const setRegisters = () => {
    setRegister(false)
  }
  return (<>
    <div className='lol desktopNav'>
      <div className="mb-2" style={{ color: "black", fontSize: "16px", marginLeft: "5%", marginTop: "10px" }} className='d-flex'><span className='ms-3 me-2'> <img width="20px" src="./call.png" alt="" /> 0000 - 123456789</span>
        <span> <img width="20px" src="./mail.png" alt="" /> sample@example.com</span>
      </div>
      <div className=' row mt-4 ' style={{ width: "100%" }}>
        <div style={{ paddingLeft: "110px" }} className='col-md-2  text-start '>
          <img className='logo' src="./logo.jpg" alt="" />
        </div>
        <div style={{ height: "50px", marginTop: "10px" }} className=' searchBox p-0 col-md-7 mx-auto'>
          <Navbar >

            <Nav>
              <Nav.Item > <Link style={{ textDecoration: 'none' }} to='/'><span style={{
                fontSize: "18px",
                color: "black"
              }}>Home</span></Link> </Nav.Item>
              <Nav.Item > <Link style={{ textDecoration: 'none' }} to='/indian'><span style={{
                fontSize: "18px",
                color: "black"
              }}>Indian</span></Link> </Nav.Item>
              <Nav.Item > <Link style={{ textDecoration: 'none' }} to='/'><span style={{
                fontSize: "18px",
                color: "black"
              }}>Bangladeshi</span></Link> </Nav.Item>
              <Nav.Item > <Link style={{ textDecoration: 'none' }} to='/'><span style={{
                fontSize: "18px",
                color: "black"
              }}>Chinese</span></Link> </Nav.Item>
              <Nav.Item > <Link style={{ textDecoration: 'none' }} to='/'><span style={{
                fontSize: "18px",
                color: "black"
              }}>Pages</span></Link> </Nav.Item>
             

            </Nav>

          </Navbar>

        </div>
        <div className='col-md-2 d-flex align-items-center '>
          <div>

            <ButtonToolbar>
              <IconButton onClick={() => handleOpen('right')}>
                <img style={{ borderRadius: "50%", width: "50px" }} src="./pngegg (1).png" alt="" />
              </IconButton>


            </ButtonToolbar>

            <Drawer size={'xs'} placement={placement} open={open} onClose={() => setOpen(false)}>
              <Drawer.Header>
                <Drawer.Title>Log In / Sign Up</Drawer.Title>
                <Drawer.Actions>

                  <Button onClick={() => setOpen(false)} appearance="primary">
                    Close
                  </Button>
                </Drawer.Actions>
              </Drawer.Header>
              <Drawer.Body>
                {!register && !user.email && <center>

                  <div className=''>
                    <button onClick={signInUsingGoogle} className='googleBtn' > <img width="35px" style={{ marginRight: "8px" }} src="./google.png" alt="" /> Sign Up With Google</button>
                    <button onClick={signInUsingFacebook} className='facebookBtn' > <img width="50px" style={{ marginRight: "12px" }} src="./facebook.png" alt="" />Facebook Sigh Up</button>

                  </div>
                  <div className='d-flex mt-3'>
                    <div className='w-50'><hr /></div>
                    <div className='pe-2 ps-2'><span>OR</span></div>
                    <div className='w-50'><hr /></div>

                  </div>
                  <div className='text-start mt-4'>
                    <form onSubmit={loginSubmitHandle} className="ms-3">

                      <span style={{ fontFamily: "poppins", fontWeight: "600" }}>Email Address</span>
                      <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                        <div className='me-2'>
                          <FiMail />
                        </div>
                        <input required
                          onChange={loginEmailField}
                          placeholder="Enter Your Email Address" style={{ border: "none" }} type="email" name="email" />
                      </div>
                      <span style={{ fontFamily: "poppins", fontWeight: "600" }}>Password</span>
                      <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                        <div className='me-2'>
                          <FiLock />
                        </div>
                        <input required
                          onChange={loginPassField}
                          placeholder="Enter Your Password" style={{ border: "none" }} type="password" name="password" />
                      </div>
                      <center className="mt-4"><b> <Link style={{ textDecoration: "none" }} to="/forgetpassword"><span style={{ color: "#ff725e" }}> <span >Forget Password</span> </span></Link> </b></center>
                      <button type="submit" className="loginBtn mt-3 ">Login</button>
                    </form>
                    <center className="mt-4"><b>New user? <span style={{ color: "#ff725e" }}> <span onClick={() => { setLogin() }}>Register Here</span> </span></b></center>

                  </div>
                </center>}
                {register && <center>

                  <div className=''>
                    <button onClick={signInUsingGoogle} className='googleBtn' > <img width="30px" style={{ marginRight: "8px" }} src="./google.png" alt="" /> Sign Up With Google</button>
                    <button onClick={signInUsingFacebook} className='facebookBtn' > <img width="40px" style={{ marginRight: "12px" }} src="./facebook.png" alt="" />Facebook Sigh Up</button>

                  </div>
                  <div className='d-flex mt-1'>
                    <div className='w-50'><hr /></div>
                    <div className='pe-2 ps-2'><span>OR</span></div>
                    <div className='w-50'><hr /></div>

                  </div>
                  <div className='text-start mt-1'>
                    <form onSubmit={submitRegister} className="ms-3">


                      <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                        <div className='me-2'>
                          <CgProfile />
                        </div>
                        <input required
                          onChange={nameField}
                          placeholder="Your Name" style={{ border: "none" }} type="name" name="name" />
                      </div>

                      <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                        <div className='me-2'>
                          <FiMail />
                        </div>
                        <input required
                          onChange={emailField}
                          placeholder="Email Address" style={{ border: "none" }} type="email" name="email" />
                      </div>



                      <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                        <div className='me-2'>
                          <FiLock />
                        </div>
                        <input required
                          onChange={passoneField}
                          placeholder="Password" style={{ border: "none" }} type="password" name="password" />
                      </div>
                      <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                        <div className='me-2'>
                          <FiLock />
                        </div>
                        <input required
                          onChange={passtwoField}
                          placeholder="Re-type Your Password" style={{ border: "none" }} type="password" name="password" />
                      </div>
                      {match && <div>
                        <center> <span style={{ color: 'red', fontFamily: "poppins" }}>! Password Not Match</span>
                        </center>
                      </div>}
                      <Radio required className='mt-2'> I agree to platform's <b><span style={{ color: "#ff725e" }}>Terms of Service</span></b> and <b><span style={{ color: "#ff725e" }}>Privacy Policy</span></b> </Radio>
                      <button type="submit" className="loginBtn mt-2 ">Register</button>
                    </form>
                    <center className="mt-4"><b>Already Registered? <span style={{ color: "#ff725e" }}> <span onClick={() => { setRegisters() }}>Login here</span> </span></b></center>

                  </div>
                </center>}
                {user.email && <div>
                  <h3 style={{ fontSize: "17px" }}>Personal Information</h3> <hr />
                  <span style={{ borderBottom: "2px solid orange" }}> <b>Name</b> </span>
                  <br /> <span style={{ fontSize: "18px", fontFamily: "poppins" }}>{user.displayName}</span> <br />
                  <span style={{ borderBottom: "2px solid orange" }}> <br /> <b>Email</b> </span>
                  <br /> <span style={{ fontSize: "18px", fontFamily: "poppins" }}>{user.email}</span>

                  <center><button
                    onClick={logout} className='logoutBtn button-5'>Log Out</button></center>
                  <a target='_blank' href="adminControlPanel"><button >Admin Panel</button></a>

                </div>}


              </Drawer.Body>
            </Drawer>
          </div>
          <div>
            <div className="modal-container">
              <ButtonToolbar>
                <Button onClick={handleOpena}><img style={{ borderRadius: "50%", width: "50px" }} src="./cartLogo.png" alt="" /></Button>
              </ButtonToolbar>

              <Modal
                backdrop={true}
                open={opena}

                onClose={handleClosea}
                onEntered={handleEntered}
                onExited={() => {
                  setRows(0);
                }}
              >
                <Modal.Header>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {rows ? (
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quia debitis ea est, cupiditate consequatur suscipit magnam similique reiciendis dolores, natus eaque inventore ad. Ducimus, eaque consequatur quibusdam maxime, autem rem, ratione pariatur beatae libero provident nihil nesciunt. Nobis ea exercitationem harum dolores pariatur nemo voluptates perspiciatis assumenda repellendus dolore?</span>
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <Loader size="md" />
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClosea} appearance="primary">
                    Ok
                  </Button>
                  <Button onClick={handleClosea} appearance="subtle">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>






        </div>

      </div>
    </div>


    <div className='mobileNav'><div className='d-flex mobileNav'>
      <div className='mobile' style={{ width: "25%" }}>
        <ButtonToolbar>
          <IconButton onClick={() => setOpenla(true)}>
            <img width="70%" src="./ad.com.png" alt="" />
          </IconButton>

        </ButtonToolbar>
        <Drawer size={'xs'} placement={'left'} open={openla} onClose={() => setOpenla(false)}>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Actions>
              <Button onClick={() => setOpenla(false)}>Cancel</Button>
              <Button onClick={() => setOpenla(false)} appearance="primary">
                Confirm
              </Button>
            </Drawer.Actions>
          </Drawer.Header>
          <Drawer.Body>

          </Drawer.Body>
        </Drawer></div>
      <div className='mobile' style={{ width: "40%", display: 'flex', justifyContent: "center" }}> <img width="70%" src="./logomobile.png" alt="" /> </div>
      <div className='d-flex mobileNav'>
        <ButtonToolbar>
          <IconButton onClick={() => handleOpen('right')}>
            <img style={{ borderRadius: "50%", width: "50px" }} src="./pngegg (1).png" alt="" />
          </IconButton>


        </ButtonToolbar>

        <Drawer size={'xs'} placement={placement} open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <Drawer.Title>Log In / Sign Up</Drawer.Title>
            <Drawer.Actions>

              <Button onClick={() => setOpen(false)} appearance="primary">
                Close
              </Button>
            </Drawer.Actions>
          </Drawer.Header>
          <Drawer.Body>
            {!register && !user.email && <center>

              <div className=''>
                <button onClick={signInUsingGoogle} className='googleBtn' > <img width="35px" style={{ marginRight: "8px" }} src="./google.png" alt="" /> Sign Up With Google</button>
                <button onClick={signInUsingFacebook} className='facebookBtn' > <img width="50px" style={{ marginRight: "12px" }} src="./facebook.png" alt="" />Facebook Sigh Up</button>

              </div>
              <div className='d-flex mt-3'>
                <div className='w-50'><hr /></div>
                <div className='pe-2 ps-2'><span>OR</span></div>
                <div className='w-50'><hr /></div>

              </div>
              <div className='text-start mt-4'>
                <form onSubmit={loginSubmitHandle} className="ms-3">

                  <span style={{ fontFamily: "poppins", fontWeight: "600" }}>Email Address</span>
                  <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                    <div className='me-2'>
                      <FiMail />
                    </div>
                    <input required
                      onChange={loginEmailField}
                      placeholder="Enter Your Email Address" style={{ border: "none" }} type="email" name="email" />
                  </div>
                  <span style={{ fontFamily: "poppins", fontWeight: "600" }}>Password</span>
                  <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                    <div className='me-2'>
                      <FiLock />
                    </div>
                    <input required
                      onChange={loginPassField}
                      placeholder="Enter Your Password" style={{ border: "none" }} type="password" name="password" />
                  </div>
                  <center className="mt-4"><b> <Link style={{ textDecoration: "none" }} to="/forgetpassword"><span style={{ color: "#ff725e" }}> <span >Forget Password</span> </span></Link> </b></center>
                  <button type="submit" className="loginBtn mt-3 ">Login</button>
                </form>
                <center className="mt-4"><b>New user? <span style={{ color: "#ff725e" }}> <span onClick={() => { setLogin() }}>Register Here</span> </span></b></center>

              </div>
            </center>}
            {register && <center>

              <div className=''>
                <button onClick={signInUsingGoogle} className='googleBtn' > <img width="30px" style={{ marginRight: "8px" }} src="./google.png" alt="" /> Sign Up With Google</button>
                <button onClick={signInUsingFacebook} className='facebookBtn' > <img width="40px" style={{ marginRight: "12px" }} src="./facebook.png" alt="" />Facebook Sigh Up</button>

              </div>
              <div className='d-flex mt-1'>
                <div className='w-50'><hr /></div>
                <div className='pe-2 ps-2'><span>OR</span></div>
                <div className='w-50'><hr /></div>

              </div>
              <div className='text-start mt-1'>
                <form onSubmit={submitRegister} className="ms-3">


                  <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                    <div className='me-2'>
                      <CgProfile />
                    </div>
                    <input required
                      onChange={nameField}
                      placeholder="Your Name" style={{ border: "none" }} type="name" name="name" />
                  </div>

                  <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                    <div className='me-2'>
                      <FiMail />
                    </div>
                    <input required
                      onChange={emailField}
                      placeholder="Email Address" style={{ border: "none" }} type="email" name="email" />
                  </div>



                  <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                    <div className='me-2'>
                      <FiLock />
                    </div>
                    <input required
                      onChange={passoneField}
                      placeholder="Password" style={{ border: "none" }} type="password" name="password" />
                  </div>
                  <div className="mx-auto" style={{ border: "1px solid #ff725e", padding: "8px", borderRadius: '5px', marginTop: "5px" }} className='d-flex'>
                    <div className='me-2'>
                      <FiLock />
                    </div>
                    <input required
                      onChange={passtwoField}
                      placeholder="Re-type Your Password" style={{ border: "none" }} type="password" name="password" />
                  </div>
                  {match && <div>
                    <center> <span style={{ color: 'red', fontFamily: "poppins" }}>! Password Not Match</span>
                    </center>
                  </div>}
                  <Radio required className='mt-2'> I agree to platform's <b><span style={{ color: "#ff725e" }}>Terms of Service</span></b> and <b><span style={{ color: "#ff725e" }}>Privacy Policy</span></b> </Radio>
                  <button type="submit" className="loginBtn mt-2 ">Register</button>
                </form>
                <center className="mt-4"><b>Already Registered? <span style={{ color: "#ff725e" }}> <span onClick={() => { setRegisters() }}>Login here</span> </span></b></center>

              </div>
            </center>}
            {user.email && <div>
              <h3 style={{ fontSize: "17px" }}>Personal Information</h3> <hr />
              <span style={{ borderBottom: "2px solid orange" }}> <b>Name</b> </span>
              <br /> <span style={{ fontSize: "18px", fontFamily: "poppins" }}>{user.displayName}</span> <br />
              <span style={{ borderBottom: "2px solid orange" }}> <br /> <b>Email</b> </span>
              <br /> <span style={{ fontSize: "18px", fontFamily: "poppins" }}>{user.email}</span>

              <center><button
                onClick={logout} className='logoutBtn button-5'>Log Out</button></center>
              <a target='_blank' href="adminControlPanel"><button >Admin Panel</button></a>

            </div>}


          </Drawer.Body>
        </Drawer>

        <div>
          <div className="modal-container">
            <ButtonToolbar>
              <Button onClick={handleOpena}><img style={{ borderRadius: "50%", width: "50px" }} src="./cartLogo.png" alt="" /></Button>
            </ButtonToolbar>

            <Modal
              backdrop={true}
              open={opena}

              onClose={handleClosea}
              onEntered={handleEntered}
              onExited={() => {
                setRows(0);
              }}
            >
              <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {rows ? (
                  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quia debitis ea est, cupiditate consequatur suscipit magnam similique reiciendis dolores, natus eaque inventore ad. Ducimus, eaque consequatur quibusdam maxime, autem rem, ratione pariatur beatae libero provident nihil nesciunt. Nobis ea exercitationem harum dolores pariatur nemo voluptates perspiciatis assumenda repellendus dolore?</span>
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <Loader size="md" />
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClosea} appearance="primary">
                  Ok
                </Button>
                <Button onClick={handleClosea} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
    </div></div>



  </>);
};

export default Navbars;