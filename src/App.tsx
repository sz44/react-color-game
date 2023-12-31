import { useState, useEffect } from 'react'

function App() {
  const [colors, setColors] = useState<string[]>(genColorsArray(3));
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random()*colors.length));
  const [selected, setSelected] = useState("");

  function clickHandler(index:number) {
    if (index === colorIndex) {
      setSelected("correct!")
      setTimeout(()=>{
        setColors(genColorsArray(3));
        setColorIndex(Math.floor(Math.random()*colors.length));
        setSelected("");
      }, 500)
    } else {
      setSelected("wrong!")
      setTimeout(()=>{
        setSelected("");
      }, 500)
    }
  }

  return (
    <div id="container">
      <div id="colorRect" style={{background:colors[colorIndex]}}></div>
      <div id="buttons">
        {colors.map((colorCode, i) => {
          return <button key={colorCode} onClick={() => clickHandler(i)}>{colorCode.toUpperCase()}</button>
        })}
      </div>
      <div style={{height:"50px", textAlign:"center", padding:"10px", color:`${selected==="correct!"?"green":"red"}`}}>{selected}</div>
    </div>
  )
}

function genColorsArray(n:number) {
  const colorArray = [];

  for (let i=0; i<n; i++) {
    colorArray.push(genRandomColorHex());
  }

  return colorArray;
}

function genRandomColorHex() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

export default App
