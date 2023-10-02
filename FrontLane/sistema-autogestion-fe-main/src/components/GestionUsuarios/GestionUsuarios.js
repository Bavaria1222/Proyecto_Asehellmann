import React, { useState } from 'react';
import { Table, InputGroup, FormControl, Button, Container, Modal, Form } from 'react-bootstrap';

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([
    {
      numeroTrabajador: '001',
      identificacion: '123456789',
      nombre: 'Juan Pérez',
      lorem1: 'Lorem ipsum 1',
      lorem2: 'Lorem ipsum 2',
    },
    {
      numeroTrabajador: '002',
      identificacion: '987654321',
      nombre: 'María González',
      lorem1: 'Lorem ipsum 3',
      lorem2: 'Lorem ipsum 4',
    },
    {
      numeroTrabajador: '003',
      identificacion: '555555555',
      nombre: 'Pedro Rodríguez',
      lorem1: 'Lorem ipsum 5',
      lorem2: 'Lorem ipsum 6',
    },
    {
      numeroTrabajador: '004',
      identificacion: '111111111',
      nombre: 'Ana López',
      lorem1: 'Lorem ipsum 7',
      lorem2: 'Lorem ipsum 8',
    },
    {
      numeroTrabajador: '005',
      identificacion: '999999999',
      nombre: 'Carlos Martínez',
      lorem1: 'Lorem ipsum 9',
      lorem2: 'Lorem ipsum 10',
    },
    {
      numeroTrabajador: '006',
      identificacion: '777777777',
      nombre: 'Laura Sánchez',
      lorem1: 'Lorem ipsum 11',
      lorem2: 'Lorem ipsum 12',
    },
    {
      numeroTrabajador: '007',
      identificacion: '888888888',
      nombre: 'Miguel Pérez',
      lorem1: 'Lorem ipsum 13',
      lorem2: 'Lorem ipsum 14',
    },
    {
      numeroTrabajador: '008',
      identificacion: '444444444',
      nombre: 'Sofía García',
      lorem1: 'Lorem ipsum 15',
      lorem2: 'Lorem ipsum 16',
    },
    {
      numeroTrabajador: '009',
      identificacion: '666666666',
      nombre: 'Ricardo Fernández',
      lorem1: 'Lorem ipsum 17',
      lorem2: 'Lorem ipsum 18',
    },
    {
      numeroTrabajador: '010',
      identificacion: '222222222',
      nombre: 'Elena Torres',
      lorem1: 'Lorem ipsum 19',
      lorem2: 'Lorem ipsum 20',
    },
    {
      numeroTrabajador: '011',
      identificacion: '333333333',
      nombre: 'Javier Ramírez',
      lorem1: 'Lorem ipsum 21',
      lorem2: 'Lorem ipsum 22',
    },
    {
      numeroTrabajador: '012',
      identificacion: '777777777',
      nombre: 'Isabel Rodríguez',
      lorem1: 'Lorem ipsum 23',
      lorem2: 'Lorem ipsum 24',
    },
    {
      numeroTrabajador: '013',
      identificacion: '555555555',
      nombre: 'Diego López',
      lorem1: 'Lorem ipsum 25',
      lorem2: 'Lorem ipsum 26',
    },
    {
      numeroTrabajador: '014',
      identificacion: '888888888',
      nombre: 'Carmen Sánchez',
      lorem1: 'Lorem ipsum 27',
      lorem2: 'Lorem ipsum 28',
    },
    {
      numeroTrabajador: '015',
      identificacion: '111111111',
      nombre: 'Luis Martínez',
      lorem1: 'Lorem ipsum 29',
      lorem2: 'Lorem ipsum 30',
    },
  ]);
  const [busqueda, setBusqueda] = useState('');
  const [showAgregarModal, setShowAgregarModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);

  const editarUsuario = () => {
    // Implementa la lógica para editar un usuario aquí
    // Puedes acceder a los valores del usuarioSeleccionado para guardar los cambios
    // Luego, cierra el modal de edición con handleCloseEditarModal
    console.log(`Editar usuario: ${usuarioSeleccionado.nombre}`);
    handleCloseEditarModal();
  };

  const eliminarUsuario = () => {
    // Implementa la lógica para eliminar un usuario aquí
    if (usuarioAEliminar) {
      console.log(`Eliminar usuario: ${usuarioAEliminar.nombre}`);
      // Realiza la eliminación del usuario aquí
      // Después de eliminarlo, cierra el modal de confirmación
      handleCloseConfirmModal();
    }
  };

  const agregarUsuario = () => {
    // Implementa la lógica para agregar un usuario aquí
    // Puedes obtener los valores del formulario en el modal y agregarlos al estado de usuarios
    // Luego, cierra el modal con handleCloseModal
    handleCloseModal();
  };

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleShowAgregarModal = () => {
    setShowAgregarModal(true);
  };

  const handleCloseModal = () => {
    setShowAgregarModal(false);
  };

  const handleEditarModal = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setShowEditarModal(true);
  };

  const handleCloseEditarModal = () => {
    setShowEditarModal(false);
    setUsuarioSeleccionado(null);
  };

  const handleShowConfirmModal = (usuario) => {
    setUsuarioAEliminar(usuario);
    setShowConfirmModal(true);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
    setUsuarioAEliminar(null);
  };


  return (
    <Container>
      {/* Barra de búsqueda */}
      <InputGroup className="mb-3 mt-3">
        <FormControl
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button className="ms-4" variant="success" onClick={handleShowAgregarModal}>
          Añadir Usuario
        </Button>
      </InputGroup>

      {/* Tabla de usuarios */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Número de trabajador</th>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Lorem 1</th>
            <th>Lorem 2</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.numeroTrabajador}>
              <td>{usuario.numeroTrabajador}</td>
              <td>{usuario.identificacion}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.lorem1}</td>
              <td>{usuario.lorem2}</td>
              <td>
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={() => handleEditarModal(usuario)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleShowConfirmModal(usuario)} // Mostrar modal de confirmación
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

     {/*---------------------Modal para añadir usuario---------------------*/}
      <Modal show={showAgregarModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="numeroTrabajador">
              <Form.Label>Número de Trabajador</Form.Label>
              <Form.Control type="text" placeholder="Número de Trabajador" />
            </Form.Group>
            <Form.Group controlId="identificacion">
              <Form.Label>Identificación</Form.Label>
              <Form.Control type="text" placeholder="Identificación" />
            </Form.Group>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            {/* Agregar más campos acá si es necesario */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={agregarUsuario}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
     {/*---------------------Modal para editar usuario---------------------*/}
      <Modal show={showEditarModal} onHide={handleCloseEditarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNumeroTrabajador">
              <Form.Label>Número de Trabajador</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número de Trabajador"
                value={usuarioSeleccionado ? usuarioSeleccionado.numeroTrabajador : ''}
                onChange={(e) =>
                  setUsuarioSeleccionado({
                    ...usuarioSeleccionado,
                    numeroTrabajador: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formIdentificacion">
              <Form.Label>Identificación</Form.Label>
              <Form.Control
                type="text"
                placeholder="Identificación"
                value={usuarioSeleccionado ? usuarioSeleccionado.identificacion : ''}
                onChange={(e) =>
                  setUsuarioSeleccionado({
                    ...usuarioSeleccionado,
                    identificacion: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={usuarioSeleccionado ? usuarioSeleccionado.nombre : ''}
                onChange={(e) =>
                  setUsuarioSeleccionado({
                    ...usuarioSeleccionado,
                    nombre: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formLorem1">
              <Form.Label>Lorem 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lorem 1"
                value={usuarioSeleccionado ? usuarioSeleccionado.lorem1 : ''}
                onChange={(e) =>
                  setUsuarioSeleccionado({
                    ...usuarioSeleccionado,
                    lorem1: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formLorem2">
              <Form.Label>Lorem 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lorem 2"
                value={usuarioSeleccionado ? usuarioSeleccionado.lorem2 : ''}
                onChange={(e) =>
                  setUsuarioSeleccionado({
                    ...usuarioSeleccionado,
                    lorem2: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditarModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={editarUsuario}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

     {/*---------------------Modal para confirmar eliminación de usuario---------------------*/}
      <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuarioAEliminar && (
            <p>
              ¿Estás seguro que deseas eliminar a <strong>{usuarioAEliminar.nombre}</strong>?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarUsuario}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GestionUsuarios;