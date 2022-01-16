import React, { useState } from "react";

interface PagnationProps {
    list: [];
    selectedRound: number;
    setSelectedRound: any;
}
const Pagnation: React.FC<PagnationProps> = ({
    list,
    selectedRound,
    setSelectedRound,
}) => {
    let [numberOfProgramsInList] = useState(list.length - 1);

    const handleForwardClick = () => {
        //check if the selectedRound is in the list
        if (selectedRound + 1 <= numberOfProgramsInList) {
            setSelectedRound((selectedRound += 1));
        } else {
            return;
        }
    };

    const handleBackClick = () => {
        if(selectedRound - 1 >= 0 ) {
            setSelectedRound((selectedRound -= 1));
        } else {
            return; 
        }

    }
    return (
        <div className="container text-xs text-white text-center mx-auto">
            <button className="pr-5 pl-5" onClick={handleBackClick}>
                {"<- Frem"}
            </button>
            <button className="pr-5 pl-5" onClick={handleForwardClick}>
                {"Tidligere ->"}
            </button>
        </div>
    );
};

export default Pagnation;
