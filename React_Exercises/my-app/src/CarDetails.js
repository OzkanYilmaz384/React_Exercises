import { useEffect, useRef, useState } from "react";

function CarDetails( {initialData} ) {
    const [carDetails, setCarDetails] = useState(initialData);

    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();
    

    useEffect(() => {
        setCarDetails(initialData)
    }, [initialData])

    useEffect(() => {
        modelRef.current.value = carDetails.model;
        yearRef.current.value = carDetails.year;
        colorRef.current.value = carDetails.color;
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCarDetails({
            ...carDetails,
            [name]:value
        })
    }
    console.log(carDetails);
    return ( 
        <form>
            <input onChange={handleChange} name="model" ref={modelRef} />
            <input onChange={handleChange} name="year" ref={yearRef} />
            <input onChange={handleChange} name="color" ref={colorRef} />
        </form>
     );
}

export default CarDetails;