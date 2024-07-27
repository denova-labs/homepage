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
const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100;
  const value2 = (15 + 36 * Math.random()) / 100;
  return {
    originX: value,
    originY: value2
  };
};

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 0.23;

const variants = {
  initial: {rotate: 0, opacity: 0.5},
  animation: (i) => ({
    rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration()
    }
  }),
  reset: {
    rotate: 0
  }
};

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
            style={{
              ...getRandomTransformOrigin(),
            }}
            // -- controls --
            // custom={index}
            // variants={variants}
            initial={{ rotate: 0, opacity: 0.1, y: 110 }}
            animate={{ rotate: [0,5,-5,10, -10,10,-20,20,-10, 10, 0], opacity: 0.9, y: 100, color: "#c4b5fd" }}
            transition={{
              delay: Math.floor(Math.random()*4)*.4 + 0.5,
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