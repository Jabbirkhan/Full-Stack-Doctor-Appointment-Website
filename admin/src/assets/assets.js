import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import robot from './loginPhoto.jpg'

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    robot
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const all_doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        available: true,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        available: true,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        available: true,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '16 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc7',
        name: 'Dr. Christo Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        available: true,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        available: true,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        available: true,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '10 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        available: true,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '13 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        available: false,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        available: false,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        slots_booked: {}
    },
]

export const appointments = [
    {
        _id: "a1",
        userId: "u1",
        docId: "d1",
        slotDate: "25_6_2026",
        slotTime: "10:00 AM",
        userData: {
            _id: "u1",
            name: "Ali Khan",
            email: "ali@gmail.com",
            phone: "+92 300 1234567",
        },
        docData: all_doctors[0],
        amount: all_doctors[0].fees,
        cancelled: false,
        payment: false,
        isCompleted: false,
        status: "Pending"
    },
    {
        _id: "a2",
        userId: "u2",
        docId: "d2",
        slotDate: "26_6_2026",
        slotTime: "11:30 AM",
        userData: {
            _id: "u2",
            name: "Ahmed Raza",
            email: "ahmed@gmail.com",
            phone: "+92 301 9876543",
        },
        docData: all_doctors[1],
        amount: all_doctors[1].fees,
        cancelled: false,
        payment: false,
        isCompleted: false,
        status: "Confirmed"
    },
    {
        _id: "a3",
        userId: "u3",
        docId: "d3",
        slotDate: "27_6_2026",
        slotTime: "02:00 PM",
        userData: {
            _id: "u3",
            name: "Usman Tariq",
            email: "usman@gmail.com",
            phone: "+92 333 4567890",
        },
        docData: all_doctors[2],
        amount: all_doctors[2].fees,
        cancelled: false,
        payment: false,
        isCompleted: false,
        status: "Confirmed"
    },
    {
        _id: "a4",
        userId: "u4",
        docId: "d4",
        slotDate: "28_6_2026",
        slotTime: "04:00 PM",
        userData: {
            _id: "u4",
            name: "Sara Ahmed",
            email: "sara@gmail.com",
            phone: "+92 321 7654321",
        },
        docData: all_doctors[3],
        amount: all_doctors[3].fees,
        cancelled: true,
        payment: false,
        isCompleted: false,
        status: "Cancelled"
    },
    {
        _id: "a5",
        userId: "u5",
        docId: "d5",
        slotDate: "29_6_2026",
        slotTime: "12:00 PM",
        userData: {
            _id: "u5",
            name: "Bilal Khan",
            email: "bilal@gmail.com",
            phone: "+92 312 1231234",
        },
        docData: all_doctors[4],
        amount: all_doctors[4].fees,
        cancelled: false,
        payment: true,
        isCompleted: true,
        status: "Completed"
    },
    {
        _id: "a6",
        userId: "u6",
        docId: "d1",
        slotDate: "30_6_2026",
        slotTime: "09:30 AM",
        userData: {
            _id: "u6",
            name: "Hamza Ali",
            email: "hamza@gmail.com",
            phone: "+92 334 1234567",
        },
        docData: all_doctors[0],
        amount: all_doctors[0].fees,
        cancelled: false,
        payment: true,
        isCompleted: true,
        status: "Completed"
    },
    {
        _id: "a7",
        userId: "u7",
        docId: "d2",
        slotDate: "1_7_2026",
        slotTime: "03:00 PM",
        userData: {
            _id: "u7",
            name: "Talha Siddiqui",
            email: "talha@gmail.com",
            phone: "+92 345 6543210",
        },
        docData: all_doctors[1],
        amount: all_doctors[1].fees,
        cancelled: false,
        payment: true,
        isCompleted: true,
        status: "Completed"
    },
    {
        _id: "a8",
        userId: "u8",
        docId: "d3",
        slotDate: "2_7_2026",
        slotTime: "05:00 PM",
        userData: {
            _id: "u8",
            name: "Farhan Ahmed",
            email: "farhan@gmail.com",
            phone: "+92 300 7654321",
        },
        docData: all_doctors[2],
        amount: all_doctors[2].fees,
        cancelled: false,
        payment: true,
        isCompleted: true,
        status: "Completed"
    },
    {
        _id: "a9",
        userId: "u9",
        docId: "d4",
        slotDate: "3_7_2026",
        slotTime: "11:00 AM",
        userData: {
            _id: "u9",
            name: "Ayesha Noor",
            email: "ayesha@gmail.com",
            phone: "+92 333 8889990",
        },
        docData: all_doctors[3],
        amount: all_doctors[3].fees,
        cancelled: false,
        payment: false,
        isCompleted: false,
        status: "Pending"
    },
    {
        _id: "a10",
        userId: "u10",
        docId: "d5",
        slotDate: "4_7_2026",
        slotTime: "01:30 PM",
        userData: {
            _id: "u10",
            name: "Zain Abbas",
            email: "zain@gmail.com",
            phone: "+92 322 7778889",
        },
        docData: all_doctors[4],
        amount: all_doctors[4].fees,
        cancelled: false,
        payment: true,
        isCompleted: true,
        status: "Completed"
    }
];

