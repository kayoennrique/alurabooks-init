import { useEffect, useState } from 'react';
import PageSection from '../../components/PageSection';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../store/contexts/cart';

const Order = () => {
  const navigation = useHistory();
  const {
    state: { books },
    actions: { resetCart },
  } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (books.length) {
      setTimeout(() => {
        setIsLoading(false);
        resetCart();
      }, 3000);
    }
  }, [books]);

  return (
    <>
      <PageSection>
        <h1 className='text-2xl md:text-4xl text-white font-bold my-5'>Finalizar compra</h1>
      </PageSection>
      <div className='mt-20 w-full items-center justify-center flex'>
        {isLoading ? (
          <img src='/loading.gif' alt='carregando' width={200} />
        ) : (
          <div className='flex-row justify-center'>
            <h2 className='text-lg font-semibold'>
              Tudo certo com seu pedido! Agradecemos pela compra
            </h2>
            <img src='/pedido_confirmado.webp' alt='Pedido confirmado' />
            <button
              className='w-full rounded-lg py-3 bg-[#EB9B00] text-white font-bold mt-4'
              onClick={() => navigation.push('/')}
            >
              Voltar ao inicio
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Order;