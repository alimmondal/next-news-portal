import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  return (
    <>
      <h1>#TODAY HIGHLIGHT</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        {allNews?.length > 0 &&
          allNews?.map((news) => (
            <Col key={news.id} className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <Image
                    src={news?.image_url}
                    width={500}
                    height={200}
                    responsive
                    alt="news image"
                  />
                }
              >
                <Meta title={news?.title} />
                <div
                  className="line"
                  style={{
                    height: "5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "100%",
                  }}
                ></div>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0",
                    fontSize: "12px",
                  }}
                >
                  <span>
                    <CalendarOutlined />
                    {news?.release_data}
                  </span>
                  <span>
                    <CommentOutlined />
                    {news?.comment_count}
                  </span>
                  <span>
                    <ProfileOutlined />
                    {news?.category}
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {news?.description.length > 100
                    ? news?.description.slice(0, 70) + "..."
                    : news?.description}
                </p>
                <Link href={`/news/${news?.id}`}>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      color: "gray",
                      margin: "10px 0",
                      fontSize: "12px",
                    }}
                  >
                    Keep Reading <ArrowRightOutlined />
                  </p>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default AllNews;
