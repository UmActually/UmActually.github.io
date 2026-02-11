import type { Certification } from "./types.ts";
import appleAcademyLogo from "../assets/certifications/apple-academy.jpg";
import duolingoTestLogo from "../assets/certifications/duolingo-english-test.png";
import ccnaLogo from "../assets/certifications/cisco-ccna.png";
import googleLogo from "../assets/certifications/google.png";

export const certifications: Certification[] = [
    {
        id: "appleacademy",
        name: "Apple Developer Academy",
        issuer: "University of Naples Federico II",
        date: "June 2025",
        technologies: [
            "Swift", "SwiftUI", "UIKit", "iOS", "iPadOS", "Apple TV"
        ],
        skills: [
            "Public Presentation", "UX Testing", "Software Branding"
        ],
        links: [
            {
                label: "LinkedIn Post",
                url: "https://www.linkedin.com/posts/leonardo-corona-garza-8b4847269_officially-graduated-from-the-apple-developer-ugcPost-7366504307505963009--qn1"
            }
        ],
        iconURL: appleAcademyLogo.src
    },
    {
        id: "duolingo",
        name: "C2 English Proficiency",
        issuer: "Duolingo English Test",
        date: "July 2024",
        technologies: [],
        skills: [
            "Conversational English", "Business English"
        ],
        links: [
            {
                label: "Certificate",
                url: "https://certs.duolingo.com/l9pjrbz27wffl92c"
            }
        ],
        iconURL: duolingoTestLogo.src
    },
    {
        id: "ccna",
        name: "Cisco Networking Academy CCNA 1-3",
        issuer: "Cisco",
        date: "August 2025",
        technologies: [
            "Dynamic Routing", "Switching", "VLANs", "NAT", "TCP/IP", "NG Firewalls"
        ],
        skills: [
            "OSI Model", "Network Security", "Cloud & Virtualization"
        ],
        links: [
            {
                label: "Credly Badges",
                url: "https://www.credly.com/users/leonardo-corona-garza/"
            }
        ],
        iconURL: ccnaLogo.src
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity Professional Certificate",
        issuer: "Google & Coursera",
        date: "August 2025",
        technologies: [
            "Kali Linux", "SQL Injections", "XSS"
        ],
        skills: [
            "Risk Analysis", "NIST Framework", "Detection & Response"
        ],
        links: [
            {
                label: "Credly Badges",
                url: "https://www.credly.com/users/leonardo-corona-garza/"
            }
        ],
        iconURL: googleLogo.src
    },
    {
        id: "itsupport",
        name: "IT Support Professional Certificate",
        issuer: "Google & Coursera",
        date: "December 2024",
        technologies: [
            "Active Directory", "Bash", "Powershell", "Windows Registry", "DNS", "Encryption"
        ],
        skills: [
            "Costumer Support", "Troubleshooting", "Network Administration"
        ],
        links: [
            {
                label: "Credly Badges",
                url: "https://www.credly.com/users/leonardo-corona-garza/"
            }
        ],
        iconURL: googleLogo.src
    }
];
