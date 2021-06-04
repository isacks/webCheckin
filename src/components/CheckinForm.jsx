import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
function CheckinForm({addClient}) {

    

    const submitHandler = (e) => {
        addClient("Hola mundo", e);
        const modal = document.querySelector('#exampleModal');
        console.log(modal);
        modal.hide();
        e.preventDefault();
    }
    return (
        <div className="container col-10">
            <h1>Tarjeta de Registro Hotelero</h1>
            <form className="row" onSubmit={(e)=>submitHandler(e)}>
                {/* DATOS PERSONALES DEL CLIENTE */}
                <div className="col-md-12 h4 bg-light p-3">Información Personal del Cliente</div>
                <div className="form-group col-md-6">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" name="name" />
                </div>
                <div className="form-group col-md-6">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Apellido" name="surname" />
                </div>
                <div className="form-group col-md-3">
                    <label>Fecha de nacimiento</label>
                    <input type="date" className="form-control" name="bday" />
                </div>
                <div className="form-group col-md-4">
                    <label>ID</label>
                    <input type="id" className="form-control" placeholder="Cédula o Pasaporte" name="id" />
                </div>
                <div className="form-group col-md-3">
                    <label>Nacionalidad</label>
                    <input type="text" className="form-control" placeholder="Nacionalidad" name="national" />
                </div>
                <div className="form-group col-md-12">
                    <label>Dirección</label>
                    <input type="text" className="form-control" placeholder="Dirección" name="address" />
                </div>
                <div className="form-group col-md-4">
                    <label>Ciudad</label>
                    <input type="text" className="form-control" placeholder="Ciudad" name="city" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="country">País</label>
                    <input type="text" className="form-control" placeholder="País" name="country" />
                </div>

                <div className="form-group col-md-6">
                    <label>E-mail</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="form-group col-md-4">
                    <label>Teléfono</label>
                    <input type="tel" className="form-control" name="phone" />
                </div>
                {/* DATOS DE LA RESERVA */}
                <div className="col-md-12 h4 bg-light p-3">Información de la Reserva</div>
                <div className="form-group col-md-4">
                    <label>Agencia</label>
                    <select className="form-select">
                        <option defaultValue="">Seleccione...</option>
                        <option>Booking</option>
                        <option>Despegar</option>
                        <option>HotelBeds</option>
                        <option>Particular</option>
                        <option>Corporativo</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label>Plan</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Tipo de habitación</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Clase de habitación</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Depósitos</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Transporte</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Forma de pago</label>
                    <select className="form-select">
                        <option defaultValue="Seleccione..." disabled>Seleccione...</option>
                        <option>EFECTIVO</option>
                        <option>VISA</option>
                        <option>MASTERCARD</option>
                        <option>CLAVE</option>
                        <option>AMERICAN EXPRESS</option>
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label>Importe total de la estancia</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Habitación</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-2">
                    <label>Adultos</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group col-md-2">
                    <label>Niños</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Entrada</label>
                    <input type="datetime-local" className="form-control" />
                </div>
                <div className="form-group col-md-4">
                    <label>Salida</label>
                    <input type="datetime-local" className="form-control" />
                </div>
                
                <div className="form-group col-md-12 p-3 mt-3 bg-light">
                    <button className="btn btn-secondary mr-2">Cancelar</button>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Aceptar
                    </button>
                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">EN CONSTRUCCION</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                EN CONSTRUCCION
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckinForm;
