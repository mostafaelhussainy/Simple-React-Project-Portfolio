import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
const SignUp = () => {
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const submitHandler = (data) => {
        console.log(data);
    };
    return (
        <div className="container py-5">
            <Form
                onSubmit={handleSubmit(submitHandler)}
                className="w-50 mx-auto"
            >
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register('email', { required: true })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email?.type === 'required' && (
                        <Form.Text className="text-danger">
                            Email is required.
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        {...register('username', { required: true })}
                        aria-invalid={errors.username ? 'true' : 'false'}
                    />
                    {errors.username?.type === 'required' && (
                        <Form.Text className="text-danger">
                            username is required.
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                        })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password?.type === 'required' && (
                        <Form.Text className="text-danger">
                            password is required.
                        </Form.Text>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <Form.Text className="text-danger">
                            minLength is 8 characters.
                        </Form.Text>
                    )}
                    {errors.password?.type === 'maxLength' && (
                        <Form.Text className="text-danger">
                            maxLength is 20 characters.
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register('confPassword', {
                            validate: (val) => {
                                if (watch('password') !== val) {
                                    return 'Your passwords is not match';
                                }
                            },
                        })}
                        aria-invalid={errors.confPassword ? 'true' : 'false'}
                    />
                    {errors.confPassword?.type === 'validate' && (
                        <Form.Text className="text-danger">
                            password is not match.
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        {...register('phone', {
                            required: true,
                            minLength: 10,
                        })}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.username?.type === 'required' && (
                        <Form.Text className="text-danger">
                            username is required.
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCheckbox">
                    <Controller
                        name="checkbox"
                        control={control}
                        render={({ field }) => (
                            <Form.Check
                                {...field}
                                type="checkbox"
                                label="Remember me"
                                {...register}
                            />
                        )}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;