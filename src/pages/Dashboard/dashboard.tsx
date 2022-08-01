import { Button } from 'antd';
import {
  FilterOutlined
} from '@ant-design/icons';

export function Dashboard() {
  return (
    <div>
      <div className="page-header border" style={{
            margin: '0px',
            padding: 24,
            height: "auto"
          }}>
        <div className="d-sm-flex m-b-5 align-items-center justify-content-between">
          <div className="media align-items-center m-b-5">
            <div className="media-body m-l-15">
              <h5 className="mb-0">Dados Gerais</h5>
              <span className="text-gray font-size-13">Consulte os dados de todas as turmas em tempo real, analise as estatísticas e melhore o desempenho escolar.</span>
            </div>
          </div>
          <div className="m-b-5">
          <Button type="primary" className="d-flex justify-content-center align-items-center">
            <FilterOutlined />
            <span>Filtros</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
