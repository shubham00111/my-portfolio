"use client";
import { title } from "process";
import {
  CodeXml,
  Globe,
  Lightbulb,
  LocateIcon,
  LocationEdit,
  Mail,
  MapPin,
  Mars,
  Phone,
} from "lucide-react";
import Link from "next/link";
import LinkEffect from "@/components/LinkEffect";

export const user = {
  name: "Shubham Rawat",
  title: "Front End Developer",
  email: "shubhamb23efd@gmail.com",
  aboutUser: [
    `Hello, World! I am Shubham Rawat — a Front-End Developer dedicated to building elegant, scalable, and high-performance applications. With experience at TSYS - Global Payments, I’ve driven key initiatives including migrating legacy deployments to AWS S3 + CloudFront (reducing costs by ~80%), creating reusable UI frameworks that sped up delivery by ~60%, and leading a Figma-to-Code POC with GenAI that boosted productivity by ~70%.`,
    `My expertise spans React, Next.js, TypeScript, AWS, and modern front-end ecosystems, with a strong focus on design systems, reusability, and developer experience. Beyond work, I enjoy experimenting with UI/UX, exploring cloud-native solutions, and turning innovative ideas into impactful projects.`,
    `Let’s connect and collaborate!`,
  ],
  about: [
    {
      icon: <CodeXml />,
      title: (
        <div className="flex gap-2">
          Front End Software Developer{" "}
          <Link href={"https://www.tsys.com/"} target="_blank">
            <LinkEffect>
              <strong>@TSYS</strong>
            </LinkEffect>
          </Link>
        </div>
      ),
    },
    {
      icon: <MapPin />,
      title: <p>Noida, Uttar Pradesh, India</p>,
    },
    {
      icon: <Phone />,
      title: <p>+91 9958519365</p>,
    },
    {
      icon: <Mail />,
      title: (
        <div>
          <Link href={"shubhamb23efd@gmail.com"}>
            <LinkEffect>shubhamb23efd@gmail.com</LinkEffect>
          </Link>
        </div>
      ),
    },
    {
      icon: <Globe />,
      title: (
        <Link href={"https://www.shubhamrawat.dev"} target="_blank">
          <LinkEffect>shubhamrawat.dev</LinkEffect>
        </Link>
      ),
    },
    {
      icon: <Mars />,
      title: <p>he/him</p>,
    },
  ],
};
