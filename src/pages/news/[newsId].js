import RootLayout from "@/components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const NewsDetailsPage = ({ news }) => {
  // const { news} = useGetSingleNewsQuery()
  const { Meta } = Card;
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 26, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Image
            src={news?.image_url}
            width={500}
            height={300}
            responsive
            alt="news image"
          />
        </Col>
        <Col key={news.id} className="gutter-row" span={12}>
          <h1 style={{ fontSize: "25px" }}>{news?.title}</h1>
          <span>
            <ProfileOutlined />
            {news?.author}
          </span>
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
            <span style={{ fontSize: "20px" }}>
              <CalendarOutlined />
              {news?.release_data}
            </span>
            <span style={{ fontSize: "20px" }}>
              <CommentOutlined />
              {news?.comment_count}
            </span>
            <span style={{ fontSize: "20px" }}>
              <ProfileOutlined />
              {news?.category}
            </span>
          </p>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            {news?.description}
          </p>
          {/* <h5>Written by: {news?.author}</h5> */}
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();

//   const paths = newses.map((news) => ({
//     params: { newsId: news.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
};
