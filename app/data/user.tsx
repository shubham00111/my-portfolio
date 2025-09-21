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
  about: [
    {
      icon: <CodeXml />,
      title: (
        <p>
          Front End Software Developer <strong>@TSYS</strong>
        </p>
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
        <p>
          <Link href={"shubhamb23efd@gmail.com"}>
            <LinkEffect>shubhamb23efd@gmail.com</LinkEffect>
          </Link>
        </p>
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
