import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {Toaster, toast} from 'sonner'
import emailjs from "@emailjs/browser"

type TemplateParams = {
    name: string;
    phone: string;
    EDD: string;
    typeOfDelivery: string;
    accommodation: boolean;
    postnatalCare: boolean;
    hasDate: boolean;
    arrivalDate: string;
    hasLocation: boolean;
    arrivalLocation: string;
    hasExtraInfo: boolean;
    extraInformation: string;
};

export default function MyForm() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        expectedDeliveryDate: '',
        typeOfDelivery: '',
        accommodation: false,
        postnatalCare: false,
        arrivalDate: '',
        arrivalLocation: '',
        extraInformation: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement; // Type assertion added
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined; // Handle checkbox separately
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    function submitHandler() {
        if (!formData.name || !formData.phone || !formData.expectedDeliveryDate || !formData.typeOfDelivery) {
            toast.error('Please fill out first 4 required fields');
            return;
        }

        const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
        // e.preventdefault()
        console.log(formData)

        const templateParams: TemplateParams = {
            name : formData.name,
            phone : formData.phone,
            EDD : formData.expectedDeliveryDate,
            typeOfDelivery : formData.typeOfDelivery,
            accommodation : formData.accommodation,
            postnatalCare : formData.postnatalCare,
            hasDate : formData.arrivalDate !== '',
            arrivalDate : formData.arrivalDate,
            hasLocation : formData.arrivalLocation !== '',
            arrivalLocation : formData.arrivalLocation,
            hasExtraInfo : formData.extraInformation !=='',
            extraInformation : formData.extraInformation,
        }
        
        const promise = new Promise((resolve, reject) => {
            emailjs.send(serviceId, templateId, templateParams as unknown as Record<string, unknown>, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                resolve(response); // Resolve the promise on success
            })
            .catch((error) => {
                console.log("Error sending email", error);
                reject(error); // Reject the promise on error
            });
        });

        toast.promise(promise, {
          loading: 'Loading...',
          success: () => {
            return "Email Sent, You will get a reply soon, Thank you!";
          },
          error: 'Email failed to send, use other contact methods to reach out',
        });
    }

    return (
        <div>
        <Toaster richColors position='bottom-right'/>
        <form className='flex flex-wrap justify-between w-[550px] mobile-md:w-[250px] gap-y-8 mt-3 '>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='name'> Name </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='name'
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete='name'
                    required
                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='phone'> Phone </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='phone'
                    type="tel"
                    name='phone'
                    autoComplete='tel-national'
                    required
                    value={formData.phone}
                    onChange={handleChange}

                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3" htmlFor='EDD'> Expected Delivery Date </label> 
                <input className='border border-black p-2 rounded-sm'
                    id='EDD'
                    type="date"
                    name='expectedDeliveryDate'
                    required
                    value={formData.expectedDeliveryDate}
                    onChange={handleChange}

                />
            </div>
            <div className='flex flex-col w-[250px]'>
                <label className="w-fit mb-3"> Type Of Delivery </label> 
                {/* <Select onValueChange={handleChange} > */}
                <Select required onValueChange={(value) => setFormData(prevState => ({ ...prevState, typeOfDelivery: value }))}>
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
                    id='Accomodation'
                    type="checkbox"
                    name='accommodation'
                    checked={formData.accommodation}
                    onChange={handleChange}
                />
                <label htmlFor='Accomodation'> Accommodation </label> 
            </div>
            <div className='flex w-[250px] gap-x-2 items-center'>
                <input
                    id='pnc'
                    name='postnatalCare'
                    type="checkbox"
                    checked={formData.postnatalCare}
                    onChange={handleChange}
                />
                <label htmlFor='pnc'> Postnatal (AB) Care </label> 
            </div>
            <div className='flex flex-wrap gap-y-8 justify-between w-full'>

                <div className='flex flex-col w-[250px]'>
                    <label className="w-fit mb-3" htmlFor='arrival-date'> Date of Arrival </label> 
                    <input className='border border-black p-2 rounded-sm'
                        id='arrival-date'
                        type="date"
                        name='arrivalDate'
                        value={formData.arrivalDate}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col w-[250px]'>
                    <label className="w-fit mb-3" htmlFor='arrival-location'> Location for Pickup </label> 
                    <input className='border border-black p-2 rounded-sm'
                        id='arrival-location'
                        type="text"
                        name='arrivalLocation'
                        value={formData.arrivalLocation}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <label className="w-fit mb-3" htmlFor='typeOfDelivery'> Extra Information </label> 
                <textarea className="border resize-none border-black p-2 rounded-sm" 
                rows={4} 
                cols={50} 
                id='typeOfDelivery' 
                placeholder='Any extra information you want to tell us....'
                name='extraInformation'
                value={formData.extraInformation}
                onChange={handleChange}
                >
                    
                </textarea>
            </div>
            <button type="button" onClick={submitHandler} className='mb-8 px-9 border w-[150px] h-[60px] bg-button text-white text-sm tracking-widest'>
                SUBMIT
            </button>

        </form>
        </div>

    )
}