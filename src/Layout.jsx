import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Navbar from "./Components/Nav_bar";


export default function Layout() {
  return (
    <>
      <Flex minH="100vh" direction={"column"} justify={"space-between"}>
       
        <Navbar/>
        <Outlet />
       
        
      </Flex>
    </>
  );
}