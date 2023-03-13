import { TextInput, Button, Alert } from 'materialize-css';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

// Perform login logic here if using a backend
    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} open={showAlert} color='red'>
          Something went wrong with your login credentials!
        </Alert>
        <TextInput
          label='Email' 
          id='email' 
          name='email' 
          type='email' 
          value={userFormData.email} 
          onChange={handleInputChange}
          required
        >
          <span className='red-text'>Email is required!</span>
        </TextInput>
        <TextInput
          label='Password' 
          id='password' 
          name='password' 
          type='password' 
          value={userFormData.password} 
          onChange={handleInputChange}
          required
        >
          <span className='red-text'>Password is required!</span>
        </TextInput>
        <Button
          disabled={!(userFormData.email && userFormData.password)} 
          type='submit' 
          waves='light' 
          className='green'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default LoginForm;