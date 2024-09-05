import React, { useState, useRef } from "react";
import { Button, Slider, Row, Col, Typography, Image } from "antd";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepForwardOutlined,
  StepBackwardOutlined,
  RetweetOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import img1 from "../../image/img1.jpg";
import img2 from "../../image/img2.jpg";
import img3 from "../../image/img3.jpg";
import audio1 from "../../media/01 Hearts Entwined.mp3";
import audio2 from "../../media/02 Peace.mp3";
import audio3 from "../../media/03 Darkness to Light.mp3";

const { Title } = Typography;

const playList = [
  {
    id: 1,
    title: "01 Hearts Entwined",
    imgSrc: img1,
    audioSrc: audio1,
  },
  {
    id: 2,
    title: "02 Peace",
    imgSrc: img2,
    audioSrc: audio2,
  },
  {
    id: 3,
    title: "03 Darkness to Light",
    imgSrc: img3,
    audioSrc: audio3,
  },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) =>
      isShuffle
        ? Math.floor(Math.random() * playList.length)
        : (prev + 1) % playList.length
    );
  };

  const prevTrack = () => {
    setCurrentTrack((prev) =>
      isShuffle
        ? Math.floor(Math.random() * playList.length)
        : (prev - 1 + playList.length) % playList.length
    );
  };

  const onEnded = () => {
    if (isRepeat) {
      audioRef.current.play();
    } else {
      nextTrack();
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        padding: "20px",
        borderRadius: "10px",
        color: "white",
      }}
    >
      <Row justify="center">
        <Col>
          <Image width={300} src={playList[currentTrack].imgSrc} />
          <Title level={4} style={{ color: "white" }}>
            {playList[currentTrack].title}
          </Title>
          <audio
            ref={audioRef}
            src={playList[currentTrack].audioSrc}
            onEnded={onEnded}
          />
          <Slider
            defaultValue={0}
            tooltipVisible={false}
            style={{ width: "100%" }}
            onChange={(value) => {
              audioRef.current.currentTime =
                (value / 100) * audioRef.current.duration;
            }}
          />
          <Row justify="center" gutter={16}>
            <Col>
              <Button
                icon={<RetweetOutlined />}
                onClick={() => setIsRepeat(!isRepeat)}
                type={isRepeat ? "primary" : "default"}
              />
            </Col>
            <Col>
              <Button icon={<StepBackwardOutlined />} onClick={prevTrack} />
            </Col>
            <Col>
              <Button
                icon={
                  isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />
                }
                onClick={playPause}
              />
            </Col>
            <Col>
              <Button icon={<StepForwardOutlined />} onClick={nextTrack} />
            </Col>
            <Col>
              <Button
                icon={<SwapOutlined />}
                onClick={() => setIsShuffle(!isShuffle)}
                type={isShuffle ? "primary" : "default"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MusicPlayer;
