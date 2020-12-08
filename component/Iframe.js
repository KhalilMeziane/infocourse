import { useState } from 'react';
import Skeleton from '../component/Skeleton'

export default function Iframe({sourceId ,title}) {
    const [loading,setLoading] = useState(true)
    const removeSke = ()=>{
        setLoading(false)
    }
    return (
        <>
            {loading && <Skeleton/>}
            <iframe className="responsive-iframe" onLoad={removeSke} src={`https://drive.google.com/embeddedfolderview?id=${sourceId}`} title={title}></iframe>
        </>
    )
}
