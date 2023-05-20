import React from "react";
import { Footer } from "flowbite-react";
import logo from '/images/icon.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footers = () => {
  return (
    <div className="mt-16">
      <Footer bgDark={true}>
        <div className="w-full">
          <div className="grid w-[98%] mx-auto grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
              <Footer.Title className="text-pink-600 text-3xl font-bold" title="Toy Heros"/>
              <Footer.LinkGroup col={true}>
                <img className="h-8 w-8" src={logo} alt="" />
                <Footer.Link href="/blogs" >Blog</Footer.Link>
                <Footer.Link>About</Footer.Link>
                <Footer.Link>Careers</Footer.Link>
                <Footer.Link>Brand Center</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link>Rajshahi,Bangladesh</Footer.Link>
                <Footer.Link >Phone:++01733850321</Footer.Link>
                <Footer.Link >Email:joy@gmail.com</Footer.Link>
                <Footer.Link href="https://www.facebook.com/zahirulislam.joy.98">Facebook</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Office Address" />
              <Footer.LinkGroup col={true}>
                <Footer.Link >Rajshahi</Footer.Link>
                <Footer.Link >BinodPur</Footer.Link>
                <Footer.Link>Bangladesh</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col={true}>
                <Footer.Link >iOS</Footer.Link>
                <Footer.Link >Android</Footer.Link>
                <Footer.Link>Windows</Footer.Link>
                <Footer.Link>MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full  bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
            {/* <Footer.Copyright   by="Toy Heros Official™" year={2023} /> */}
            <div>
                <h1 className="text-2xl text-gray-400 mb-1 font-bold">Toy Heros Official™" 2023</h1>
                <p className="text-xl font-semibold text-gray-400">All Rights Reserved</p>
            </div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.facebook.com/zahirulislam.joy.98" icon={BsFacebook} />
              <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
              <Footer.Icon href="https://www.twitter.com/" icon={BsTwitter} />
              <Footer.Icon href="https://www.github.com/" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;
