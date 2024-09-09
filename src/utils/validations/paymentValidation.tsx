import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { clearCart } from '../../redux/reducers/cartSlice';
import store from '../../redux/store';
import API from '../../service/api';
import { CartInterface } from '../interfaces/cartInterface';
import { paymentInterface } from '../interfaces/paymentInterface';

export const usePaymentFormik = ({onError}: {onError?: any}) => {

  const abortController = new AbortController()
  const abortSignal = abortController.signal
  const dispatch = useDispatch()

  const auth = store.getState().authReducer.auth
  const cart = store.getState().cartReducer.dataOrders
  const totalPrice = () => {
      return cart.reduce((total: number, product: CartInterface) => total + (product?.total_price || 0), 0)
  } 

  const formik = useFormik<paymentInterface>({
    initialValues: {
        channelCode: '',
        consumer_name: '',
        accountNumber: 0,
        description: '',
        post_code: '',
        address: '',
        amount: 0,
        shop_id: ''
    },
    validationSchema: Yup.object({
        consumer_name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('This field is required.'),
        description: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .required('This field is required.'),
        post_code: Yup.string()
        .min(5, 'Must be at least 5 characters.')
        .required('This field is required.'),
        address: Yup.string()
        .required('This field is required.'),
    }),
    onSubmit: async (values: any, {resetForm}) => {
      try {

        if(abortSignal.aborted) return

        const data = {
          consumer_id: auth?.consumer_id,
          email_consumer: auth?.email_consumer,
          telephone_consumer: auth?.telephone_consumer,
          accountHolderName: values.consumer_name,
          post_code: values.post_code,
          address: values.address,
          description: values.description,
          accountNumber: values.accountNumber,
          amount: totalPrice(),
          channelCode: values.channelCode,
          products: cart,
          shop_id: values.shop_id
        }
        
        console.log('data all', data)
        const response = await API.checkout(data)
        console.log('response checkout:', response)
        
        if (response.data.status === 200) {
            resetForm()
            dispatch(clearCart())
            const invoiceUrl = response.data.data.invoiceUrl;
            window.location.href = invoiceUrl;
        } else {
          onError(response.data.message)
        }
        
      } catch (error: any) {
        onError(error.data.message)
      }
    }
  });

  return formik

};
