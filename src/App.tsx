import { useEffect, useState } from 'react';
import './App.css'
import { useIframeSdk } from '@whop/react'

function App() {
  const iframeSdk = useIframeSdk();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function purchase() {
      setLoading(true);
      try {
        const res = await iframeSdk.inAppPurchase({
          id: "ch_XdCLdy0rBpuMDqL",
          planId: "plan_P3agDRh4HNFvd"
        })

        if (res.status === "ok") {
          console.log(res.data);
        } else {
          console.log(res.error);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    purchase();
  }, []);

  return (
    <>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <p>Done</p>
        )
      }
    </>
  )
}

export default App
