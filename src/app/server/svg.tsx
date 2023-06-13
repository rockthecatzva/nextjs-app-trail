export default function Svg(){
    ///data-next-pos={{cx: 200, cy: 200}}

    return <svg id="svg" viewBox="0 0 600 400" width={600} height={400} style={{border: "solid 1px black"}}>
        <circle cx={100} cy={100} r={50} fill={"#f00"}   />
    </svg>
}