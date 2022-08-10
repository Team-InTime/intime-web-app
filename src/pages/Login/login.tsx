import './login.css';
import mobilehand from '../../assets/others/mobilehand.png';
import logo_purple from '../../assets/logos/logo_purple.svg';
import ball1 from '../../assets/geometry/Ball1.svg'
import ball2 from '../../assets/geometry/Ball2.svg'
import ball3 from '../../assets/geometry/Ball3.svg'
import locker from '../../assets/others/pwd_change.svg'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import React from 'react';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

export function Login(){
    return <section className='row'>
        <div className='col-md-4 login_side1'>
            <p className='h2 text_side1_1'>Manter a pontualidade nunca foi tão fácil.</p>
            <p className='h4 text_side1_2 h-25'>Gerencie as turmas e receba feedbacks de performance e desenvolvimento.</p>
            <img src={mobilehand} alt='Mobile Hand' className='img'/>
            
            <img src={ball1} alt='ball' style={{
                width: '7%',
                position: 'absolute',
                top: '0',
                left: '0'
            }}/>
            <img src={ball2} alt='ball' style={{
                width: '6%',
                position: 'absolute',
                top: '142px',
                left: '412px'
            }}/>
            <img src={ball3} alt='ball' style={{
                width: '8%',
                position: 'absolute',
                bottom: '0',
                left: '512px',
                zIndex: ''
            }}/>
        </div>
        <div className='col-md-8 login_side2'>
            <div className='login'>
                <img src={logo_purple} alt='Logo Intime' className='logo'/>
                <p style={{
                        fontFamily: 'poppins', 
                        color: '#484D58',
                        fontWeight: '700',
                        marginTop: '64px',
                        fontSize: '42px'
                    }
                }>
                    Seja Bem Vindo!
                </p>
                <p style={{
                        fontFamily: 'inter', 
                        color: '#484D58',
                        fontWeight: '700',
                        marginTop: '-20px',
                        fontSize: '32px',
                    }
                }>
                    Faça login para gerenciar suas informações.
                </p>
                <Form style={{marginTop: '80px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize: '24px'}}>Informe seu e-mail</Form.Label>
                        <Form.Control type="email" size='lg' style={{
                            backgroundColor: '#94A3B84D'
                        }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop: '64px'}}>
                        <Form.Label style={{fontSize: '24px'}}>Informe sua senha</Form.Label>
                        <Form.Control type="password" size='lg' style={{
                            backgroundColor: '#94A3B84D'
                        }}/>
                    </Form.Group>
                    <button type="submit" className='w-100 btn-entrar'>
                        Entrar Agora
                    </button>
                </Form>
                <div style={{
                    textAlign: 'center',
                    marginTop: '24px'
                }}> 
                    {/* Component that was used for render the modal */}
                    <ChangeModal></ChangeModal>
                </div>
            </div>
            
        </div>
    </section>
}


function MyVerticallyCenteredModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; } ) {
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily: "poppins", fontWeight: "600"}}>
            Recuperação de senha
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className='modalText'>
            <img src={locker} alt='Cadeado'/>
            <h5>Informe seu email para modificar sua senha</h5>
            <Form style={{width: "90%"}}>
                    <Form.Group className="" controlId="formBasicEmail">
                        <Form.Label style={{fontSize: '18px', marginBottom: '-7px'}}>E-mail</Form.Label>
                        <Form.Control type="email" size='lg' style={{
                            backgroundColor: '#94A3B84D',
                            width: "100%"
                        }}/>
                    </Form.Group>
                    <button type="submit" className='w-100 btn-entrar' style={{
                            height: "52px"
                        }}>
                        Verificar
                    </button>
            </Form>
        </div>
        </Modal.Body>
      </Modal>
    );
  }
  
  function ChangeModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <button type="button" className='pwdModalBtn' onClick={() => setModalShow(true)}>
            Esqueci minha senha?
        </button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }