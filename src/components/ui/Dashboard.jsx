import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Card, Col, Row } from "antd";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Doanh thu",
        data: [12, 19, 3, 5, 2, 3, 7],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Học sinh", "Quản lý", "Khách hàng"],
    datasets: [
      {
        data: [12, 19, 26],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Thông tin chung </h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Doanh thu" bordered={false}>
           1.448.920 đ
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tổng khách hàng" bordered={false}>
            34
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Phiếu nhập hàng" bordered={false}>
            25
          </Card>
        </Col>
      </Row>
      <div className="flex flex-wrap justify-between mt-6">
        {/* Line chart for revenue */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <h3 className="text-lg font-medium mb-4">
            Thống kê đơn hàng doanh thu
          </h3>
          <div className="bg-white border rounded-lg shadow-md p-4">
            <Line data={lineChartData} />
          </div>
        </div>

        {/* Doughnut chart for user statistics */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <h3 className="text-lg font-medium mb-4">Thống kê người dùng</h3>
          <div className="bg-white border rounded-lg shadow-md p-4">
            <Doughnut data={doughnutChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
