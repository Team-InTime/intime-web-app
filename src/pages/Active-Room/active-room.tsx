import { Button } from 'antd';

import {
  DashboardOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import  DataTable  from '../../components/DataTable/dataTable'
import  DataSelect  from '../../components/DataTable/DataTableSelect/dataTableSelect'

export function ActiveRoom() {
  return (
    <div>
      <div
        className="page-header border"
        style={{
          margin: '0px',
          padding: 24,
          height: 'auto',
        }}
      >
        <div className="d-sm-flex m-b-5 align-items-center justify-content-between">
          <div className="media align-items-center m-b-5">
            <div className="media-body m-l-15">
              <h5 className="mb-0">Análise de presenças</h5>
              <span className="text-gray font-size-13">
                Visualize e gerencie os dados de cada turma, filtrando seus alunos e
                corrigindo pendências justificadas.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button type="default" className="d-flex justify-content-center align-items-center">
            <Link to={'/dashboard'}style={{textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <DashboardOutlined />
             <span style={{marginLeft: '5px'}}>Dashboard</span>
             </Link>
            </Button>
          </div>
        </div>
      </div> 
      <div className=" m-b-5 p-4 align-items-center justify-content-between">
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <DataSelect />
            <DataSelect />
            <DataSelect />
            <DataSelect />
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
}
