import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useUser } from '../../contexts/UserContext';

const AdminHomePage = () => {
    const { user}= useUser();
    return (
        <Container className="mt-4">
             <h1 className="text-center mb-4">¡Bienvenido {user.id} al Módulo de Administrador!</h1>
          <Row>
            {/* Columna 1 */}
            <Col md={6}>
              {/* Módulo 1: Gestión de Usuarios */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Gestión de Usuarios</Card.Title>
                  <Card.Text>
                    Este módulo le permite reazlizar acciones de búsqueda, inserción, edición y eliminación de usuarios a la plataforma.
                  </Card.Text>
                </Card.Body>
              </Card>
    
              {/* Módulo 2: Lorem Ipsum 1 */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Lorem Ipsum 1</Card.Title>
                  <Card.Text>
                    Descripción del módulo de Lorem Ipsum 1.
                  </Card.Text>
                </Card.Body>
              </Card>
    
              {/* Módulo 3: Lorem Ipsum 2 */}
              <Card>
                <Card.Body>
                  <Card.Title>Lorem Ipsum 2</Card.Title>
                  <Card.Text>
                    Descripción del módulo de Lorem Ipsum 2.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
    
            {/* Columna 2 */}
            <Col md={6}>
              {/* Módulo 4: Lorem Ipsum 3 */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Lorem Ipsum 3</Card.Title>
                  <Card.Text>
                    Descripción del módulo de Lorem Ipsum 3.
                  </Card.Text>
                </Card.Body>
              </Card>
    
              {/* Módulo 5: Lorem Ipsum 4 */}
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Lorem Ipsum 4</Card.Title>
                  <Card.Text>
                    Descripción del módulo de Lorem Ipsum 4.
                  </Card.Text>
                </Card.Body>
              </Card>
    
              {/* Módulo 6: Lorem Ipsum 5 */}
              <Card>
                <Card.Body>
                  <Card.Title>Lorem Ipsum 5</Card.Title>
                  <Card.Text>
                    Descripción del módulo de Lorem Ipsum 5.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
};

export default AdminHomePage;