import React, { Fragment } from 'react'


export const Inicio = () => (
    <Fragment>
    <div className="container">
    <h2 className="titulo-fucsia text-center">Tablero Informativo</h2> 
        <div className="row pt-5">
            <div className="col-md-6">
                <div className="caja-blanca shadow mb-3">
                    <div className="text-center pt-5 color-black">Plaza Vea</div>
                        <div className="sub-caja">
                            <p className="sub-caja-titulo mt-2 pl-2"></p>
                            <span className="sub-caja-numero ml-5"></span>
                        </div>
                </div>
                <div className="caja-fucsia shadow mb-3">
                    <div className="text-center pt-5">Entel Marketing</div>
                        <div className="sub-caja-right">
                            <p className="sub-caja-titulo mt-2 pl-2"></p>
                            <span className="sub-caja-numero ml-5"></span>
                        </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="caja-teal shadow mb-3">
                    <div className="text-center pt-5">Tarjeta Oh</div>
                        <div className="sub-caja">
                            <p className="sub-caja-titulo mt-2 pl-2"></p>
                            <span className="sub-caja-numero ml-5"></span>
                        </div>
                </div>
                <div className="caja-teal-dark shadow mb-3">
                    <div className="text-center pt-5">UPN</div>
                        <div className="sub-caja-right">
                            <p className="sub-caja-titulo mt-2 pl-2"></p>
                            <span className="sub-caja-numero ml-5"></span>
                        </div>
                </div>
            </div>
        </div>


    </div>
    </Fragment>
)