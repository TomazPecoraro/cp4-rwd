import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import aparelhosData from '../../data/aparelhosData.jsx';
import styles from './index.module.css';

function VisualizarAparelho() {
  const { id } = useParams();
  const navigate = useNavigate();
  const aparelho = aparelhosData.find((item) => item.id === parseInt(id));
  const handleDelete = () => {
    const index = aparelhosData.findIndex((item) => item.id ===
    aparelho.id);
    if (index != -1) {
      aparelhosData.splice(index, 1);
      navigate('/aparelhos');
    }
  };

  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Detalhes de {aparelho.nome}</h2>
      <img
        src={aparelho.imagem}
        alt={aparelho.nome}
        className={styles.smartphoneImage}
      />
      <p className={styles.descricaoExtensa}>{aparelho.descricaoExtensa}</p>
      <p className={styles.preco}>Preço: ${aparelho.preco}</p>
      <button onClick={handleDelete} className={styles.goBackLink}>Excluir Aparelho</button>
      <button onClick={() => navigate(`/aparelhos/${id}/editar`)} className={styles.goBackLink}>Editar Aparelho</button>
      <button onClick={() => navigate('/aparelhos')} className={styles.goBackLink}>Voltar lista de Aparelhos</button>
    </div>
  );
}

export default VisualizarAparelho;
