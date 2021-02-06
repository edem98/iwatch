import  {useState} from 'react'

export default function Toggle({ children }) {

    const [on,setOn] = useState(true);
    
    const toggle = () => {
        setOn(!on)
    }

    return  children({on: on,toggle: toggle})
       
}
