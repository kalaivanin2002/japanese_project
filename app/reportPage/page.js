// pages/destinationPage.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DestinationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { state } = router;
    console.log('Variable from source page:', state?.myVariable);
  }, [router]);

  return (
    <div>
      <p>Destination Page</p>
    </div>
  );
};

export default DestinationPage;
