import React, { useState } from "react";
import { Layout, Slider, Typography, Row, Col, Card } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const BMICalculator = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const getStatus = (bmi) => {
    if (bmi < 18.5) return "کمبود وزن";
    if (bmi >= 18.5 && bmi < 24.9) return "وزن نرمال";
    if (bmi >= 25 && bmi < 29.9) return "اضافه وزن";
    return "چاقی تپل";
  };

  const bmi = calculateBMI();
  const status = getStatus(bmi);

  return (
    <Layout className="container">
      <Header
        className="header"
        style={{ backgroundColor: "#17202a", padding: "20px" }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={3} style={{ color: "white", margin: 0 }}>
              <span>BMI</span> محاسبه
            </Title>
          </Col>
        </Row>
      </Header>
      <Content className="content" style={{ padding: "20px" }}>
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <Card
              bordered={false}
              style={{ backgroundColor: "#001529", color: "white" }}
            >
              <Title level={4} style={{ textAlign: "center", color: "white" }}>
                <span>BMI</span> محاسبه
              </Title>
              <div className="calculator">
                <div className="weight">
                  <label className="form-label" style={{ color: "white" }}>
                    وزن (Kg): <span className="weight-value">{weight}</span>
                  </label>
                  <Slider
                    min={1}
                    max={250}
                    step={1}
                    value={weight}
                    onChange={setWeight}
                  />
                </div>
                <div className="height">
                  <label className="form-label" style={{ color: "white" }}>
                    قد (cm): <span className="height-value">{height}</span>
                  </label>
                  <Slider
                    min={100}
                    max={250}
                    value={height}
                    onChange={setHeight}
                  />
                </div>
              </div>
              <div className="result">
                <Title
                  level={5}
                  style={{ textAlign: "center", color: "white" }}
                >
                  BMI: <span className="bmi-value">{bmi}</span> <br />
                  وضعیت: <span className="bmi-status">{status}</span>
                </Title>
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default BMICalculator;
