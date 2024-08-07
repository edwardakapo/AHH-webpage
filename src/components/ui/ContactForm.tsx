import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



export default function MyForm() {
    const [name, setName] = useState("");

    return (
        <form className='flex flex-wrap justify-between w-[550px] mobile-md:w-[250px] gap-y-8 mt-3 '>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='name'> Name </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='name'
                    type="text"
                    value={name}
                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='phone'> Phone </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='phone'
                    type="tel"
                    value={name}
                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='name'> Expected Delivery Date </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='name'
                    type="date"
                    value={name}
                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3"> Type Of Delivery </label> 
                <Select>
                    <SelectTrigger className="w-[250px] h-[44px] border-black">
                        <SelectValue placeholder="Select one...." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Selective CS">Selective CS</SelectItem>
                        <SelectItem value="Natural">Natural</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex w-[250px]  gap-x-2 items-center'>
                <input
                    id='name'
                    type="checkbox"
                    value={name}
                />
                <label htmlFor='name'> Accommodation </label> 
            </div>
            <div className='flex w-[250px] gap-x-2 items-center'>
                <input
                    id='name'
                    type="checkbox"
                    value={name}
                />
                <label htmlFor='name'> Postnatal (AB) Care </label> 
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='arrival-date'> Date of Arrival </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='arrival-date'
                    type="date"
                    value={name}
                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='arrival-location'> Location for Pickup </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='arrival-location'
                    type="text"
                    value={name}
                />
            </div>
            <div className='flex flex-col w-full'>
                <label className="w-fit mb-3" htmlFor='typeOfDelivery'> Extra Information </label> 
                <textarea className="border resize-none border-black p-2 rounded-sm" rows={4} cols={50} id='typeOfDelivery' placeholder='Any extra information you want to tell us....'>
                    
                </textarea>
            </div>
            <button className='mb-8 px-9 border w-[150px] h-[60px] bg-button text-white text-sm tracking-widest'>
                SUBMIT
            </button>


        </form>
    )
}