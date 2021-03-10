import React from "react";
import svg from './Svgdraw.module.css'

const SvgDraw = () => {
    return (
        <div>
            <div>
                SVG map
            </div>
            <svg viewBox="0 0 500 700">
                <path
                    //--- Координаты
                    d='M50 0 l40 10 l30 15 l15 10 l50 -20 l20 50 l15 -3 l0 -10
                    l45 -45 l10 2
                    '
                    //--- Цвета
                    fill='#0000ff80' stroke='#0000ff'/>
            </svg>

        </div>
    )
}

export default SvgDraw;