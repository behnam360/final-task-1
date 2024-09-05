import { Form, Input, Button, message } from "antd";

import "./LoginForm.css"; // فایل CSS برای استایل‌های خاص

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success("ورود موفقیت‌آمیز بود!");
  };

  const onFinishFailed = (errorInfo) => {
    message.error("لطفاً خطاهای فرم را برطرف کنید و دوباره تلاش کنید.");
  };

  return (
    <div className="login-form">
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "لطفاً نام کاربری خود را وارد کنید!" },
            { min: 6, message: "نام کاربری باید حداقل ۶ کاراکتر باشد!" },
          ]}
        >
          <Input placeholder="نام کاربری" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "لطفاً ایمیل خود را وارد کنید!" },
            { type: "email", message: "ایمیل باید معتبر باشد!" },
          ]}
        >
          <Input placeholder="ایمیل" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "لطفاً رمز عبور خود را وارد کنید!" },
            { min: 8, message: "رمز عبور باید حداقل ۸ کاراکتر باشد!" },
            {
              pattern: /^(?=.*[A-Za-z]).*$/,
              message: "رمز عبور باید حداقل یک حرف داشته باشد!",
            },
          ]}
        >
          <Input.Password placeholder="رمز عبور" />
        </Form.Item>

        <Form.Item
          name="repassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "لطفاً تکرار رمز عبور را وارد کنید!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("رمزهای عبور مطابقت ندارند!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="تکرار رمز عبور" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            ورود
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
