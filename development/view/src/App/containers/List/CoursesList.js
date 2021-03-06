import React from 'react';
import {Row, Col, Card, Container, Button, Modal, Spinner, Form} from 'react-bootstrap';
import UcFirst from "../../components/UcFirst";
import Aux from "../../../hoc/_Aux";

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

import { connect } from 'react-redux';
//action creator:
import { fetchCourses } from '../../../actions/fetchCourses';


import { getCourses } from '../../../selectors/usuarios';
//creador de tablas
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { multiSelectFilter, Comparator  } from 'react-bootstrap-table2-filter';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

//import pdf component
import ListConcentradoUsuarios from './../../components/pdf/Listados/ListConcentradoUsuarios';
import RegistroUsuario from './../../components/pdf/RegistroUsuario';

import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
//services for filtering
import {filterCourseUsers} from './../../services';

//form
class CursosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
          //obtiene la consulta que hace el fetch getLogs()  
          open: false,
          pdfLogs:[],
          userType:3,
          qualityFilter:()=>{},
          userCourses:[],
        };
      }
    openPDFmodal(idCurso, idUsuario, userName){
        this.setState({ open: true });
    };

    closePDFmodal = () => {   
        this.setState({ open: false });                
    };

    componentDidMount(){        
       // const courses =  getCourses(urlCourses) 
       // courses.then((coursesRes) => (this.setState({ courses: coursesRes})  ))                             
        if(this.props.courses.length == 0){     
            this.props.fetchCourses();                                         
        }  
    }    



    showCourses(){ 
        
        //formato de cada row de usuario profesor/alumno             

        function tituloFormat(column, colIndex) {
            return (
              <h5 className="card-title headerbtable col-xs-12 col-md-6 col-lg-4">Cursos</h5>
            );
          }
        
        const MyExportCSV = (props) => {
            const handleClick = () => {
              props.onExport();
            };
            return (<Row className="button-header-container">
                        <Col xs={0} sm={6}>.</Col>
                        <Col xs={6}>
                            <Col  xs={12} sm={9} md={7}>
                            </Col>
                            <Col  xs={12} sm={9} md={7} >                
                            <Button className="btn_left" variant={'outline-primary'}
                                    onClick={ handleClick}><UcFirst text="CSV" /></Button>
                            </Col> 
                        </Col> 
                                                              
                    </Row>
                    
            );
          };

          //course filter variables
          const selectOptions = {
          };
          
            function textFormatterDatefirst(cell, row) {                
                return (
                <Row>                   
                    <Col className="format-expanse-user"><h6 className="row-text-bt"><i className="fa fa-circle text-c-green f-10 m-r-15"/>
                         {  row.lastaccess.length >=  2 ?
                            moment.unix(row.lastaccess).format("LL"):
                            "Sin actividad"} </h6>
                    </Col>       
    
                </Row>
                );          
            } 
            function textFormatterDatelast(cell, row) {                
                return (
                <Row>                   
                    <Col className="format-expanse-user"><h6 className="row-text-bt"><i className="fa fa-circle text-c-green f-10 m-r-15"/>
                         {  row.firstaccess.length >=  2 ?
                            moment.unix(row.firstaccess).format("LL"):
                            "Sin actividad"} </h6>
                    </Col>       
    
                </Row>
                );          
            } 
            function formatname(cell, row){
                return  row.fullname; 
            }
            function formatProfesor(cell, row){
                return row.profesor.map(function(prof,index, arr){                        
                    return `${prof.firstname} ${prof.lastname}`
                })  
            }
            function formatdate(cell, row){
                if(row.lastaccess){
                    return row.lastaccess.length >=  2 ?
                            moment.unix(row.lastaccess).format("LL"):
                            "Sin actividad"
                }else if(row.firstaccess){
                    return row.firstaccess.length >=  2 ?
                            moment.unix(row.firstaccess).format("LL"):
                            "Sin actividad"
                }
                
            }



            function textFormatterName(cell, row) {
                return (
                    <Row className="name-format">                
                        <Col><p><strong>{ row.fullname }</strong></p></Col>              
                    </Row>
                );          
               } 
            function textProfesorFormatter(cell, row) {
                return row.profesor.map(function(prof,index, arr){                        
                    return <p>{`${prof.firstname} ${prof.lastname}`}</p>                                                                                                         
                })        
            } 
        //creacion y formato de las columnas de la tabla
        //con collapse
        const columns = [{
            dataField: 'courseid',
            csvFormatter: formatname,
            text: 'Nombre',
            title:false,
           // headerFormatter: tituloFormat,
          // formatter: cell => selectOptions[cell],
          formatter: textFormatterName,
            align: 'left',
            csvText: 'Nombre',
            classes: 'columnbtable',
          },
          {
            dataField: 'fullname',
            text: 'Profesores',
            formatter: textProfesorFormatter,
            csvFormatter: formatProfesor,
           // headerFormatter: tituloFormat,
            align: 'left',
            csvText: 'Profesores',
            classes: 'columnbtable',
          }];


        //listado de profesores viene de redux en el actionCreator fetchProfesores        
        if(this.state.userCourses){
           return  (    
            <Row className="tableUsers-list">                
                <Col xs="12">
                <ToolkitProvider
                    keyField="id"
                    data={ this.state.userCourses }
                    columns={ columns }
                    exportCSV={ { onlyExportFiltered: true, 
                        exportAll: false,  
                        noAutoBOM: false,
                        fileName: "Cursos.csv"
                        } }>
                    {
                        props => (
                            <Col xs="12" className="cont-table-csv-course">

                            <MyExportCSV { ...props.csvProps } />
                                                    
                            <BootstrapTable 
                                { ...props.baseProps }   
                                onDataSizeChange={ this.handleDataChange }                                       
                                condensed
                                striped
                                hover
                                bordered={ false }
                                pagination={ paginationFactory()}
                                noDataIndication="No se encontraron alumnos"
                                filter={ filterFactory() }/>
                        </Col>
                        )
                    }
                </ToolkitProvider>
                </Col>
            </Row>                                          

           )

        }
    }


    render() {     
        if(this.state.userCourses.length == 0 && this.props.courses.length >0){           
            const cursos = filterCourseUsers(this.props.courses)                                         
            this.setState({userCourses:cursos})
        }              
        return (   
            <Aux >
                
                <Modal show={this.state.open} onHide={this.closePDFmodal}
                       dialogClassName="modal-pdf">
                    <Modal.Header closeButton>
                    <Modal.Title>Concentrado de tutores</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.props.courses.length > 0 ? <ListConcentradoUsuarios data={this.props.courses} type="alumnos"></ListConcentradoUsuarios> :  
                            <Row className="justify-content-md-center"><Col xs="12" class="spinner_col"><Spinner animation="grow" variant="info" />Cargando...</Col></Row>
                        }           
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.closePDFmodal}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
                
                <Row className="header-container">                                                                           
                    <Col  xs="6" sm="3" className="header-new-format">CURSOS </Col>
                    <Col   xs="2" sm="1"  className="header-count">{  this.state.userCourses.length  }</Col>       
                </Row>   
           
                <Row >                       
               
                    <Col md={12} xl={12}>                        
                        <Card >
                            
                            <Card.Body className='px-0 py-2' >
                                
                                {
                                    this.showCourses()
                                }
                                
                                
                            </Card.Body>
                        </Card>
                    </Col>                                                                                        
                </Row>

            </Aux>
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCourses: () => dispatch(fetchCourses())
    }
};

//hace posible que se puedan user las variables de redux
const mapStateToProps = state => ({
  //  alumnos: getAlumnos(state),
    courses: getCourses(state)
});

//connect(props variable,props.functions reducers);
  export default withRouter(connect(mapStateToProps, mapDispatchToProps )(CursosList));