import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgComponent(active) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <Path
        d="M24.002 4.004c-11.044 0-19.998 8.954-19.998 19.998 0 9.98 7.312 18.252 16.874 19.758V29.784h-5.08v-5.782h5.08v-4.406c0-5.016 2.986-7.782 7.552-7.782 2.188 0 4.48.39 4.48.39v4.918h-2.528c-2.48 0-3.256 1.544-3.256 3.126v3.75h5.542l-.886 5.782h-4.656v13.976C36.688 42.258 44 33.984 44 24.002c0-11.044-8.954-19.998-19.998-19.998z"
        fill="#395185"
      />
      <Circle cx={24} cy={24} r={20} fill={active === true? "#5181B8": "#c0c0c0"} />
      <Path
        d="M35.45 17.948c.167-.547 0-.948-.793-.948H32.03c-.668 0-.973.347-1.141.728 0 0-1.335 3.198-3.228 5.272-.61.604-.89.794-1.223.794-.166 0-.408-.19-.408-.737v-5.109c0-.656-.193-.948-.75-.948h-4.127c-.417 0-.668.303-.668.593 0 .62.946.764 1.043 2.515v3.797c0 .831-.152.983-.488.983-.89 0-3.055-3.21-4.34-6.885-.25-.714-.503-1.002-1.174-1.002h-2.625c-.751 0-.901.347-.901.728 0 .685.89 4.073 4.145 8.553 2.17 3.06 5.226 4.718 8.01 4.718 1.668 0 1.874-.368 1.874-1.003v-2.313c0-.736.159-.885.687-.885.388 0 1.056.193 2.615 1.667C31.11 30.214 31.405 31 32.405 31h2.626c.75 0 1.124-.368.909-1.095-.236-.724-1.087-1.776-2.215-3.022-.613-.71-1.53-1.475-1.809-1.858-.389-.492-.276-.71 0-1.148.002.002 3.2-4.424 3.534-5.928z"
        fill="#F8F9FD"
      />
    </Svg>
  )
}

export default SvgComponent