import * as React from 'react'
import { snap } from '../utils/midtrans-services'

export default function Example(){
    const onClick = React.useCallback(()=>{

    },[])

    React.useEffect(()=>{
        const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const myMidtransClientKey = 'SB-Mid-client-2Vg0OzaHlJoMrdET'; //change this according to your client-key
      
        const script = document.createElement('script');
        script.src = snapSrcUrl;
        script.setAttribute('data-client-key', myMidtransClientKey);
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    },[])
    return <button></button>
}