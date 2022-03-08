import * as Yup from 'yup';
import messages from './messages';

export default Yup.object({
  key: Yup.string().required(messages.required),
});
