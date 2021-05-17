import React, {useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/axiosHooks';
import { Navbar } from 'react-bootstrap';
import { Container, Col, Row, Card } from 'react-bootstrap';

import './todo.scss';


const ToDo = (props) => {

  const [list, _addItem, _toggleComplete, _getTodoItems, _deleteTask] =
  useAjax();

  useEffect(_getTodoItems);

  useEffect(() => {
    document.title =
      "To DO- complete: " +
      list.filter((item) => !item.complete).length +
      "/" +
      "Incomplete: " +
      list.filter((item) => item.complete).length;
  });

  return (
    <>
      <header>
        <Navbar className="CountBar" bg="dark" variant="dark" style={{ marginTop: '1rem', width: '55%', marginLeft: '22%' }} >
          <Navbar.Brand>
            To Do List Manger {list.filter(item => !item.complete).length}
          </Navbar.Brand>
        </Navbar >
      </header>

      <Container fluid='md' style={{ marginTop: '1rem' }}>
        <Row className='justify-content-md-center'>
          <Card style={{ width: '18rem', height: '30%' }}>
            <Card.Body>
              <Card.Text>
                <Col><TodoForm handleSubmit={_addItem} /></Col>
              </Card.Text>
            </Card.Body>
          </Card>

          <Col sm={4} md={{ span: 4, offset: 1 }}> <TodoList
            list={list}
            handleComplete={_toggleComplete}  handleDelete ={_deleteTask} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDo;
