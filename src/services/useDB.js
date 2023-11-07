import { useState } from 'react';

function useDB() {
    const [isLoading, setIsLoading] = useState(false);
    async function fetchData(fileName) {
        let data;
        setIsLoading(true);
          try {
              const response = await fetch(`https://rent-site-a6109-default-rtdb.firebaseio.com/${fileName}.json`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const jsonData = await response.json();
              data = Object.values(jsonData);
          } catch (error) {
              console.error('Error fetching data:', error);
          } finally {
            setIsLoading(false);
          }
        return data;
    }
    return {fetchData, isLoading}
}

export default useDB;

