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
        
        className="flex justify-between gap-4 sm:gap-16 flex-row"
      >
        {icons.map((icon,index) => (
          <motion.span 
            initial={{ opacity: 0.5, y: 110 }}
            whileInView={{ opacity: 0.85, y: 100, color: "#c4b5fd" }}
            transition={{
              delay: Math.floor(Math.random()*3)*.4 + 0.3,
              duration: 1.1,
              ease: "easeInOut",
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