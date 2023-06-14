import { Button, Layout, Typography } from "antd";
import Row from "../../components/shared/Row";
import { formatTime } from "../../utils/TimeUtils";
import { useContent } from "./useContent";
import Col from "../../components/shared/Col";

const Content = () => {

  const { handleOnStart, handleOnStop, handleOnReset, timeLeft } = useContent();

  return (
    <Layout.Content className="d-flex align-items-center">
      <Row justify="center" className="w-100">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex justify-content-center">
          <Typography.Title style={{ fontSize: "12rem", color: "white" }}>{formatTime(timeLeft)}</Typography.Title>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex justify-content-center">
          <Button className="me-3" onClick={handleOnStart}>Start</Button>
          <Button className="me-3" onClick={handleOnStop}>Stop</Button>
          <Button onClick={handleOnReset}>Reset</Button>
        </Col>
      </Row>
    </Layout.Content>
  );
}

export default Content;