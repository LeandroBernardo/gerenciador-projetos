import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ClienteList.css'

interface Atividade {
  descricao: string
  status: string
}

interface Cliente {
  id: number
  nome: string
  atividades: Atividade[]
}

const ClienteList: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/clientes')
      .then((response) => {
        setClientes(response.data)
      })
      .catch((error) => {
        console.error('Erro na requisição:', error)
      })
  }, [clientes, setClientes])

  return (
    <div className="cliente-list">
      {clientes.map((cliente) => (
        <div key={cliente.id} className="cliente-item">
          <h4>{cliente.nome}</h4>
          {cliente.atividades.map((atividade, index) => (
            <div key={index} className="atividade-item">
              <p>{atividade.descricao}</p>
              <p
                className={`${
                  atividade.status === 'Em andamento'
                    ? 'em-andamento'
                    : atividade.status === 'Não iniciada'
                    ? 'nao-iniciada'
                    : atividade.status === 'Finalizada'
                    ? 'finalizada'
                    : ''
                }`}
              >
                {atividade.status}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ClienteList
