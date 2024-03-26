"use client"
import AdminInterface from "@/components/AdminPanel/admin";
import Layout from "@/components/Layout/layout";
import React from "react";


const page = () => {
    return (
        <div className="bg-[#F5F5F5] h-full">
            <Layout>
                <AdminInterface />
            </Layout>
        </div>
    );
};

export default page;