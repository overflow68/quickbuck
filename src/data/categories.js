import {FaChild} from 'react-icons/fa'
import {BsController} from 'react-icons/bs'
import {GiSmartphone} from 'react-icons/gi'
import {FaTractor} from 'react-icons/fa'
import {FaDog} from 'react-icons/fa'
import {IoIosFootball} from 'react-icons/io'
import {RiTShirtLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {BsLaptop} from 'react-icons/bs'
import {AiOutlineCar} from 'react-icons/ai'
import {MdOutlineRealEstateAgent} from 'react-icons/md'
import {MdOutlineCleaningServices} from 'react-icons/md'
import {FaRegHandshake} from 'react-icons/fa'

import services from '../images/services.jpg'
import kids from '../images/kids.jpg'
import entertainment from '../images/entertainment.jpeg'
import phones_tablets from '../images/phones.png'
import agriculture from '../images/tractor.jpg'
import animals from '../images/animals.jpg'
import sports from '../images/sports.jpg'
import fashion from '../images/fashion.jpeg'
import home from '../images/home.jpeg'
import tech from '../images/tech.jpg'
import vehicles from '../images/vehicles.jpeg'
import real_estate from '../images/realestate.jpg'
import other from '../images/other.jpeg'



 export const categories = [
    [FaChild,"Kids",kids],
    [BsController,"Entertainment",entertainment],
    [GiSmartphone,"Phones-Tablets",phones_tablets],
    [FaTractor,"Agriculture",agriculture],
    [FaDog,"Animals",animals],
    [IoIosFootball,"Sports",sports],
    [RiTShirtLine,"Fashion",fashion],
    [AiOutlineHome,"Home",home],
    [BsLaptop,"Tech",tech],
    [AiOutlineCar,"Vehicles",vehicles],
    [MdOutlineRealEstateAgent,"Real Estate",real_estate],
    [MdOutlineCleaningServices,"Services",services],
    [FaRegHandshake,"Other",other]]