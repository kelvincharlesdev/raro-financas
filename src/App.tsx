import { Dash } from './components/Dash';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Transations } from './components/Transations';
import { useState } from 'react';
import { ITransaction } from './types';

const transactionData: ITransaction[] = [
  {
    nome: 'Bônus',
    data: '10/01/2023',
    categoria: 'Metas Batidas',
    valor: '8000',
    tipo: '+'
  },
  {
    nome: 'Férias',
    data: '10/21/2023',
    categoria: 'Viagem',
    valor: '3200',
    tipo: '-'
  }
];

function App() {
  const [mostrarModal, setMostratModal] = useState<boolean>(false);
  const [transations, setTransations] =
    useState<ITransaction[]>(transactionData);

  const somaDash = transations.reduce(
    (acc, itemTransaction) => {
      if (itemTransaction.tipo === '+') {
        acc.entradas += Number(itemTransaction.valor);
        acc.total += Number(itemTransaction.valor);
      } else {
        acc.saidas += Number(itemTransaction.valor);
        acc.total -= Number(itemTransaction.valor);
      }

      return acc;
    },
    {
      entradas: 0,
      saidas: 0,
      total: 0
    }
  );

  return (
    <>
      <Header />
      <main>
        <Modal
          mostrarModal={mostrarModal}
          fecharModal={(mostrarModal: boolean) => setMostratModal(mostrarModal)}
          callBack={transacaoInformacao => {
            setMostratModal(false);
            setTransations(transacaoAtual => [
              transacaoInformacao,
              ...transacaoAtual
            ]);
          }}
        />
        <Dash
          callback={() => setMostratModal(true)}
          entradas={somaDash.entradas.toString()}
          saidas={somaDash.saidas.toString()}
          saldo={somaDash.total.toString()}
        />

        <Transations transactions={transations} />
      </main>
      <Footer />
    </>
  );
}

export default App;
