"use client"
import Contact from "@/components/Contact/contact";
import Home from "@/components/Home/home";
import Layout from "@/components/Layout/layout";
import React from "react";


const page = () => {
  return (
    <div className="bg-[#F5F5F5] h-full">
      <Layout >
        <Contact />
      </Layout>
    </div>
  );
};

export default page;