"use client "



export default function Boton({ producto }) {

    return (
        <div>
            <button
            onClick={producto}
                className="bg-blue-600 text-white  rounded-2xl w-20 h-12  ">Ver detalles </button>
        </div>
    )
}