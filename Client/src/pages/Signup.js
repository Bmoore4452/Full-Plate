import { TextInput, Button, Alert } from 'materialize-css';

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    setUserFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>

        <TextInput >
          <Form.Label htmlFor='username'>Name</Form.Label>
          <Form.Control
            type='text' 
            placeholder='Your name' 
            name='name' 
            onChange={handleInputChange} 
            value={userFormData.username}
            required
          />
          <span type='invalid'>Name is required!</span>
        </TextInput>

        <TextInput >
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email' 
            placeholder='Your email address' 
            name='email' 
            onChange={handleInputChange} 
            value={userFormData.email}
            required
          />
          <span type='invalid'>Email is required!</span>
        </TextInput>

        <TextInput>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password' 
            placeholder='Your password' 
            name='password' 
            onChange={handleInputChange} 
            value={userFormData.password}
            required
          />
          <span type='invalid'>Password is required!</span>
        </TextInput>

        <Button
          node='button'
          type='submit'
          waves='light'
          className='blue'
        >
          Sign Up
          <Icon right>send</Icon>
        </Button>  
      </form>
    </>
  );
};

export default SignupForm;