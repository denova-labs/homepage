"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "../shared/icons";

const icons = [
  <Icons.bookopen />,
  <Icons.brain />,
  <Icons.media />,
  <Icons.help />,
  <Icons.laptop />,
  <Icons.sun />,
  <Icons.hearthandshake />,
]

export const IconsDish = ({
    className,
  }: {
    className?: string;
  }) => {

    return (
      <motion.div
        
        className={cn(className, "flex justify-between gap-4 sm:gap-16 flex-row")}
      >
        {icons.map((icon,index) => (
          <motion.span 
            initial={{ rotate: 0, opacity: 0.1, y: 110 }}
            animate={{ rotate: [0,5,-5,10, -10,10,-10,10,-10, 10, 0], opacity: 0.8, y: 100, color: "#a78bfa" }}
            transition={{
              delay: Math.floor(Math.random()*4)*.35 ,
              duration: 1.5,
              ease: "easeIn",
            }}
            className="size-4"
            key={"icondish-icon" + index}
          >
            {icon}
          </motion.span>
        ))}
      </motion.div> 
    );
  };