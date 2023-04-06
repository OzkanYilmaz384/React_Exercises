import { useMemo } from "react"

export const FilteredList = ({list}) => {
    
    const filteredPeople = useMemo(() => {
       return list.filter((person) => person.age > 18);
    }, [list])

    return (
        <ul>
            {filteredPeople.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
    )
}