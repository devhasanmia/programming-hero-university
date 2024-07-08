import { Button, Form, Input, Alert, Card, Row, Col } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading, isError, error, data }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    try {
      const result = await login(userInfo).unwrap();
      const user = await verifyToken(result.data.accessToken);
      dispatch(setUser({ user: user, token: result.data.accessToken }));
    } catch (e) {
      console.error(e);
    }
  };

  const getErrorMessage = () => {
    if (isError && error && error.response) {
      const { data } = error.response;
      if (data.message === "Password do not matched") {
        return "Password do not match. Please check your credentials.";
      }
      return data.message || "Login failed";
    }
    return null;
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <Card title="Login" bordered={false} style={{ padding: '20px', borderRadius: '8px' }}>
          <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
            {getErrorMessage() && (
              <Alert 
                message={getErrorMessage()} 
                type="error" 
                showIcon 
                style={{ marginBottom: '20px' }} 
              />
            )}
            
            <Form.Item
              label="ID"
              validateStatus={errors.id ? "error" : ""}
              help={errors.id ? errors.id.message : null}
            >
              <Controller
                name="id"
                control={control}
                rules={{ required: "ID is required" }}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              validateStatus={errors.password ? "error" : ""}
              help={errors.password ? errors.password.message : null}
            >
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => <Input.Password {...field} />}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading} block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
