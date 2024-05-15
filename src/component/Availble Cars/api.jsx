import { IoSpeedometerOutline } from "react-icons/io5";
import { BiPauseCircle } from "react-icons/bi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import img1 from '../../assets/car1.png'
import img2 from '../../assets/car2.png'
import img3 from '../../assets/car3.png'
import img4 from '../../assets/car4.png'

const api =[
    {
id:1,
image:img1,
Year:2016,
h5:"Dodge Charger",
icons: <IoSpeedometerOutline className='react-icon' />,
icons2:   <BiPauseCircle className='react-icon' style={{color:'#F1BC00'}} />,
icons3:   <BsFillFuelPumpFill className='react-icon' style={{color:'#F1BC00'}} />,
h6: "10,000$",
btnText:'Rent'
},
{
    id:2,
    image:img2,
    Year:2016,
    h5:"Audi RS7 ",
    icons: <IoSpeedometerOutline className='react-icon' />,
    icons2:   <BiPauseCircle className='react-icon' style={{color:'#F1BC00'}} />,
    icons3:   <BsFillFuelPumpFill className='react-icon' style={{color:'#F1BC00'}} />,
    h6: "60.000$",
    btnText:'Buy'
},
{
    id:3,
    image:img3,
    Year:2016,
    h5:"Audi RS7 ",
    icons: <IoSpeedometerOutline className='react-icon' />,
    icons2:   <BiPauseCircle className='react-icon' style={{color:'#F1BC00'}} />,
    icons3:   <BsFillFuelPumpFill className='react-icon' style={{color:'#F1BC00'}} />,
    h6: "15.000$",
    btnText:'Rent'
},
{
    id:4,
    image:img4,
    Year:2020,
    h5:"Range Rover",
    icons: <IoSpeedometerOutline className='react-icon' />,
    icons2:   <BiPauseCircle className='react-icon' style={{color:'#F1BC00'}} />,
    icons3:   <BsFillFuelPumpFill className='react-icon' style={{color:'#F1BC00'}} />,
    h6: "65.000$",
    btnText:'Buy'
}]
export default api;
