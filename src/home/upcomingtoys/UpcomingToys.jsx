import { Button, Timeline } from "flowbite-react";
import React from "react";

const UpcomingToys = () => {
  return (
    <div className="w-[85%] mx-auto">
        <h1 className="text-3xl font-bold mt-16 mb-12 text-center ">Our Upcoming Toys</h1>
      <Timeline className="">
        <Timeline.Item className="mb-12"> 
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>20 July 2023</Timeline.Time>
            <Timeline.Title>Marvel Avengers Titan Hero Series Thor 12-Inch Figure</Timeline.Title>
            <Timeline.Body>
            The Thor figure is designed with a focus on authenticity, capturing the iconic look and details of the character from the Marvel Avengers universe. From Thor's winged helmet to his flowing red cape and intricate armor, the figure stays true to the hero's appearance in the movies.The figure boasts highly detailed sculpting, showcasing Thor's muscular physique, facial features, and intricate costume elements. The attention to detail in the sculpt adds to the overall realism and quality of the figure.
            </Timeline.Body>
                <img className="w-full h-[70vh]" src="https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2FCB0293AF3E484BF3A589935E0568DC82%2Fa9cddc35843b8e6b012b4c014d21079e9d0be621.jpg&w=3840&q=75" alt="" />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>August 17 2023</Timeline.Time>
            <Timeline.Title>Wonder Woman Doll</Timeline.Title>
            <Timeline.Body>
            The Wonder Woman doll features an authentic and highly detailed design inspired by the iconic superheroine from the DC Comics and movies. The doll captures the essence of Wonder Woman's appearance, including her costume, tiara, bracelets, and flowing hair.Wonder Woman dolls are designed with multiple points of articulation, allowing for a range of poses and dynamic play. These points of articulation typically include movable arms, legs, and sometimes even the head, enabling fans to recreate action-packed scenes or create their own adventures.
            </Timeline.Body>
            <img className="w-full h-[70vh]" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXEBXxrJf60_tWlLGXs1UiH4mpHp7I4Ay-UhYaSjnThB4pTFZLVzPcjpYUM8ugjeTt1dvp6hxWvZ8SKcZlqdWte07p4I4v2wofj_dDV2cdTGVmJzOiPCsTLmlZr1hr1bVh4-0Q_nL9GCTzkdpqsPNCbSkPbDtMIaNcplpFjkJLL_x1_6XHQCTY0Qso/s4608/IMG_5294.JPG" alt="" />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>December 22 2023</Timeline.Time>
            <Timeline.Title>Optimus Prime Toy Version-3 2023</Timeline.Title>
            <Timeline.Body>
            One of the key features of Optimus Prime toys is their ability to transform between different modes. Typically, they can transform from a robot mode to a vehicle mode, such as a truck or a futuristic vehicle. This transformation feature allows for dynamic play and adds an element of excitement and versatility to the toy.Optimus Prime toys often have multiple points of articulation, including movable limbs, head, and sometimes even finger articulation. This allows for various poses and dynamic action scenes, giving children and collectors the opportunity to create their own adventures with the toy.
            </Timeline.Body>
            <img className="w-full h-[70vh]" src="https://media.wired.com/photos/59330baf26780e6c04d2e33b/master/w_2560%2Cc_limit/Transformers-autobots.jpg" alt="" />
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default UpcomingToys;
