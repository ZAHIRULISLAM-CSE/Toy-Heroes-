import { Timeline } from "flowbite-react";
import React from "react";

const FuturePlan = () => {
  return (
    <div className="mt-20 w-[85%] mx-auto ">
        <h1 className="text-3xl mb-16  font-bold  text-center">Our Future Plan About Toy</h1>
      <Timeline horizontal={true}>
        <Timeline.Item>
          <Timeline.Point/>
          <Timeline.Content>
            <Timeline.Title>Extensive Character Selection</Timeline.Title>
            <Timeline.Time>Fully Execute  on December 3, 2023</Timeline.Time>
            <Timeline.Body>
            We understand the diverse and passionate fan base of superhero characters. That's why we're committed to offering an extensive selection of super hero toys, featuring popular characters from both Marvel and DC Comics universes. Whether it's iconic heroes like Superman, Batman, Spider-Man, or newer additions like Black Panther or Captain Marvel, we strive to provide a wide variety of choices.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Title>High-Quality Collectibles</Timeline.Title>
            <Timeline.Time>Fully Execute  on May 23, 2024</Timeline.Time>
            <Timeline.Body>
            We believe in offering super hero toys that meet the expectations of collectors and enthusiasts. Our future plan includes partnering with renowned toy manufacturers to bring high-quality collectibles to the market. These collectibles will feature exceptional craftsmanship, attention to detail, and premium materials, making them prized additions to any collection.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point  />
          <Timeline.Content>
            <Timeline.Title>Interactive Play Experiences</Timeline.Title>
            <Timeline.Time>Fully Execute  on August 7, 2023</Timeline.Time>
            <Timeline.Body>
            We recognize the importance of interactive play experiences that inspire creativity and imagination. Our future super hero toys will incorporate features that engage children and fans in exciting adventures. This could include action features, sound effects, lights, or innovative playsets that allow kids to recreate iconic moments from their favorite superhero stories or invent their own.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default FuturePlan;
